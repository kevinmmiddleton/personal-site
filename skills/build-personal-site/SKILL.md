---
name: build-personal-site
description: Builds a distinctive personal website from scratch through a guided interview. Use when the user asks to "build my personal site", "create a personal website", "set up my personal site", "make me a portfolio site", "build my resume website", "give me a home page", "make me a personal landing page", or runs the /personal-site command. Walks the user through resume intake, real reference sites and two or three design directions, a seeded palette and font shortlist that keeps sites from all looking alike, file generation, a blind design critique plus the Impeccable detector, content QA against their resume, going live on GitHub Pages for free, and optionally a custom domain. Keeps PRODUCT.md, DESIGN.md, and critique-log.md in the site folder so later sessions stay on-brand.
---

# Building a personal site

You are walking the user through building their own personal website. The user is likely non-technical. Stay warm, low-pressure, and explicit. Never overwhelm: one step at a time, ask one question, wait for the answer, reflect it back.

## What ships with this skill

The `references/` folder contains four files, and `scripts/` one:

- `references/index.html`: the editorial backbone, with placeholder content marked in `[brackets]`
- `references/design-system.md`: the rulebook + the "do not use" slop list. It becomes `DESIGN.md` in the user's folder.
- `references/START-HERE.md`: the user-facing guide that lives in their folder
- `references/palettes.md`: ten palettes across five ground families, eight font pairings, and the shortlist method
- `scripts/seed.mjs`: picks which palettes and fonts this user sees, from their name and today's date

Do not generate the site from scratch. Copy the backbone into the user's folder and customize it.

## Opening

When triggered, open with the three reassurances, in plain language:

- This is a starter, not a finished thing.
- They can change anything later.
- They can scrap it and redo as many times as they want.

Then ask them to create an empty folder for their site on their computer and add it as the working folder.

## Track progress with a visible task list

Right after the user adds their folder, create a visible task list using `TaskCreate` so they can see where they are at all times. Lay out the twelve steps below as separate tasks. As each step starts, mark it `in_progress`. As each completes, mark it `completed`. If the user wants to skip a step ("no thanks on analytics"), mark it completed too and move on. Refer back to the list whenever they ask "what's next" or seem lost.

## Save context as you go

Three files in the user's folder carry the project between sessions. Any future session (yours or another tool's) reads them first. Tell the user once, in plain words: "I'm keeping a few notes in your folder so that next time we pick up exactly where we left off."

- **`PRODUCT.md`**, started in Step 1. What the site is for, who it is for, where they are in life, their voice (casual or formal, dry or warm, what they never want to sound like), the reference sites they liked and what they liked about each, the direction they picked, the seed key, their scheduling link, and what they opted in or out of. Update it as each answer comes in, in clean readable Markdown.
- **`DESIGN.md`**, written in Step 8. The backbone's `design-system.md`, filled in with their exact tokens (every hex), fonts, the rules, and the do-not-use list. This is the contract every later change is checked against.
- **`critique-log.md`**, started in Step 8. One dated entry per design pass: the detector result, the critic's scores and top three fixes, what you changed, and anything the user pushed back on ("thinks the pink is too loud", "wants the photo bigger", "hated the condensed headline font"). Pushback matters most: it is the one thing no later session can guess.

Older sites built with this skill may have a `notes.md` instead of `PRODUCT.md`. Read it the same way, and move its contents into `PRODUCT.md` the next time you touch the site.

