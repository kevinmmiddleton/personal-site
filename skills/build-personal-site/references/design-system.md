# Personal Site Design System

The single source of truth for how the site looks. Paste this at the start of any session
before asking for site changes. If output drifts generic, the fix is here, not in the prompt.
Silence in this doc = the model fills the gap with defaults. So it's explicit on purpose.

The north star: this should read like a **considered editorial page**, a well-set magazine
profile or a print résumé with personality, **not** a SaaS marketing landing page.

---

## Typography

Three typefaces, each with one job. All from Google Fonts.

- **Display, `Bricolage Grotesque`** (contemporary display grotesque). Headlines, section titles,
  subheads, pull quotes, large numerals. Weights 400/500/600/700. No true italic, so emphasis uses
  the Wasabi highlight marker or weight/color, never a synthesized slant.
- **Body & UI, `Hanken Grotesk`** (humanist grotesque). Paragraphs, lists, nav, buttons.
  Weights 400/500/600/700. This replaces Inter on purpose.
- **Data, `IBM Plex Mono`** (monospace). Dates, numbers, filenames, and short one-to-three-word
  group labels (skill groups, fact labels). Group labels may be uppercase with ~0.08em tracking;
  dates stay in their natural case with tabular numerals. Mono is for data, not a costume: never
  for kickers above headings, sentences, tags, relationships, or footer lines.

Type scale (clamped for responsive):

- H1 / hero: Bricolage Grotesque, clamp(2.4rem, 5.5vw, 4rem), line-height 1.05, letter-spacing -0.02em
- Section title: Bricolage Grotesque, clamp(1.8rem, 3.6vw, 2.6rem), line-height 1.1
- Subhead: Bricolage Grotesque, 1.25 to 1.45rem
- Pull quote: Bricolage Grotesque, clamp(1.25rem, 2.4vw, 1.9rem), upright
- Body: Hanken Grotesk, 1.05rem, line-height 1.62
- Meta (tags, relationships, captions, footer): Hanken Grotesk, 0.875rem, sentence case
- Mono group label: IBM Plex Mono, 0.78rem (12.5px), uppercase, tracking 0.08em, one to three words only

Weight discipline: reserve 700 for rare emphasis. Headlines live at 500–600, not bold.

---

## Color Palette

Wasabi-tinted paper with olive ink, a persimmon action accent, and a chartreuse (Wasabi) highlight pop. No blue/indigo anywhere. CSS variables are the contract.

```
--color-bg:          #FAFAEC   /* wasabi-tinted paper, main background */
--color-bg-sunk:     #F1F0DA   /* alternating / sunken sections */
--color-surface:     #FFFFFF   /* figures, photo frame, the rare card */
--color-ink:         #1F2110   /* olive near-black, primary text */
--color-ink-muted:   #65684C   /* secondary text, deks */
--color-ink-faint:   #686A4F   /* captions, metadata (darkened to pass 4.5:1 on every wash) */
--color-primary:     #C0481B   /* persimmon (2026): accents, fills, big moments */
--color-primary-deep:#9E3C16   /* hover + inline link text (passes contrast on paper) */
--color-secondary:   #4F6B4A   /* jade/sage (2026), used sparingly */
--color-wasabi:      #E9F056   /* Wasabi (2026): highlight marker / joy pop, never text */
--color-plum:        #351E28   /* Plum Noir (2026): deep accent, footer band */
--color-line:        #E6E6CE   /* hairline borders, the main structural device */
--color-line-strong: #D4D4B4   /* heavier rule when needed */
--color-on-primary:  #FFF8F1   /* near-white text on persimmon/plum fills (4.7:1 on persimmon) */
```

Rules of use:

- Inline text links: `--color-primary-deep`, underlined. (Bright `--color-primary` is too
  light for small body text on paper, only use it at large sizes or for fills.)
- Buttons / full-bleed bands: `--color-primary` fill with `#FFFFFF`/`--color-on-primary` bold
  text. White-on-persimmon clears 4.5:1 at button weight.
