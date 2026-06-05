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
- **Labels & data, `IBM Plex Mono`** (monospace). Eyebrows/kickers, dates, category labels,
  tags, captions. Always uppercase with letter-spacing ~0.08–0.12em. The mono is the
  "analyst" signal and a core part of the brand, use it for anything that reads as metadata.

Type scale (clamped for responsive):

- H1 / hero: Bricolage Grotesque, clamp(2.4rem, 5.5vw, 4rem), line-height 1.05, letter-spacing -0.02em
- Section title: Bricolage Grotesque, clamp(1.8rem, 3.6vw, 2.6rem), line-height 1.1
- Subhead: Bricolage Grotesque, 1.25 to 1.45rem
- Pull quote: Bricolage Grotesque, clamp(1.25rem, 2.4vw, 1.9rem), upright
- Body: Hanken Grotesk, 1.05rem, line-height 1.62
- Small / meta / mono label: IBM Plex Mono, 0.78rem, uppercase, tracking 0.1em

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
--color-ink-faint:   #999A7B   /* captions, metadata */
--color-primary:     #C0481B   /* persimmon (2026): accents, fills, big moments */
--color-primary-deep:#9E3C16   /* hover + inline link text (passes contrast on paper) */
--color-secondary:   #4F6B4A   /* jade/sage (2026), used sparingly */
--color-wasabi:      #E9F056   /* Wasabi (2026): highlight marker / joy pop, never text */
--color-plum:        #351E28   /* Plum Noir (2026): deep accent, footer band */
--color-line:        #E6E6CE   /* hairline borders, the main structural device */
--color-line-strong: #D4D4B4   /* heavier rule when needed */
--color-on-primary:  #FCEFE2   /* near-white text on persimmon/plum fills */
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
- **Nav:** sticky, hairline bottom border, paper background. Text links (Hanken 500, ink-muted,
  active = ink with a short persimmon underline). One primary button for Office Hours.
- **Section header:** mono kicker (uppercase) + Bricolage title + optional one-line intro, with a
  full-width hairline rule beneath.
- **Editorial list (approach / projects / experience):** hairline-separated rows. Left rail or
  inline mono metadata (number, dates, company). Serif subhead + grotesque body. Disclosures use
  a plain `+ / –` text toggle, never a chevron-in-a-circle.
- **Pull quotes (recommendations):** large Bricolage quotes, upright, with a vertical
  persimmon rule or hanging quote mark; attribution in name (Hanken 600) + relationship (mono).
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
- Use the mono-kicker + serif-title + hairline pattern to open every section.
- **Color-zoned chapters.** Each content section gets a soft palette wash and a `--zone` accent
  its kicker + big marks adopt: How I Work / Off the Clock = wasabi (#F5F6D8, accent #766611);
  Experience = sage (#ECEFE2 / #3F5A3A); Projects = cool blue (#EAF1F6 / #2C6580); Skills = peach
  (#FBEEE5 / #9E3C16); Recommendations = mauve (#F1E9EC / #6E3A4E). Buttons and links stay persimmon.
- Office Hours is a **full-bleed persimmon band** (the saturated peak); the footer is a deep Plum
  Noir band. Section washes are soft tints; the two bands run full saturation.
- Mobile: single column, photo below hero copy, hamburger nav.

---

## Do Not Use

These are the AI-slop tells. They are banned on this site.

- Inter, Geist, or a generic system sans for display/body. (We use Bricolage Grotesque + Hanken Grotesk.)
- Blue or indigo accents of any kind.
- Pill / rounded-full shapes; any radius above 8px. (Exception: the hero photo is a circle on mobile only.)
- Drop-shadow elevation, multi-layer shadows, glassmorphism, glows.
- Icon-in-a-rounded-square "feature card" grids.
- Testimonial carousels (dots/arrows/auto-rotate).
- Centered hero with a gradient background.
- Stark `#FFFFFF` page background. (Surface white is fine for figures.)
- Animated counters / "stat strip" tiles.
- Bold (700+) used everywhere; reserve heavy weight for rare emphasis.

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
