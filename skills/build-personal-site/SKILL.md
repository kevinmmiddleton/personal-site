---
name: build-personal-site
description: Builds a distinctive personal website from scratch through a guided interview. Use when the user asks to "build my personal site", "create a personal website", "set up my personal site", "make me a portfolio site", "build my resume website", "give me a home page", "make me a personal landing page", or runs the /personal-site command. Walks the user through resume intake, palette pick from ten 2026 directions, font pick from four distinctive options, file generation, content QA against their resume, going live on GitHub Pages for free, and optionally setting up a custom domain.
---

# Building a personal site

You are walking the user through building their own personal website. The user is likely non-technical. Stay warm, low-pressure, and explicit. Never overwhelm: one step at a time, ask one question, wait for the answer, reflect it back.

## What ships with this skill

The `references/` folder contains four files:

- `index.html`: the editorial backbone, with placeholder content marked in `[brackets]`
- `design-system.md`: the rulebook + the "do not use" slop list
- `START-HERE.md`: the user-facing guide that lives in their folder
- `palettes.md`: ten 2026 palette definitions with hexes and vibe notes

Do not generate the site from scratch. Copy the backbone into the user's folder and customize it.

## Opening

When triggered, open with the three reassurances, in plain language:

- This is a starter, not a finished thing.
- They can change anything later.
- They can scrap it and redo as many times as they want.

Then ask them to create an empty folder for their site on their computer and add it as the working folder.

## Track progress with a visible task list

Right after the user adds their folder, create a visible task list using `TaskCreate` so they can see where they are at all times. Lay out the eleven steps below as separate tasks. As each step starts, mark it `in_progress`. As each completes, mark it `completed`. If the user wants to skip a step ("no thanks on analytics"), mark it completed too and move on. Refer back to the list whenever they ask "what's next" or seem lost.

## Save context as you go

Also during Step 1, create a `notes.md` file in the user's folder. As they answer each question and make each choice (purpose, audience, situation, voice, palette, font, scheduling link, what they opted in/out of), append it there in clean readable Markdown. This is the breadcrumb trail. If they close Cowork and come back next week, they (and any future session of yours) can see exactly where they left off and what they decided.

## Step 1: Interview

Match the user's pace. Ask the three questions one at a time if they seem new or overwhelmed; bundle two or three of them into one message if they are moving fast or asking to skip ahead. Your judgment. Either way, reflect each answer back so they can correct, and write each answer into `notes.md` as you go.

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

## Step 4: Palette pick

Read `references/palettes.md` for the ten palette definitions. Present them to the user as inline color chips with hex codes. Use the `visualize` tool's `mockup` module if available to render real chip rows; otherwise list each palette clearly with name, four hexes, and a one-line vibe note.

Let them pick:

- By number ("5")
- By mix ("colors from 3 with the mark from 5")
- By description ("something darker than 7")

Confirm the final pick before moving on. Save the hexes for generation.

## Step 5: Font pick

Show the four fonts as **real styled previews** using the `visualize` tool's `mockup` module, not just names. Each preview renders the same example phrase in the actual font at display size (around 36-42px), with the font name and a one-line vibe note underneath. Load the fonts from Google Fonts in the widget (the CSP allowlist permits `fonts.googleapis.com` and `fonts.gstatic.com`). For the example phrase: use the user's draft hero line if you have one, otherwise a clean twelve-word sentence in their voice.

If the `visualize` tool is not available, fall back to a plain list with one-line vibe notes:

- Bricolage Grotesque: modern grotesque, punchy, no real italic so emphasis is done via the highlight mark or weight/color
- Instrument Serif: refined editorial serif, has real italic, keeps a literary feel
- Young Serif: chunky warm slab-ish serif, friendly and bold, no italic
- Hedvig Letters Serif: characterful editorial serif, distinctive

Never offer Inter, Geist, or default system sans-serifs.

## Step 6: Photo and scheduling link

Ask the user to drop a photo of themselves. Tell them the same image will be reused for the social link-preview card later, so they only need to choose once. If they do not have a photo ready, leave the placeholder; the site renders cleanly with the empty state.

