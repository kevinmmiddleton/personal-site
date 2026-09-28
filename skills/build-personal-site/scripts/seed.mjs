#!/usr/bin/env node
// Picks which palettes and font pairings to show this user, so sites diverge.
//
// usage: node scripts/seed.mjs "<first name>" [YYYY-MM-DD]
//
// The same name on the same day always gets the same shortlist (so a session
// can be resumed), while different people, or the same person on another day,
// start from a different place. The model cannot guess the output, which is
// the point: it breaks the pull toward the same "safe" pick every time.
// No dependencies. Node 18 or newer.

import { createHash } from 'node:crypto';

const PALETTES = [
  { id: '01', name: 'Fog and oxblood', family: 'cool' },
  { id: '02', name: 'Lilac and pine', family: 'tinted' },
  { id: '03', name: 'Mint stone and mulberry', family: 'tinted' },
  { id: '04', name: 'Marigold and deep teal', family: 'saturated' },
  { id: '05', name: 'Bubblegum and bottle', family: 'saturated' },
  { id: '06', name: 'Graphite and rose', family: 'dark' },
  { id: '07', name: 'Petrol and ochre', family: 'dark' },
  { id: '08', name: 'Chalk and moss', family: 'paper' },
  { id: '09', name: 'Paper and bronze', family: 'paper' },
  { id: '10', name: 'Concrete and hi-vis', family: 'cool' },
];

const FONTS = [
  { id: 'A', name: 'Funnel Display + Funnel Sans' },
  { id: 'B', name: 'Hedvig Letters Serif + Hedvig Letters Sans' },
  { id: 'C', name: 'Young Serif + Schibsted Grotesk' },
  { id: 'D', name: 'Anybody + Atkinson Hyperlegible Next' },
  { id: 'E', name: 'Big Shoulders Display + Public Sans' },
  { id: 'F', name: 'Tilt Warp + Host Grotesk' },
  { id: 'G', name: 'Brygada 1918 + Hanken Grotesk' },
  { id: 'H', name: 'Parkinsans + Onest' },
];

const name = (process.argv[2] || '').trim().toLowerCase();
const date = process.argv[3] || new Date().toISOString().slice(0, 10);
if (!name) {
  console.error('usage: node scripts/seed.mjs "<first name>" [YYYY-MM-DD]');
  process.exit(1);
}

const digest = createHash('sha256').update(`${name}|${date}`).digest();
let state = digest.readUInt32LE(0) || 1;
// mulberry32: small, fast, deterministic
const rand = () => {
  state = (state + 0x6d2b79f5) >>> 0;
  let t = state;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
const shuffle = (list) => {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// Palettes: four, from at least three families, at least one not light.
const order = shuffle(PALETTES);
const picks = [];
const families = new Set();
for (const p of order) {
  if (picks.length === 4) break;
  const slotsLeft = 4 - picks.length;
  const familiesNeeded = Math.max(0, 3 - families.size);
  if (families.has(p.family) && slotsLeft <= familiesNeeded) continue;
  picks.push(p);
  families.add(p.family);
}
if (!picks.some((p) => ['dark', 'saturated'].includes(p.family))) {
  const bold = order.find((p) => ['dark', 'saturated'].includes(p.family));
  picks[picks.length - 1] = bold;
}
const paletteBackups = order.filter((p) => !picks.includes(p));

const fontOrder = shuffle(FONTS);
const fonts = fontOrder.slice(0, 3);
const fontBackups = fontOrder.slice(3);

const key = digest.toString('hex').slice(0, 8);
console.log(`Seed key: ${key}  (${name}, ${date})`);
console.log('\nShow these palettes:');
for (const p of picks) console.log(`  ${p.id} ${p.name}  [${p.family}]`);
console.log('\nShow these font pairings:');
for (const f of fonts) console.log(`  ${f.id} ${f.name}`);
console.log('\nBackups, in order (use these to replace any of your own first-instinct picks):');
console.log(`  palettes: ${paletteBackups.map((p) => p.id).join(', ')}`);
console.log(`  fonts: ${fontBackups.map((f) => f.id).join(', ')}`);
