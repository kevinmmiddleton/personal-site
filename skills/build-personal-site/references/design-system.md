# Personal Site Design System

The single source of truth for how the site looks. Paste this at the start of any session
before asking for site changes. If output drifts generic, the fix is here, not in the prompt.
Silence in this doc = the model fills the gap with defaults. So it's explicit on purpose.

The north star: this should read like a **considered editorial page**, a well-set magazine
profile or a print résumé with personality, **not** a SaaS marketing landing page.

---

## Typography

Three typefaces, each with one job. All from Google Fonts. The backbone ships pairing A from
`palettes.md`; swap in the user's pick.

- **Display, `Funnel Display`** (contemporary grotesk with soft, odd corners). Headlines, section
  titles, subheads, pull quotes, large numerals. Weights 400/500/600/700. Emphasis uses the pop-color
  highlight mark or weight/color, never an italic accent word.
- **Body & UI, `Funnel Sans`**. Paragraphs, lists, nav, buttons. Weights 400/500/600/700.
- **Data, `Fragment Mono`** (monospace). Dates, numbers, filenames, and short one-to-three-word
  group labels (skill groups, fact labels). Group labels may be uppercase with ~0.08em tracking;
  dates stay in their natural case with tabular numerals. Mono is for data, not a costume: never
  for kickers above headings, sentences, tags, relationships, or footer lines.

Type scale (clamped for responsive):

- H1 / hero: display, clamp(2.4rem, 4.6vw, 3.4rem), line-height 1.1, letter-spacing -0.022em
- Section title: display, clamp(1.8rem, 3.6vw, 2.6rem), line-height 1.12
- Subhead: display, 1.25 to 1.45rem
- Pull quote: display, 1.2rem, line-height 1.46, upright
- Body: body face, 1.05rem, line-height 1.62
- Meta (tags, relationships, captions, footer): body face, 0.875rem, sentence case
- Mono group label: Fragment Mono, 0.78rem (12.5px), uppercase, tracking 0.08em, one to three words only

Weight discipline: reserve 700 for rare emphasis. Headlines live at 500–600, not bold.

---

## Color Palette

Palette 01, Fog and oxblood: a cool gray ground with near-black ink, an oxblood action color, and a
marigold highlight. No cream, no clay, no blue or indigo action color. CSS variables are the contract.

```
--color-bg:          #E7EBED   /* fog, main background */
--color-bg-sunk:     #DDE3E6   /* sunken surfaces, the empty photo */
--color-surface:     #FFFFFF   /* figures, photo frame, the rare card */
--color-ink:         #161A1D   /* primary text */
--color-ink-muted:   #475057   /* secondary text, deks */
--color-ink-faint:   #4E575D   /* captions, metadata (4.5:1 or better on every wash) */
--color-primary:     #8A1C2B   /* oxblood: buttons, the office-hours band */
--color-primary-deep:#6E1522   /* hover + inline link text */
--color-label:       #FFFFFF   /* text on primary fills and the primary band */
--color-on-primary:  #FFF1F1   /* softer text on primary */
--color-secondary:   #46606A   /* slate, used sparingly */
--color-pop:         #F2C14E   /* marigold: highlight marker and selection only, never text */
--color-deep:        #1A2226   /* footer band */
--color-line:        #CCD3D7   /* hairline borders, the main structural device */
--color-line-strong: #B3BCC1   /* heavier rule when needed */
```

Rules of use:

- Inline text links: `--color-primary-deep`, underlined.
- Buttons / full-bleed bands: `--color-primary` fill with `--color-label` text at 600 weight.
- Secondary and pop are seasonings, not main colors. Pop is a highlight marker only (the hero
  punch-line mark, text selection), never text and never a large fill.
- Do not introduce new hues. If something needs emphasis, use weight, size, or a hairline.
- The ground comes from the user's palette, never from a safe default. The Impeccable detector flags
  warm off-white pages (`cream-palette`) because generated sites default to them; none of the
  palettes in `palettes.md` trips it. If the user explicitly asked for a cream ground, that choice
  is recorded in `PRODUCT.md` and is the only accepted flag.