Ask for their scheduling link (Calendly, Google Calendar Appointments, Cal.com, etc.) if they want an office-hours block. If they do not want one, hide that section in the generated file.

## Step 7: Generate the files

Copy the three template files from `references/` into the user's working folder, then customize each.

### Section structure varies by purpose

The template ships with a default section order (Hero, How I Work, Experience, Projects, Skills, Recommendations, Off the Clock, Office Hours, Connect). Adapt the structure to the user's purpose from Step 1. The existing CSS classes (`.entries`, `.entry-trigger`, `.entry-body`, `.skill-groups`, `.quote`) are flexible enough to support every variation below without restyling. You are swapping content into existing patterns, not redesigning.

- **Job search.** Keep the default. Experience as resume accordion, Projects as stat-led cards, Skills as groups, Recommendations as pull-quotes. Office Hours block leans into "between roles, helping people." Lead with a punchy first-person hook.
- **Consulting or freelance services.** Replace "Experience" with "How I Can Help," organized by audience type using the same disclosure pattern (one entry per audience segment, bullets list the offerings). Replace "Projects" with "Speaking & Writing" or "Case Studies" depending on what they have. Repeat the "Book a Call" CTA two or three times down the page (consulting sites convert on repetition). Voice often runs more metaphor-driven than the job-search default; lean into that if their voice check supports it.
- **Academic or thought leader.** Same shape as consulting, but expand the Speaking & Writing section into Publications + Recent Presentations with venue, year, and link per entry. Keep credentials prominent.
- **Portfolio (designer, developer, creative).** Expand Projects into the centerpiece with images and short case-study bodies. Compress Experience to a tight list. Keep Skills and Recommendations.
- **Internet home / personal essay.** Strip down. Hero, About, Writing, Connect. Drop the rest.

Confirm the structure with the user before filling content if you are making a non-default choice. ("Since this is a consulting site, I'm going to replace the Experience section with a 'How I Can Help' section organized by who you work with. Sound right?")

### index.html

- In the `:root` CSS block, swap `--color-bg`, `--color-primary`, `--color-primary-deep`, `--color-secondary`, `--color-wasabi`, `--color-plum`, `--color-line`, `--color-line-strong`, `--color-ink`, `--color-ink-muted` to the user's chosen palette. Derive missing tokens from the palette family (warm-leaning palettes get warm ink, cool-leaning get cool ink, etc.).
- Retune the chapter wash classes (`z-wasabi`, `z-sage`, `z-blue`, `z-peach`, `z-mauve`) to soft tints of the chosen palette. Keep the rotation pattern; restyle the colors.
- In the Google Fonts `<link>` tag, swap the display font to the chosen one. Update the `--display` CSS variable too.
- Replace every `[bracketed placeholder]` in the body with content drawn from the resume + voice check. Match their voice from Step 3.
- Replace `REPLACE_WITH_LINKEDIN_URL`, `REPLACE_WITH_EMAIL`, and `REPLACE_WITH_SCHEDULING_LINK` with their actual links.
- Update `<title>` and `<meta name="description">` with their name and one-line pitch.
- If they opted out of office hours, remove the `<section class="oh">` block entirely and adjust the nav.

### design-system.md

- Update the palette code block to show the user's exact hexes
- Update the typography section to name the user's chosen display font
- Add a one-line changelog entry: today's date, brief description of the build

### START-HERE.md

- Tailor framing to their situation. Job search emphasizes the resume QA, the office-hours angle, and the analytics-tracking-recruiter-clicks trick. Freelance emphasizes services, case studies, and lead-tracking. Portfolio emphasizes project depth and the gallery.
- Otherwise leave the guide intact.

## Step 8: QA pass against the resume

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

## Step 9: Go-live walkthrough

Follow the steps in the `START-HERE.md` that is now in their folder.

