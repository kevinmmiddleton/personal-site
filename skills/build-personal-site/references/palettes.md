# Ten 2026 color palettes

These are the ten palette directions the skill offers users. Each is a real 2026 forecast (Pinterest Palette 2026, San Marco Color Trends 2026, Henu Trending Color Palettes 2026). Each row defines: a background, a primary action color, a secondary, and a "pop" or highlight that gives the palette its character.

When presenting these to the user, render them as inline chip rows: number, name, four colored chips with hex labels, one-line vibe note. If the visualize tool is available, use it; otherwise list them clearly with hex codes and prompt the user for a number.

Persimmon stays the default action color across most palettes because warm action accents test well for both job-search and freelance audiences. Wasabi is a highlight only, never text or a large fill.

---

## 01 — Persimmon and paper

Warm editorial baseline.

- Background: `#FBF7F0` (warm paper)
- Primary: `#C0481B` (persimmon)
- Secondary: `#4F6B4A` (jade sage)
- Pop: `#E9F056` (wasabi highlight)

Vibe: warm editorial, considered, confident. Best for: anyone who wants a calm, paper-and-ink feel.

## 02 — Cool blue

Serious cool, with a warm pop for energy.

- Background: `#EDF3F7` (cool light)
- Primary: `#2C6580` (deep cool blue)
- Secondary: `#CFE2EC` (light blue)
- Pop: `#C0481B` (persimmon pop)

Vibe: serious, reliable, technical. Best for: data and finance audiences who want gravity with a warm spark.

## 03 — Jade sage

Calm green base with a warm action color.

- Background: `#ECEFE5` (sage tint)
- Primary: `#3F5A3A` (deep jade)
- Secondary: `#D6DEC8` (light sage)
- Pop: `#C0481B` (persimmon pop)

Vibe: grounded, organic, considered. Best for: climate, wellness, nature-adjacent fields.

## 04 — Plum noir, dark

Dramatic warm dark with a persimmon glow.

- Background: `#2A1822` (deep plum)
- Primary: `#FF6A3D` (bright persimmon)
- Secondary: `#F3E7EB` (light mauve, text)
- Pop: `#FF8A63` (warm coral)

Vibe: dramatic, "villain era," sophisticated. Best for: creative fields, design, anyone wanting a confident dark site.

## 05 — Wasabi punch

Energetic chartreuse highlight with persimmon action.

- Background: `#FAFAEC` (wasabi-tinted paper)
- Primary: `#C0481B` (persimmon)
- Pop: `#E9F056` (wasabi highlight marker)
- Secondary: `#4F6B4A` (jade)

Vibe: energetic, optimistic, distinctive. Best for: anyone whose brand is "I choose to be happy" without losing professionalism.

## 06 — Radical optimism

Bold cobalt and persimmon, San Marco's "radical optimism" trend.

- Background: `#FCFBF7` (fresh white)
- Primary: `#1F4FB0` (bold cobalt)
- Secondary: `#FFD9CE` (light peach)
- Pop: `#FF5C34` (bright persimmon)

Vibe: bold, confident, dopamine-adjacent. Best for: ambitious roles, founders, sales-driven.

## 07 — Calm nest

Dusty pastels, slow and warm. San Marco's "calm nest" direction.

- Background: `#F7ECE1` (warm apricot)
- Primary: `#A6543C` (dusty clay)
- Secondary: `#E8CABB` (dusty pink)
- Pop: `#7C8A66` (muted sage)

Vibe: soft, calming, intentional. Best for: wellness, coaching, lifestyle, slower brands.

## 08 — Tactile brutalism

Stone neutrals with a single rust accent. Architectural.

- Background: `#E5E0D6` (warm stone)
- Primary: `#9E4A1B` (rust)
- Secondary: `#CFC9BC` (concrete)
- Pop: `#1D1A16` (warm near-black)

Vibe: architectural, brutalist-but-warm, restrained. Best for: design, architecture, technical-but-considered fields.

## 09 — Persimmon and plum

Warm autumnal duo. Two 2026 colors in one harmony.

- Background: `#FBF7F0` (paper)
- Primary: `#C0481B` (persimmon)
- Secondary: `#FBE7DE` (soft peach)
- Pop: `#351E28` (deep plum)

Vibe: warm, autumnal, sophisticated. Best for: anyone who wants warmth with a deep grounding accent.

## 10 — Ink editorial, dark

Sophisticated warm dark with persimmon and jade accents.

- Background: `#1A150F` (warm near-black)
- Primary: `#FF6A3D` (bright persimmon)
- Secondary: `#AEB8A0` (jade sage)
- Pop: `#F2ECDF` (paper text)

Vibe: editorial, premium, sophisticated. Best for: creative directors, designers, writers, anyone wanting a serious dark site that isn't tech-dashboard-default.

---

## How to use these in generation

After the user picks a palette (by number, mix, or description), update the template index.html's CSS variables to match:

- `--color-bg` → background
- `--color-primary` → primary action color (for buttons, links)
- `--color-primary-deep` → derived darker variant for hover/text-on-paper links (test contrast on background, aim for 4.5:1)
- `--color-secondary` → secondary
- Add a `--color-wasabi` (or palette-specific pop) variable if the pop differs from the secondary
- `--color-ink` and `--color-ink-muted` → derive from the palette's intent (warm for warm bases, cool for cool bases)
- `--color-line` → a hairline color tinted to the background family

Then update the section-zone backgrounds in the corresponding palette family. The template ships with five chapter washes; retune them to soft tints of the chosen palette (or keep neutral if the user wants a simpler look).

Always verify contrast after swapping: ink on background ≥ 7:1, primary on background ≥ 4.5:1 for text uses, white on primary fill ≥ 4.5:1 for button labels.
