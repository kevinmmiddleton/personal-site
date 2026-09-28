# Palettes and font pairings

Ten palettes and eight font pairings. The user never sees all of them at once. `scripts/seed.mjs`
picks a shortlist from the user's name and today's date so two people who build a site on the same
day, in the same field, still start from different places. Then you strike your own three
instinctive picks (see "Divergence" below). What is left is what you show.

## Why the menu looks like this

By September 2026, AI-built pages have a house look of their own, the one people now call "Claude
beige": a cream or paper background, a terracotta, clay, or persimmon accent, Instrument Serif
headlines with one italic word, and small tracked-caps labels above every heading. The earlier
version of this menu sat right in that cluster (five of ten palettes were paper with a clay or
persimmon accent, and Instrument Serif was one of four fonts). This version spreads the grounds out
on purpose:

| Family | Palettes |
|---|---|
| Cool light | 01 Fog and oxblood, 10 Concrete and hi-vis |
| Tinted neutral | 02 Lilac and pine, 03 Mint stone and mulberry |
| Saturated ground | 04 Marigold and deep teal, 05 Bubblegum and bottle |
| Dark | 06 Graphite and rose, 07 Petrol and ochre |
| Paper-ish (max two) | 08 Chalk and moss, 09 Paper and bronze |

Neither paper option is warm cream: both grounds are close to neutral, and neither uses a clay,
terracotta, or persimmon accent.

**No blue or indigo action colors.** The skill bans blue and indigo as a primary accent because it
is the SaaS default. Earlier palettes 02 (Cool blue) and 06 (Radical optimism, cobalt) broke that
rule. Both are gone. Cool grounds are fine (01, 07, 10); the action color on them is never blue.

Every palette below has been checked: ink on background at least 7:1, primary on background at
least 4.5:1, button label on primary at least 4.5:1, ink on the highlight at least 4.5:1.

---

## The ten palettes

Each lists: background, ink, muted ink, primary (buttons, links, the full-bleed band), button label
on primary, secondary, and pop (the highlighter mark and text selection only, never text).

### 01 Fog and oxblood (cool light). The backbone default.

- Background `#E7EBED` · Ink `#161A1D` · Muted `#475057`
- Primary `#8A1C2B` (oxblood) · Label on primary `#FFFFFF`
- Secondary `#46606A` (slate) · Pop `#F2C14E` (marigold)
- Deep band (footer) `#1A2226`

Vibe: composed, serious, a little bit of wine. Best for: finance, law, operations, anyone who wants
gravity without navy.

### 02 Lilac and pine (tinted neutral)

- Background `#EAE6F0` · Ink `#1C1726` · Muted `#4B4458`
- Primary `#1D5C45` (pine) · Label `#FFFFFF`
- Secondary `#6D5A86` (dusk violet, small uses only) · Pop `#FFB38A` (apricot)
- Deep band `#1C1726`

Vibe: unexpected, gentle, confident. Best for: product, research, education, coaching.

### 03 Mint stone and mulberry (tinted neutral)

- Background `#DCE7E1` · Ink `#15201B` · Muted `#3C5048`
- Primary `#7B2D5B` (mulberry) · Label `#FFFFFF`
- Secondary `#4F6B63` (lichen) · Pop `#F7D154` (yolk)
- Deep band `#15201B`

Vibe: fresh, a bit botanical, grown-up. Best for: health, climate, science, nonprofits.

### 04 Marigold and deep teal (saturated ground)

- Background `#F2B632` · Ink `#1E1608` · Muted `#4A3304` (a dark marigold, never gray)
- Primary `#0E4D45` (deep teal) · Label `#FFFFFF`
- Secondary `#FBE3A0` (pale marigold, for washes) · Pop `#FF9BAE` (pink)
- Deep band `#0E4D45`

Vibe: sunny, loud in a good way, impossible to confuse with a template. Best for: creatives,
teachers, community builders, anyone whose personality is the pitch.

### 05 Bubblegum and bottle (saturated ground)

- Background `#F6B3C5` · Ink `#1F0E14` · Muted `#5E2436` (a dark rose, never gray)
- Primary `#173F2E` (bottle green) · Label `#FFFFFF`
- Secondary `#FCE3EA` (pale pink, for washes) · Pop `#FFF27A` (lemon)
- Deep band `#173F2E`

Vibe: playful, warm, self-assured. Best for: design, marketing, hospitality, events.

### 06 Graphite and rose (dark)

- Background `#1B1E21` · Ink `#ECEAE4` · Muted `#B4B9BC`
- Primary `#F09AB0` (rose) · Label on primary `#1B1E21` (dark text, not white)
- Secondary `#8FA39E` (sage gray) · Pop `#F2C14E` (marigold; the marked words switch to dark ink)
- Deep band `#101214`

Vibe: quiet, nocturnal, soft edges on a hard ground. Best for: engineers, writers, designers who
want dark without the neon-dashboard look. Read "Palette on dark" in design-system.md first.

### 07 Petrol and ochre (dark)

- Background `#0F2A33` · Ink `#EAF0EC` · Muted `#A9BFC0`
- Primary `#E7B54A` (ochre) · Label `#0F2A33`
- Secondary `#7FA5A0` (sea glass) · Pop `#F4A6A0` (salmon; marked words switch to dark ink)
- Deep band `#081A20`

Vibe: deep water, lamplit brass. Best for: strategy, architecture, maritime, research. Same
dark-palette cautions as 06. Ochre is warm and flat, not a neon accent: no glows.

### 08 Chalk and moss (paper-ish)