(These are the same file names [Impeccable](https://impeccable.style) uses, so if the user ever runs Impeccable on their site, it picks up the same context.)

## Step 1: Interview

Match the user's pace. Ask the three questions one at a time if they seem new or overwhelmed; bundle two or three of them into one message if they are moving fast or asking to skip ahead. Your judgment. Either way, reflect each answer back so they can correct, and write each answer into `PRODUCT.md` as you go.

1. What is this site for? (Job search, freelance, portfolio, side project, internet home.)
2. Who is the audience? (Recruiters, clients, peers, themselves.)
3. Where are they in life right now? (Between roles, employed and exploring, freelance, student.)

This shapes tone. Between-roles tilts the framing toward office hours and generosity. Freelance tilts it toward services and clients. Portfolio tilts it toward project depth.

## Step 2: Resume intake

Ask them to paste their resume or drop a file (PDF, Word, plain text, any of them). Read it. Summarize what you pulled back to them in 4-6 lines and ask: "Anything missing? Side projects, hobbies, coaching, languages, things you want on the page or off?"

This catches the off-resume texture (philosophies, coaching, languages, hobbies) that powers the Off the Clock section.

## Step 3: Voice check

Two quick questions:

- Casual or formal?
- Dry, warm, or somewhere between?

And one negative constraint:

- What do they definitely not want to sound like?

This drives copy voice, not structure.

## Step 4: References and directions

Adjectives do not make good design; real examples do. "Warm and modern" means a thousand things. A site the user can point at means one.

**Ask for references.** "Are there two or three websites you like the look of? They don't have to be personal sites or in your field. A restaurant, a magazine, a museum, a shop, anything." If they have some, open each one (or ask for a screenshot) and say back, in one line each, what you would borrow: the type, the color, the layout, the mood. Not the content, and never a copy.

If they draw a blank, propose two or three real sites yourself, ideally from outside their industry, with one line on what each would bring. If an inspiration source is connected (for example the Inspo MCP, Refero, or Mobbin), you can pull examples from it; otherwise name sites you know are real. Never invent a reference.

**Build the shortlist.** Follow "The shortlist: seed, then divergence" in `references/palettes.md`:

1. Run `node scripts/seed.mjs "<first name>" <today's date>` from this skill's folder. It prints four palettes, three font pairings, backups, and a seed key. (No Node? Use the by-hand method in `palettes.md`.)
2. Privately, before you look at the shortlist, list the three palettes and three font pairings you would instinctively pick for this person. Strike any of them from the shortlist and swap in the next backups. Do not narrate this to the user.
3. Save the seed key and the final shortlist in `PRODUCT.md`.

**Show two or three directions.** Each direction is one palette from the shortlist, one font pairing, and one layout idea borrowed from a reference ("hero set big and condensed like the museum site, sections as long single columns"). Make them clearly different from each other, not three shades of one idea. If the `visualize` tool is available, show a quick mock of each hero (their name, a draft hook line, the real colors and font). Otherwise describe each in three lines: palette with hexes, font, layout. Let them pick one, mix two, or ask for another round. Write the choice in `PRODUCT.md`.

## Step 5: Palette

Read `references/palettes.md`. Show the chosen direction's palette next to the rest of the shortlist as inline color chips with hex codes. Use the `visualize` tool's `mockup` module if available to render real chip rows; otherwise list each palette clearly with name, its hexes, and a one-line vibe note.

Let them confirm or change:

- By number ("5")
- By mix ("colors from 3 with the highlight from 5")
- By description ("something darker than 7")
- "Show me all of them" is always fine: show all ten.

Confirm the final pick before moving on. Save the hexes for generation and in `PRODUCT.md`.

If they pick a dark palette (06 Graphite and rose or 07 Petrol and ochre), read the "Palette on dark" section of `references/design-system.md` before generating. Dark pages are where glows, glass, and low-contrast text creep in fastest. If they pick a saturated ground (04 or 05), muted text must be a dark shade of the ground color, never gray.

If they ask for a cream or beige background with a terracotta or clay accent, that is allowed, it is their site. Say once, kindly, that it is the look most AI-made sites land on right now, and offer the nearest palette that is not. If they still want it, build it and note the choice in `PRODUCT.md` and `critique-log.md` so later passes do not keep flagging it as a mistake.

## Step 6: Font

Show the direction's font pairing and the other shortlisted pairings as **real styled previews** using the `visualize` tool's `mockup` module, not just names. Each preview renders the same example phrase in the display face at display size (around 36-42px), a line of body text in the body face, and the pairing name with its one-line vibe note underneath. Load the fonts from Google Fonts in the widget (the CSP allowlist permits `fonts.googleapis.com` and `fonts.gstatic.com`). For the example phrase: use the user's draft hero line if you have one, otherwise a clean twelve-word sentence in their voice.

If the `visualize` tool is not available, fall back to a plain list of the shortlisted pairings with their vibe notes from `palettes.md`.

Never offer Instrument Serif, Inter, Geist, Fraunces, Space Grotesk, Plus Jakarta Sans, or any face on the "never offer" list in `palettes.md`. If the user asks for one by name, it is their call; mention once that it is one of the faces AI-made sites use most, then do what they ask.

## Step 7: Photo and scheduling link

First ask whether they want a photo on the site at all. Three valid answers:

- **Yes, here it is.** Ask them to drop the file. Tell them the same image will be reused for the social link-preview card later, so they only choose once.
- **Yes, but not yet.** Leave the placeholder for now. The site renders cleanly with the empty state until they drop in `photo.jpg`.
- **No thanks, skip it.** In Step 8, remove the entire `.hero-photo` block from the hero and let the hero copy span the full width (see Step 8 index.html instructions).

Then ask for their scheduling link (Calendly, Google Calendar Appointments, Cal.com, etc.) if they want an office-hours block. If they do not want one, hide that section in the generated file.

## Step 8: Generate the files

Copy the three template files from `references/` into the user's working folder (`index.html`, `design-system.md` saved as `DESIGN.md`, and `START-HERE.md`), then customize each.

### Section structure varies by purpose

The template ships with a default section order (Hero, How I Work, Experience, Projects, Skills, Recommendations, Off the Clock, Office Hours, Connect). Adapt the structure to the user's purpose from Step 1 and the direction from Step 4. The existing CSS classes (`.entries`, `.entry-trigger`, `.entry-body`, `.skill-groups`, `.quote`) are flexible enough to support every variation below without restyling. You are swapping content into existing patterns, not redesigning.

- **Job search.** Keep the default. Experience as resume accordion, Projects as stat-led cards, Skills as groups, Recommendations as pull-quotes. Office Hours block leans into "between roles, helping people." Lead with a punchy first-person hook.
- **Consulting or freelance services.** Replace "Experience" with "How I Can Help," organized by audience type using the same disclosure pattern (one entry per audience segment, bullets list the offerings). Replace "Projects" with "Speaking & Writing" or "Case Studies" depending on what they have. Repeat the "Book a Call" CTA two or three times down the page (consulting sites convert on repetition). Voice often runs more metaphor-driven than the job-search default; lean into that if their voice check supports it.
- **Academic or thought leader.** Same shape as consulting, but expand the Speaking & Writing section into Publications + Recent Presentations with venue, year, and link per entry. Keep credentials prominent.
- **Portfolio (designer, developer, creative).** Expand Projects into the centerpiece with images and short case-study bodies. Compress Experience to a tight list. Keep Skills and Recommendations.
- **Internet home / personal essay.** Strip down. Hero, About, Writing, Connect. Drop the rest.

Confirm the structure with the user before filling content if you are making a non-default choice. ("Since this is a consulting site, I'm going to replace the Experience section with a 'How I Can Help' section organized by who you work with. Sound right?")

### index.html

- In the `:root` CSS block, set every color token to the user's palette: `--color-bg`, `--color-bg-sunk`, `--color-ink`, `--color-ink-muted`, `--color-ink-faint`, `--color-primary`, `--color-primary-deep`, `--color-label`, `--color-on-primary`, `--color-secondary`, `--color-pop`, `--color-deep`, `--color-line`, `--color-line-strong`. The mapping is at the bottom of `references/palettes.md`.
- Retune the five chapter wash classes (`z-a` to `z-e`) to soft tints near the chosen ground. Keep the rotation pattern; restyle the colors. Each class also sets a `--zone` accent that colors that section's run-in name; keep it at 4.5:1 or better on its wash. Update the matching nav underline colors.
- Keep the section heading pattern: the section's name runs into the start of the headline (`<span class="sec-name">Experience.</span> [statement]`). Never add a small label above a heading. If you rename or add a section, write its heading the same way.
- In the Google Fonts `<link>` tag, swap in the chosen display and body faces (keep Fragment Mono). Update `--display` and `--body` too.
- Carry the chosen direction's layout idea into the hero and section rhythm, within the backbone's patterns (scale, measure, column split, how big the headline runs). Do not add new component types to get there.
- Replace every `[bracketed placeholder]` in the body with content drawn from the resume + voice check. Match their voice from Step 3.
- Replace `REPLACE_WITH_LINKEDIN_URL`, `REPLACE_WITH_EMAIL`, and `REPLACE_WITH_SCHEDULING_LINK` with their actual links.
- Update `<title>` and `<meta name="description">` with their name and one-line pitch.
- If they opted out of office hours, remove the `<section class="oh">` block entirely and adjust the nav.
- Keep the template's text sizes, contrast tokens, and single motion moment (the highlighter swipe in the hero). Do not add scroll-in fades, glows, glass, pill chips, stat tiles, eyebrow labels, or an italic accent word while filling content.
- If they opted out of a photo entirely (Step 7, "no thanks"), remove the `<div class="hero-photo empty" id="heroPhoto">...</div>` block from the hero, and update `.hero-grid` to a single-column layout so the copy spans full width. The mobile circle and its placeholder both go with it.

### DESIGN.md

- Update the palette code block to show the user's exact hexes
- Update the typography section to name the user's chosen display and body faces
- Add their direction in one line under "Personality & Reference", with the reference sites they chose
- Keep the do-not-use list intact, and add anything the user specifically said they never want
- Add a one-line changelog entry: today's date, brief description of the build

### START-HERE.md

- Tailor framing to their situation. Job search emphasizes the resume QA, the office-hours angle, and the analytics-tracking-recruiter-clicks trick. Freelance emphasizes services, case studies, and lead-tracking. Portfolio emphasizes project depth and the gallery.
- Otherwise leave the guide intact.

### Check the design before hand-off

Before you show the user anything, the page gets two independent checks: a mechanical one ([Impeccable](https://impeccable.style)'s detector, Paul Bakaus's open standard for catching AI-looking design) and a blind visual one (a separate critic that has never seen the code). They are kept apart on purpose: a model that grades its own work almost always says it did well. Do all of this yourself; the user does not need to do anything.

1. **Run the detector** from the user's site folder:

   ```
   npx -y impeccable@4.1.0 detect --no-config index.html
   ```

   (4.1.0 is the current Impeccable command-line tool; the Impeccable skill and rule set it ships alongside are 4.3.1.)

   How to read the result:
   - **Exit code 0:** clean.
   - **Exit code 2:** it found issues and printed a list, one per line, with the rule name in brackets (for example `[kicker-above-heading]` or `[low-contrast]`) and a one-line fix. Keep the list; it goes into step 3.
   - **Any other exit code:** the checker itself failed (no internet, no Node). That says nothing about the site. Use the grep fallback below instead. Never ask the user to install anything.

   There is no expected flag any more. The backbone and every palette in `palettes.md` come back clean. The only exception is a look the user explicitly asked for (for example a cream palette), recorded as such in `PRODUCT.md`.

2. **Take the screenshots, then send in the blind critic.** Take a full-page screenshot at desktop width (about 1280px) and at phone width (390px), with whatever browser or screenshot tool you have. Then spawn a separate subagent with the Agent tool. Give it **only**:
   - the two screenshot files, and
   - two sentences from `PRODUCT.md`: what the site is for, and who it is for.

   Not the code, not `DESIGN.md`, not this conversation, not your own opinion of the page. Ask it for:

   > You are a design director seeing this personal website for the first time. It is for [purpose], and its audience is [audience]. Score each from 1 to 10, with one sentence of evidence from the screenshots: hierarchy (what you see first, second, third), typography, color, distinctiveness (does this look like a generic AI-made or template site, and if so which part gives it away), and mobile (the 390px screenshot). Then list the three fixes that would most improve the page, most important first. Be specific and blunt. Do not praise.

3. **Combine and fix.** Merge the detector list and the critic's three fixes into one list. Fix every detector finding. Fix critic points that are real (a critic can be wrong: "make it bolder" on a page the user asked to keep quiet is not a fix). Write the pass into `critique-log.md`: date, detector count and rule names, the five scores, the three fixes, what you changed and what you declined and why.

4. **Repeat once, at most.** Re-run the detector, retake both screenshots, and spawn a **fresh** critic (never reuse the first, it would remember its own advice). Log the second pass. Then stop and hand off, even if the critic still has notes; mention anything left over to the user in plain words. Two passes is the budget; more rounds chase the critic's taste instead of the user's.

Also look at the screenshots yourself before hand-off: nothing scrolls sideways on the phone, the headline does not strand one word on its own line, every section heading reads as one run-in headline, small text is still readable.

If the detector cannot run, grep instead: `Inter`, `Instrument Serif`, `Geist`, `Fraunces`, `border-radius:999px` or any radius above `8px` outside `.hero-photo`, `backdrop-filter`, `radial-gradient`, `background-clip:text`, `text-transform:uppercase` on anything longer than a short label, any `font-size` under `0.78rem`, more than one `box-shadow`, a warm off-white background (`#F5`-`#FB` range with more red than blue), em dashes `—`, and leftover `[bracketed placeholders]`.

**On Claude Code (optional).** Remembered instructions slip; hooks do not. If the user is on Claude Code rather than Cowork, offer once: "Want me to switch on a check that runs automatically every time the page is edited?" If yes, `npx -y impeccable@4.1.0 install` installs the Impeccable skill with its design-detector hook, which runs the same detector after every edit to `index.html` and reports findings straight back into the session. If they say no, skip it.

## Step 9: QA pass against the resume

Walk the user through every section in order. Have them give blunt feedback. Edit in place as they go.

- Hero: does the headline and one-line pitch sound like them?
- How I Work: are the three pillars right? Is the specialized capability section accurate?
- Experience: every date, role, company, and bullet. Numbers especially.
- Building / Projects: every stat must be real and theirs to claim. If a number is fuzzy, soften or cut.
- Skills: right tools, nothing missing, nothing they would not want to be asked about.
- Recommendations: quotes accurate, attributions correct, people okay being quoted publicly.
- Off the Clock: keeps what is true to them.
- Office Hours and Connect: link goes to their real scheduler, email and LinkedIn are theirs, "open to" list is current.

Accuracy beats polish. A recruiter will ask about anything on the page.

## Step 10: Go-live walkthrough

Follow the steps in the `START-HERE.md` that is now in their folder.

1. GitHub account. Sign up at github.com if they do not have one.
2. GitHub Pages. Create a repo named `username.github.io`, check "Add a README file" on creation, upload `index.html` and `DESIGN.md` (plus `PRODUCT.md` and `critique-log.md`, so the next session can read them), enable Pages in Settings (main branch, root).
3. Optional custom domain. Recommend Cloudflare for the registrar (about $10/year, great free DNS, free Web Analytics). Give the user the exact four GitHub A records (185.199.108.153, .109.153, .110.153, .111.153) and the `www` CNAME pointing back at `username.github.io`.
4. Connect Claude to GitHub. Open the connectors panel, find GitHub, authorize, scope access to just the one repo.
5. Edit-and-publish loop. Local edits, preview in browser, say "push this live" when ready and Claude commits to GitHub. Pages redeploys within a minute.

## Step 11: Mobile QA after launch

Once live, instruct the user to open the URL on their actual phone (not a desktop browser shrunk down). Walk through specific things to look for:

- Headline that runs off the edge or wraps in a weird spot
- Buttons too small to tap with a thumb
- Photo cropping oddly in the circle
- Cramped sections
- Anything that looks fine on desktop but feels broken on the small screen

Ask them to come back with specific changes, not "make mobile better." Specific examples to model: "the hero headline is two lines on my iPhone and the second line is just the word 'in', can we tighten it?"

## Step 12: Finishing touches (opt-in menu)

Offer these as a yes-or-no menu. If the user says no to any of them, accept it, mark the task complete, and move on without pushing.

- **Free analytics.** "Want me to set up free analytics so you can see who is visiting? My pick is GoatCounter: free for personal use, privacy-friendly, no cookies, and it supports a clever resume-tracking trick where putting `?ref=resume` on your resume link shows up as a traffic source in the dashboard." If yes: add the script, wire up the recommended event goals (office-hours clicks, email and LinkedIn clicks, outbound clicks), and walk them through the `?ref=resume` setup. If no: mark the task complete and continue.
- **Link-preview card (Open Graph image).** "Want me to design your link-preview card? It is the image that shows up when someone pastes your URL on LinkedIn or in iMessage or Slack. Without it, the preview is blank or ugly." If yes: design the 1200x630 card in their palette using their photo, name, and one-line pitch, save it to their folder, and add the meta tags to `index.html`. If no: skip.
- **Favicon.** "Want a favicon? It is the tiny icon that shows up in the browser tab." If yes: create one. If no: skip.

## Anti-slop guardrails, apply throughout

Never use:

- The "Claude beige" look: a cream, paper, or oatmeal background with a terracotta, clay, rust, or persimmon accent, especially with a serif headline. It is the look AI-made sites converge on in 2026. (A user who explicitly asks for it gets it; see Step 5.)
- Instrument Serif, Inter, Geist, Fraunces, Space Grotesk, Plus Jakarta Sans, or default system sans-serifs for display (full list in `palettes.md`)
- Near-black with one neon or acid accent (lime, cyan, electric green) and glowing edges
- Broadsheet cosplay: newspaper hairlines everywhere, an italic display serif, and small tracked mono labels
- The SaaS card kit: a row of rounded cards with an icon, a heading, and two lines each
- Template chrome: fake browser windows, fake terminal windows, or device frames around nothing
- Blue or indigo as a primary accent
- Pill or rounded-full shapes; max border-radius is 8px (the mobile hero circle is the only exception)
- Multi-layer drop shadows, glow, or glassmorphism
- Colored glow shadows or radial "spotlight" gradients, especially on dark palettes
- Glass or blurred see-through cards and navs (`backdrop-filter`)
- Gradient text, or an italic serif word dropped into a sans headline as an "accent"
- A small tracked-caps label (kicker or eyebrow) above any heading, including a chip above the hero headline
- Decorative numbered labels ("01 / ...") when the order means nothing
- Grid-line or stripe backgrounds
- Cards inside cards
- Colored side stripes on cards, quotes, or list items
- Big-number stat tiles ("10+ years") as standalone blocks
- Any text under 12px, and uppercase on anything longer than a short label
- Line height under 1.3 on wrapping text, and a hero headline so big it fills the first screen
- Every section fading in on scroll (one motion moment only)
- Icon-in-a-rounded-square feature card grids
- Testimonial carousels with dots or arrows
- Centered hero with a gradient background
- Em dashes in body copy; use commas, periods, or parentheses
- Generic resume-speak like "passionate about", "results-driven", "thought leader", "synergy", "leverage" as a verb

Always:

- Pull user-specific facts from their resume and voice into the actual copy
- After generation, run the design check in Step 8 ("Check the design before hand-off"): the Impeccable detector, a blind critic that sees only the screenshots, fixes, and at most one repeat. Log each pass in `critique-log.md`. Also scan for em dashes `—` and any remaining `[bracketed placeholders]`.
- Verify contrast on every surface, not just the page background: ink on background at least 7:1, body and small text at least 4.5:1 on each chapter wash, primary on background at least 4.5:1 for text uses, white on primary at least 4.5:1 for button labels.
- Any time a section is added, renamed, or restyled later (by you, by the user, or by another AI tool they used), run the design check again before calling it done, and log it. New sections are where the old habits sneak back in.

## Mid-flight example prompts to surface

When the user is iterating after generation and seems unsure how to phrase a change, offer them prompts they can paste. Keep the suggestions tied to the actual file. Sample set:

- "Rewrite the hero so it sounds more confident and less corporate."
- "The Experience bullets feel long. Cut each to about twelve words and keep the punch."
- "The [stat] in the [project] is wrong. Change it to [new value] and update the description."
- "Add a section for [content type] between [section A] and [section B]."
- "Swap the highlight color for something warmer. Show me three options first."
- "Make the whole site feel a touch more playful, without changing the structure or palette."

Whenever one of these adds or reshapes a section, follow the house patterns (run-in section heading, hairline rows, no chips or tiles) and re-run the design check from Step 8 before saying it is done.

## If the user is returning to an existing site

If they already have a generated site and just want to iterate (not start fresh), skip the interview. Read, in this order, before saying anything about the design:

1. `PRODUCT.md` (or an older `notes.md`): who the site is for and how they talk.
2. `DESIGN.md` (or an older `design-system.md`): the tokens, fonts, and rules to stay inside.
3. `critique-log.md`: what earlier passes found, and above all what the user pushed back on. Do not re-suggest something they already turned down.

If any of the three is missing, write it from what is on the page and what they tell you (a short `PRODUCT.md` from the page's own copy, `DESIGN.md` from the `:root` tokens and font links, an empty `critique-log.md`). Then ask what they want to change.

Run the design check from Step 8 on their current `index.html` before you change anything, and again after, and log both. If they (or another AI tool) added sections since the last session, expect findings there: kicker labels, pill chips, glows, glass cards, cream backgrounds, and tiny uppercase text are the usual suspects. Offer to fix them in plain terms ("a few of the newer sections picked up some patterns that make sites look AI-made; want me to clean those up?").

If their site was built before this version, its palette may be one of the old paper-and-persimmon ones and the detector will flag it as `cream-palette`. That is not an emergency. Mention it once, offer the nearest palette from the new menu, and respect their answer (log it either way).