- On saturated grounds, muted text is a dark shade of the ground's hue, never gray.

---

## Spacing & Shape

- Base unit **4px**. Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96.
- Section vertical rhythm: ~88–96px desktop, ~56px mobile, with a hairline rule between
  sections doing the visual separation.
- **Border radius: small and restrained.** Buttons & inputs `6px`. Figures, photo, tinted
  blocks `8px`. Editorial rules and the office-hours band can be `0`. **No pill / rounded-full
  (999px) shapes anywhere.** Nothing above 8px.
- **Borders are the primary structural device.** 1px solid `--color-line`. Never 2px+ for
  hairlines. Use rules and column edges instead of boxes wherever possible.
- **Shadows: effectively none.** No elevation, no multi-layer depth, no glow. At most one
  whisper-soft shadow on the hero photo. Whitespace + hairlines carry hierarchy, not shadow.

---

## Component Conventions

- **Buttons:** `6px` radius, no gradient. Primary = primary fill, `--color-label` bold label. Ghost =
  transparent, 1px `--color-line` border, ink label; border darkens to ink on hover. Optional
  trailing `→` that nudges right on hover. Labels in the body face at 600, not uppercase.
- **Nav:** sticky, hairline bottom border, solid background (no blur, no translucency). Text links (body 500, ink-muted,
  active = ink with a short underline in that section's zone color). One primary button for Office Hours.
- **Section header:** no label above the heading. The section's name runs in at the start of the
  display headline in the chapter accent color ("Experience. Twenty years of..."), followed by an
  optional one-line intro. The heading carries its own weight.
- **Editorial list (approach / projects / experience):** hairline-separated rows. Left rail holds
  real data (dates, one sourced stat) or the row's own title. No decorative 01 / 02 / 03 numbering. Display subhead + body text. Disclosures use
  a plain `+ / –` text toggle, never a chevron-in-a-circle.
- **Pull quotes (recommendations):** large display-face quotes, upright, with a hanging quote mark in
  the chapter accent (no colored side stripe); attribution in name (body 600) + relationship
  (body, meta size, sentence case).
  Stacked or two-column. **No carousel.**
- **Tags / skills:** plain mono text, comma- or middot-separated, grouped under mono category
  labels. **No pill chips.**
- **Figures / photo:** 8px radius, 1px border, optional mono caption beneath. On mobile the hero photo becomes a circular avatar; desktop keeps the rectangular portrait.

---

## Layout Rules

- Page max-width ~1180px, 24px gutters. Primary reading measure ~62–68ch; let pull quotes and
  figures break wider than the text column for editorial contrast.
- **Asymmetric, left-aligned.** No centered hero. The hero is a two-column split: copy left,
  portrait figure right.
- Open every section with the run-in headline (accent section name + statement). Never a kicker label above it.
- **Color-zoned chapters.** Each content section gets a soft wash near the ground and a `--zone`
  accent its run-in section name + big marks adopt: How I Work / Off the Clock = `z-a` (#DCE3E7,
  accent #8A1C2B); Experience = `z-b` (#E0E8E3 / #2F5249); Projects = `z-c` (#E8E3EC / #5B3A63);
  Skills = `z-d` (#EFE2E2 / #7A1826); Recommendations = `z-e` (#E6E9DE / #4D5A22). Buttons and links
  stay primary.
- Office Hours is a **full-bleed primary band** (the saturated peak); the footer is a `--color-deep`
  band. Section washes are soft tints; the two bands run full saturation.
- Mobile: single column, photo below hero copy, hamburger nav.

---

## Do Not Use

These are the AI-slop tells. They are banned on this site. The list follows the
[Impeccable](https://impeccable.style) anti-pattern catalog (Paul Bakaus), which is the standard this
skill checks against. Each line: the pattern, why it reads as generated, and what to do instead.

**The 2026 house looks** (named in Anthropic's frontend-design skill update and Paul Bakaus's
Impeccable, September 2026). AI-built pages now cluster into a few recognizable looks. Banning one
font or one color only moves the model to its nearest neighbor, so the whole cluster is banned, and
the skill's seeded shortlist pushes each site somewhere else.

- **"Claude beige."** Cream, paper, oatmeal, or parchment ground; terracotta, clay, rust, or
  persimmon accent; a serif headline (often Instrument Serif) with one italic word; eyebrow labels.
  Any two of these together read as generated. Use a ground from `palettes.md`.
- **Dark plus acid.** Near-black with one neon accent (lime, cyan, electric green) and glowing
  edges. Dark palettes here use flat, warm-or-soft accents and no glow.
- **Broadsheet cosplay.** Newspaper hairlines on everything, an italic display serif, small tracked
  mono labels, fake issue numbers and datelines. Hairlines are fine; the costume is not.
- **The SaaS card kit.** Rows of equal rounded cards, each with an icon, a heading, and two lines.
  Use hairline rows with real content.
- **Template chrome.** Fake browser windows, fake terminal windows, code-editor frames, and device
  mockups around content that is not software.

**Type and labels**

- Instrument Serif, Instrument Sans, Inter, Geist, Fraunces, Space Grotesk, Plus Jakarta Sans, DM
  Sans, Playfair Display, Syne, Outfit, IBM Plex, Roboto, or a system sans as the display face (full
  list in `palettes.md`). The faces models reach for first. Use the chosen pairing.
- Italic accent words: one word in a headline set in italic (serif or not) for "voice". The most
  recognizable 2026 headline tell. Use weight, size, or the highlighter mark.
- Tiny tracked-caps label above a heading ("kicker" / eyebrow), on any section. The single most common AI page tell. Run the section name into the headline, or delete it.
- Eyebrow chip above the hero headline ("Product Designer · Brooklyn" in caps or in a pill). Default SaaS hero. Put role and place in the sub line or the nav.
- Numbered section labels ("01 / Spot the friction"). Fake editorial scaffolding when the order carries no meaning. Let the title lead; number only real sequences.
- Gradient text, or an italic serif word dropped into a sans headline for "accent". Decoration standing in for emphasis. Use weight, size, or the highlighter mark.
- Any text under 12px, and meta under 0.875rem. Unreadable on phones. Floors: body 1.05rem, meta 0.875rem, mono group labels 0.78rem.
- Uppercase on anything longer than a three-word label. All caps kills word shapes. Sentence case for tags, lists, relationships, and footers.
- Monospace as a costume on sentences, tags, or kickers. It says "technical" without meaning anything. Mono is for dates, numbers, and short data labels.
- Line height under 1.3 on anything that wraps past two lines, and headlines under 1.05. Cramped. Body 1.6, headings 1.1 to 1.2.
- A full-sentence h1 set huge enough to fill the first screen. Nothing else fits above the fold. Keep the hero h1 at or under about 3.4rem and 16ch.

**Surfaces and depth**

- Glows: colored or zero-offset shadows, radial "spotlight" gradients behind the hero, halos on dark. The number one dark-mode tell. Flat surfaces; one soft photo shadow at most.
- Glassmorphism: `backdrop-filter` blur cards or a translucent nav. Also drags text contrast below AA over busy backgrounds. Solid surfaces.
- Grid-line or stripe backgrounds (two-axis hairline gradients). Generated-UI wallpaper. Plain surfaces; use the chapter washes.
- Cards inside cards, and cards as the default container. Noise and fake depth. Use hairline rows and spacing.
- Colored side-stripe accents (`border-left` over 1px, or a `::before` bar) on cards, quotes, or list items. Recognizable template tell. Use a hanging quote mark or nothing.
- A hairline border plus a wide soft shadow on the same box. Pick one.
- Drop-shadow elevation or multi-layer shadows anywhere else.

**Components**

- Pill chips and rounded-full shapes, anywhere; any radius above 8px. (Exception: the hero photo is a circle on mobile only.) Tags are middot-separated text.
- Big-number stat tiles ("10+ years", "300+ hrs") as their own blocks, and animated counters. The hero-metric template. A number lives inline next to the project it belongs to, and only if it is real.
- Icon-in-a-rounded-square "feature card" grids.
- Testimonial carousels (dots/arrows/auto-rotate).
- Centered hero with a gradient background.
- Pulsing "live" dots, blinking cursors, marquees. Fake liveness.
- Stark `#FFFFFF` page background, and warm cream or beige page backgrounds. (Surface white is fine for figures.)
- Bold (700+) used everywhere; reserve heavy weight for rare emphasis.

**Motion**

- Every section fading or sliding in on scroll. One identical entrance repeated is not a design, and content hidden until JavaScript runs can stay hidden. One authored motion moment, from an already-visible default.
- Animating `max-height`, `height`, or padding. Janky. Use `grid-template-rows: 0fr` to `1fr`, transform, or opacity.
- Bounce or elastic easing. Use an exponential ease-out.

**Color**

- Blue or indigo as the action color in any palette; purple gradients or cyan-on-dark anywhere.
- Terracotta, clay, or persimmon on a cream ground (the Claude-beige pairing).
- Muted or "faint" text that fails 4.5:1 on the wash it sits on.

---

## Craft floor

The minimum every generated page must clear before hand-off. It follows Impeccable's craft floor.

- **Contrast.** Body, meta, and placeholder text at least 4.5:1 against the actual surface it
  sits on (check each chapter wash, not just the page background). Large headings at least 3:1.
  Ink on background at least 7:1. On colored bands (primary, deep), secondary text is a tint of
  the label color, never gray.
- **Type floors.** Body 1.05rem. Meta 0.875rem. Mono group labels 0.78rem. Nothing smaller, on any
  breakpoint. Body measure 60 to 70 characters. Tracking no tighter than -0.03em on display type.
- **Spacing rhythm.** 4px base. Tight inside a group (8 to 16px), generous between groups (32 to
  56px), and more space above a heading than below it. Sections breathe at about 96px desktop,
  64px phone.
- **One motion moment.** The template's is the pop-color highlighter swiping across the hero punch
  line on load. Everything else is visible at first paint. Hover nudges on arrows are fine.
  Always honor `prefers-reduced-motion`.
- **Browser surfaces.** Theme the parts nobody draws: `::selection` (pop color behind ink),
  `:focus-visible` rings (primary-deep, 2px, offset 3px; on-primary on colored bands), link
  underline offset, `caret-color`, `accent-color`, `scrollbar-color`, and tabular numerals on
  dates and stats.
- **No overflow.** Nothing scrolls sideways at 390px or 360px. Long words wrap.

---

## Palette on dark

Palettes 06 (Graphite and rose) and 07 (Petrol and ochre) are dark. Dark pages are where generated
sites go wrong fastest, so:

- No glows. A bright accent on a dark ground tempts colored shadows and radial "spotlight"
  washes. Both are banned. Let the color sit flat. No neon or acid accents either.
- No glass. Translucent blurred panels over a dark wash drop text contrast below AA.
- Compensate type for light-on-dark: a touch more line height (about +0.05), slightly lighter
  weight on large display type, and never pure white body text on near-black (use the palette's
  ink, for example `#ECEAE4`).
- Re-derive every token: ink, muted, faint, line, and each chapter wash must be re-tuned as dark
  tints, and every text/surface pair re-checked for 4.5:1. Light-mode washes pasted onto a dark
  page are the most common failure.
- Hairlines on dark are a light tint at low contrast (about 12 to 16 percent), not gray.
- Button labels and the office-hours band text use `--color-label`, which is dark on these palettes.
  The highlighter mark sets its words in the background color so they stay readable on the pop.

---

## Brand page, not product UI

This system is for a personal site: a brand page whose job is to make someone remember a person.
It earns a display face with a point of view, a committed palette, and one authored motion moment.
If the user later adds something that is really a tool (a calculator, a booking flow, a dashboard
of their projects), those parts follow product rules instead: familiar controls, system or workhorse
UI type is fine, restrained color, no decorative motion. Do not dress a form up as a hero, and do
not apply the product rules to the hero.

---

## Personality & Reference

- **Adjectives:** warm, editorial, considered, confident, human, analytical-but-approachable,
  optimistic, unfussy.
- **Voice:** first person, the user's. Set during the voice check in the interview; carry their tone through every section.
- **References:** real sites the user picked in Step 4, recorded in `PRODUCT.md`. The backbone's
  own: a well-set print résumé, museum and exhibition sites, long-form personal essays. Real
  references beat adjectives; when in doubt, look at the reference, not the word.
- **Anti-references:** the Claude-beige page, corporate SaaS landing page, Stripe-checkout-lookalike, dark-mode
  analytics dashboard, "startup modern" template.

---

## Changelog

- 2026-05-21: Initial system. Established editorial direction; replaced Inter with Hanken
  Grotesk; added IBM Plex Mono for labels; deepened palette to terracotta/warm-ink; banned
  pills, shadows, icon-card grids, and the testimonial carousel.
- 2026-05-21: Mobile hero photo is now a circular avatar (1/1, border-radius 50%), a
  deliberate exception to the no-rounded-full rule; desktop keeps the rectangular portrait.
  Added a white line-art motif (steaming mug) to the Office Hours band.
- 2026-05-22: 2026 trend pass. Brightened primary from terracotta (#C2622B) to a persimmon
  (#C0481B, from the Pinterest Palette 2026 family), shifted secondary from teal to a jade/sage
  (#4F6B4A), and added Plum Noir (#351E28) as a deep footer band. Reviewed the Figma, Henu, San
  Marco, and Pinterest 2026 forecasts and deliberately skipped the loud trends (maximalism,
  neo-brutalism, neon/dopamine color, dark-mode default) to protect the warm editorial direction.
- 2026-05-22: "Wasabi Punch" direction, chosen from a 10-variant hero carousel. Display font
  switched to Bricolage Grotesque (no italic; emphasis via a Wasabi highlight marker). Base moved
  to wasabi-tinted paper (#FAFAEC) with olive ink (#1F2110); added Wasabi (#E9F056) as a highlight
  pop. Persimmon stays the action color; plum footer and jade secondary unchanged.
- 2026-05-22: Color-zoned chapters. Each content section now carries a soft palette wash + a
  `--zone` accent (wasabi / sage / cool blue / peach / mauve) so the body reads as colored
  chapters instead of one persimmon-on-cream tone. Buttons and links stay persimmon throughout.
- 2026-09-27: Design refresh against the [Impeccable](https://impeccable.style) standard. Removed
  kicker labels above headings (section names now run into the headline), the 01/02/03 pillar
  numbers, the translucent blurred nav, and scroll-in fades on every section. Raised every text
  floor (no meta under 0.875rem), darkened `--color-ink-faint` to pass 4.5:1 on every wash, moved
  tags/relationships/footer out of uppercase mono, swapped the quote side rule for a hanging quote
  mark, and themed selection, focus, caret, and scrollbar. Added the craft floor, the palette-on-dark
  caution, and a grouped do-not-use list.
- 2026-09-27 (v0.5.0): Left the "Claude beige" cluster. Default palette is now Fog and oxblood
  (cool gray, oxblood, marigold highlight); display and body moved from Bricolage Grotesque and
  Hanken Grotesk to Funnel Display and Funnel Sans, data labels from IBM Plex Mono to Fragment Mono.
  Tokens renamed to palette-neutral names (`--color-pop`, `--color-deep`, `--color-label`, zones
  `z-a` to `z-e`). Added the 2026 house looks (Claude beige, dark plus acid, broadsheet cosplay, SaaS
  card kit, template chrome) and italic accent words to the do-not-use list, plus the brand-page vs
  product-UI split. The accepted `cream-palette` flag is gone: the backbone scans clean.