- Background `#F4F5F0` · Ink `#1A1D14` · Muted `#4B5140`
- Primary `#3E5A1A` (moss) · Label `#FFFFFF`
- Secondary `#C9CFBC` (lichen gray, washes) · Pop `#FFD23F` (sunflower)
- Deep band `#1A1D14`

Vibe: clean, outdoorsy, plain-spoken. Best for: anyone who wants a light page that is not beige.

### 09 Paper and bronze (paper-ish)

- Background `#F6F5F2` · Ink `#1E1B16` · Muted `#4F4A40`
- Primary `#6B5210` (bronze) · Label `#FFFFFF`
- Secondary `#D9D4C8` (stone, washes) · Pop `#F4B6C2` (pink)
- Deep band `#2A2418`

Vibe: craftsman, understated, a little old-world. Best for: writers, editors, makers, historians.
Keep the ground this neutral; do not let it drift toward cream.

### 10 Concrete and hi-vis (cool light)

- Background `#D9DCD8` · Ink `#111311` · Muted `#3E433D`
- Primary `#111311` (near-black) · Label on primary `#FFE500`
- Secondary `#9AA19A` (concrete) · Pop `#FFE500` (hi-vis yellow)
- Deep band `#111311`

Vibe: construction site, signage, blunt. Best for: engineers, operators, anyone who wants the site
to feel built rather than decorated.

---

## The eight font pairings

Display face for headlines, body face for everything else. Data labels (dates, numbers, short
group labels) use **Fragment Mono** in every pairing. All are on Google Fonts (verified September
2026).

| # | Display | Body | Vibe |
|---|---|---|---|
| A | Funnel Display | Funnel Sans | Contemporary grotesk with odd, soft corners. The backbone default. |
| B | Hedvig Letters Serif | Hedvig Letters Sans | Sturdy, characterful editorial pair. No italic, so no italic accent words. |
| C | Young Serif | Schibsted Grotesk | Chunky, warm slab-ish serif over a newsy grotesk. |
| D | Anybody | Atkinson Hyperlegible Next | Width-flexing display (set it wide or condensed), very legible body. |
| E | Big Shoulders Display | Public Sans | Tall condensed poster type over a plain civic sans. |
| F | Tilt Warp | Host Grotesk | Soft, bouncy display with a clean, quiet body. |
| G | Brygada 1918 | Hanken Grotesk | Old-style serif with history. Has an italic: use it for quotes, never for one "accent" word. |
| H | Parkinsans | Onest | Friendly geometric with quirks, over a modern neutral body. |

Never offer: Instrument Serif, Instrument Sans, Inter, Geist, Fraunces, Space Grotesk, Space Mono,
Plus Jakarta Sans, DM Sans, DM Serif, Playfair Display, Cormorant, Newsreader, Syne, Outfit, Mona
Sans, Recoleta, IBM Plex, Roboto, Montserrat, or a system sans as the display face. These are the
faces models reach for first, so a page set in one of them reads as generated. Bricolage Grotesque
was the backbone default through 0.4.0; it is now common enough in generated pages that it is off
the menu too.

---

## The shortlist: seed, then divergence

Two steps, in this order, before you show the user anything.

**1. Seed.** Run the seed script from the skill folder with the user's first name and today's date:

```
node scripts/seed.mjs "Alex" 2026-09-27
```

It prints four palettes (always from at least three different families, and always at least one
that is dark or saturated) and three font pairings, plus a seed key. Record the seed key in `PRODUCT.md`.

If Node is not available, do it by hand, deterministically: add the number of letters in the
user's first name to today's day of the month. Call it N. Start at palette number (N mod 10) + 1
and take every third palette, wrapping around, until you have four from at least three families.
Start at font (N mod 8) + 1 (A = 1) and take every third pairing until you have three.

**2. Divergence.** Privately, before looking at the shortlist, write down the three palettes and
the three font pairings you would have picked for this person if nobody had asked you to be
different (the ones that "obviously fit" their field). Remove any of them from the shortlist and
replace each with the next seeded option. Do not tell the user about the struck picks unless they
ask; the point is to shave off the predictable answer, not to perform it.

If the user asks for something specific ("I want dark", "show me all ten"), their request wins over
the seed. The seed is a starting point, not a rule.

---

## How to use these in generation

After the user picks, update the backbone's `:root` variables:

- `--color-bg`, `--color-ink`, `--color-ink-muted` → background, ink, muted from the palette
- `--color-ink-faint` → muted, or a step lighter if it still clears 4.5:1 on every wash
- `--color-primary` → primary; `--color-primary-deep` → a darker primary for link text and hover
  (on dark palettes, a lighter one), 4.5:1 on the background
- `--color-label` → the palette's label on primary (white on most light palettes, the dark ground on 06 and
  07, hi-vis yellow on 10); `--color-on-primary` → the same, slightly softened
- `--color-secondary`, `--color-pop`, `--color-deep` → secondary, pop, deep band
- `--color-line`, `--color-line-strong` → hairlines tinted toward the ground (on dark, a light tint
  at about 12 to 16 percent)
- Chapter washes (`z-a` to `z-e`) → five soft tints near the ground, each with a `--zone` accent at
  4.5:1 or better on its wash

On saturated grounds (04, 05), muted text must be a dark shade of the ground's own hue, never a
gray: the Impeccable detector flags gray text on colored backgrounds (`gray-on-color`). On dark
grounds (06, 07), the highlighter mark sets the marked words in the background color so they stay
readable on the pop.

Then run the design check. Every palette here was run through the detector on the backbone with its
tokens set this way, and came back with 0 findings.