- Jade/sage and Wasabi are seasonings, not main colors. Jade for the rare small accent. Wasabi
  (#E9F056) is a highlight marker only (the hero "and I'm in." mark, the empty-photo tint), never
  text and never a large fill. Persimmon is the action color; the deep bands are persimmon (Office
  Hours) and plum (footer).
- Do not introduce new hues. If something needs emphasis, use weight, size, or a hairline.
- The paper background is a deliberate pick, not a reflex. The Impeccable check flags warm
  off-white pages (`cream-palette`) because generated sites default to them. Here the user chose a
  paper palette on purpose, so that one flag is expected. Any other background should come from the
  user's palette, not a safe beige.

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

- **Buttons:** `6px` radius, no gradient. Primary = persimmon fill, white bold label. Ghost =
  transparent, 1px `--color-line` border, ink label; border darkens to ink on hover. Optional
  trailing `→` that nudges right on hover. Labels in Hanken Grotesk 600, not uppercase.
- **Nav:** sticky, hairline bottom border, solid paper background (no blur, no translucency). Text links (Hanken 500, ink-muted,
  active = ink with a short persimmon underline). One primary button for Office Hours.
- **Section header:** no label above the heading. The section's name runs in at the start of the
  Bricolage headline in the chapter accent color ("Experience. Twenty years of..."), followed by an
  optional one-line intro. The heading carries its own weight.
- **Editorial list (approach / projects / experience):** hairline-separated rows. Left rail holds
  real data (dates, one sourced stat) or the row's own title. No decorative 01 / 02 / 03 numbering. Serif subhead + grotesque body. Disclosures use
  a plain `+ / –` text toggle, never a chevron-in-a-circle.
- **Pull quotes (recommendations):** large Bricolage quotes, upright, with a hanging quote mark in
  the chapter accent (no colored side stripe); attribution in name (Hanken 600) + relationship
  (Hanken, meta size, sentence case).
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
- **Color-zoned chapters.** Each content section gets a soft palette wash and a `--zone` accent
  its run-in section name + big marks adopt: How I Work / Off the Clock = wasabi (#F5F6D8, accent #766611);
  Experience = sage (#ECEFE2 / #3F5A3A); Projects = cool blue (#EAF1F6 / #2C6580); Skills = peach
  (#FBEEE5 / #9E3C16); Recommendations = mauve (#F1E9EC / #6E3A4E). Buttons and links stay persimmon.
- Office Hours is a **full-bleed persimmon band** (the saturated peak); the footer is a deep Plum
  Noir band. Section washes are soft tints; the two bands run full saturation.
- Mobile: single column, photo below hero copy, hamburger nav.

---

## Do Not Use

These are the AI-slop tells. They are banned on this site. The list follows the
[Impeccable](https://impeccable.style) anti-pattern catalog (Paul Bakaus), which is the standard this
skill checks against. Each line: the pattern, why it reads as generated, and what to do instead.

**Type and labels**

- Inter, Geist, Roboto, Space Grotesk, or a system sans as the display face. Everyone's default. Use the chosen display font.
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
- Stark `#FFFFFF` page background. (Surface white is fine for figures.)
- Bold (700+) used everywhere; reserve heavy weight for rare emphasis.

**Motion**

- Every section fading or sliding in on scroll. One identical entrance repeated is not a design, and content hidden until JavaScript runs can stay hidden. One authored motion moment, from an already-visible default.
- Animating `max-height`, `height`, or padding. Janky. Use `grid-template-rows: 0fr` to `1fr`, transform, or opacity.
- Bounce or elastic easing. Use an exponential ease-out.

**Color**

- Blue or indigo accents on the default palette; purple gradients or cyan-on-dark in any palette.
- Muted or "faint" text that fails 4.5:1 on the wash it sits on.

---

## Craft floor

The minimum every generated page must clear before hand-off. It follows Impeccable's craft floor.

- **Contrast.** Body, meta, and placeholder text at least 4.5:1 against the actual surface it
  sits on (check each chapter wash, not just the page background). Large headings at least 3:1.
  Ink on background at least 7:1. On colored bands (persimmon, plum), secondary text is a tint of
  white, never gray.
- **Type floors.** Body 1.05rem. Meta 0.875rem. Mono group labels 0.78rem. Nothing smaller, on any
  breakpoint. Body measure 60 to 70 characters. Tracking no tighter than -0.03em on display type.
- **Spacing rhythm.** 4px base. Tight inside a group (8 to 16px), generous between groups (32 to
  56px), and more space above a heading than below it. Sections breathe at about 96px desktop,
  64px phone.
- **One motion moment.** The template's is the Wasabi highlighter swiping across the hero punch
  line on load. Everything else is visible at first paint. Hover nudges on arrows are fine.
  Always honor `prefers-reduced-motion`.
- **Browser surfaces.** Theme the parts nobody draws: `::selection` (Wasabi behind ink),
  `:focus-visible` rings (primary-deep, 2px, offset 3px; on-primary on colored bands), link
  underline offset, `caret-color`, `accent-color`, `scrollbar-color`, and tabular numerals on
  dates and stats.
- **No overflow.** Nothing scrolls sideways at 390px or 360px. Long words wrap.

---

## Palette on dark

Palettes 04 (Plum noir) and 10 (Ink editorial) are dark. Dark pages are where generated sites go
wrong fastest, so:

- No glows. A bright persimmon on a dark ground tempts colored shadows and radial "spotlight"
  washes. Both are banned. Let the color sit flat.
- No glass. Translucent blurred panels over a dark wash drop text contrast below AA.
- Compensate type for light-on-dark: a touch more line height (about +0.05), slightly lighter
  weight on large display type, and never pure white body text on near-black (use the palette's
  paper tone, for example `#F2ECDF`).
- Re-derive every token: ink, muted, faint, line, and each chapter wash must be re-tuned as dark
  tints, and every text/surface pair re-checked for 4.5:1. Light-mode washes pasted onto a dark
  page are the most common failure.
- Hairlines on dark are a light tint at low contrast (about 12 to 16 percent), not gray.

---

## Personality & Reference

- **Adjectives:** warm, editorial, considered, confident, human, analytical-but-approachable,
  optimistic, unfussy.
- **Voice:** first person, the user's. Set during the voice check in the interview; carry their tone through every section.
- **References:** Stripe Press typography, a well-set print résumé, long-form personal essays,
  a magazine profile. Think editorial, not dashboard, even though the subject builds dashboards.
- **Anti-references:** corporate SaaS landing page, Stripe-checkout-lookalike, dark-mode
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