1. GitHub account. Sign up at github.com if they do not have one.
2. GitHub Pages. Create a repo named `username.github.io`, check "Add a README file" on creation, upload `index.html` and `design-system.md`, enable Pages in Settings (main branch, root).
3. Optional custom domain. Recommend Cloudflare for the registrar (about $10/year, great free DNS, free Web Analytics). Give the user the exact four GitHub A records (185.199.108.153, .109.153, .110.153, .111.153) and the `www` CNAME pointing back at `username.github.io`.
4. Connect Claude to GitHub. Open the connectors panel, find GitHub, authorize, scope access to just the one repo.
5. Edit-and-publish loop. Local edits, preview in browser, say "push this live" when ready and Claude commits to GitHub. Pages redeploys within a minute.

## Step 10: Mobile QA after launch

Once live, instruct the user to open the URL on their actual phone (not a desktop browser shrunk down). Walk through specific things to look for:

- Headline that runs off the edge or wraps in a weird spot
- Buttons too small to tap with a thumb
- Photo cropping oddly in the circle
- Cramped sections
- Anything that looks fine on desktop but feels broken on the small screen

Ask them to come back with specific changes, not "make mobile better." Specific examples to model: "the hero headline is two lines on my iPhone and the second line is just the word 'in', can we tighten it?"

## Step 11: Finishing touches (opt-in menu)

Offer these as a yes-or-no menu. If the user says no to any of them, accept it, mark the task complete, and move on without pushing.

- **Free analytics.** "Want me to set up free analytics so you can see who is visiting? My pick is GoatCounter: free for personal use, privacy-friendly, no cookies, and it supports a clever resume-tracking trick where putting `?ref=resume` on your resume link shows up as a traffic source in the dashboard." If yes: add the script, wire up the recommended event goals (office-hours clicks, email and LinkedIn clicks, outbound clicks), and walk them through the `?ref=resume` setup. If no: mark the task complete and continue.
- **Link-preview card (Open Graph image).** "Want me to design your link-preview card? It is the image that shows up when someone pastes your URL on LinkedIn or in iMessage or Slack. Without it, the preview is blank or ugly." If yes: design the 1200x630 card in their palette using their photo, name, and one-line pitch, save it to their folder, and add the meta tags to `index.html`. If no: skip.
- **Favicon.** "Want a favicon? It is the tiny icon that shows up in the browser tab." If yes: create one. If no: skip.

## Anti-slop guardrails, apply throughout

Never use:

- Inter, Geist, or default system sans-serifs for display
- Blue or indigo as a primary accent
- Pill or rounded-full shapes; max border-radius is 8px (the mobile hero circle is the only exception)
- Multi-layer drop shadows, glow, or glassmorphism
- Icon-in-a-rounded-square feature card grids
- Testimonial carousels with dots or arrows
- Centered hero with a gradient background
- Em dashes in body copy; use commas, periods, or parentheses
- Generic resume-speak like "passionate about", "results-driven", "thought leader", "synergy", "leverage" as a verb

Always:

- Pull user-specific facts from their resume and voice into the actual copy
- After generation, grep the user's `index.html` for slop tells: the literal word "Inter", any `border-radius:999px`, any `border-radius` above `8px` outside the `.hero-photo` mobile rule, `box-shadow` count above 1 (the photo allowance), em dashes `—`, and any remaining `[bracketed placeholders]` that should have been filled. Fix anything caught before handing off.
- Verify contrast: ink on background at least 7:1, primary on background at least 4.5:1 for text uses, white on primary at least 4.5:1 for button labels.

## Mid-flight example prompts to surface

When the user is iterating after generation and seems unsure how to phrase a change, offer them prompts they can paste. Keep the suggestions tied to the actual file. Sample set:

- "Rewrite the hero so it sounds more confident and less corporate."
- "The Experience bullets feel long. Cut each to about twelve words and keep the punch."
- "The [stat] in the [project] is wrong. Change it to [new value] and update the description."
- "Add a section for [content type] between [section A] and [section B]."
- "Swap the highlight color for something warmer. Show me three options first."
- "Make the whole site feel a touch more playful, without changing the structure or palette."

## If the user is returning to an existing site

If they already have a generated site and just want to iterate (not start fresh), skip the interview. Read their `design-system.md` first to stay on-brand, then ask what they want to change.
