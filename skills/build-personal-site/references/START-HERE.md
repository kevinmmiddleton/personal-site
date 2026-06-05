# Your site. Start here.

This is a starter Claude built for you. That is all this is: a starting point. It is a skeleton and a
suggestion, not a finished thing and definitely not precious. You can change any word, any color,
any layout, or you can throw the whole thing out and rebuild it from scratch as many times as you
want. Nothing here is permanent and nothing here is hard to redo. Read that sentence again if your
brain needs it.

You do not need to know how to code. The whole idea is that you sit with Claude, say what you want
in plain English, and Claude makes the change. This guide just puts the steps in a sane order so
you are never doing more than one thing at a time.

## What you've got

Two files in this folder:

- **index.html** is the entire website. One file. Open it in any browser to see it.
- **design-system.md** is the rulebook for how the site looks (fonts, colors, spacing, the "never
  do this" list). Keep it next to index.html. When you start a session, tell Claude to read it
  first, and your changes will stay on-brand instead of drifting into generic AI-website land.

Quick note on the colors: your palette is one of ten 2026 directions (Pinterest's 2026 forecast,
San Marco's color trends, etc.) that you picked during the interview. It is a starting point. If you
want it warmer, cooler, calmer, or louder, just tell Claude "change the accent to X" and it will
update everywhere at once because of that rulebook file.

---

## Open this in Claude first

1. Put these files in one folder on your computer (index.html, design-system.md, START-HERE.md).
2. Open the Claude desktop app and turn on Cowork.
3. Add this folder as your working folder. Claude will ask which folder it can use; point it here.
   That gives Claude permission to read and edit these files.
4. Paste this as your first message:

> Hey Claude. This folder has my personal website (index.html), a design rulebook
> (design-system.md), and a setup guide (START-HERE.md). Read START-HERE.md and design-system.md
> first, then help me make this site mine and get it live, one step at a time. Start by having me
> QA the content against my resume, and ask me for whatever you need from me as we go (my resume, a
> photo of myself, my scheduling link). Keep everything consistent with the design system and walk
> me through each step. I am not a web developer, so don't overwhelm me.

From there, just talk to it normally: "change this," "fix that," "what's next." That is the whole
workflow.

---

## Part 1: Make it yours (do this first, before anything technical)

**QA the site section by section, and feed Claude the real facts.** Claude assembled the first draft
from your resume, so treat every line as "verify this," not "this is already true." The fastest
way: paste your actual resume straight into the chat (plus anything else useful, the real text of
your recommendations, project notes, a job description you are targeting) and tell Claude to
cross-check the site against it. Then go section by section and give blunt feedback. Claude fixes as
you go. The design is just a wrapper; your story is the product, and this is the part that matters.

Walk through each section and confirm it is accurate and sounds like you:

- **Hero:** does the headline and the one-line pitch actually sound like you?
- **How I Work:** are the three points right, and is the Applied AI list accurate?
- **Experience:** every role, title, date, and bullet. Fix anything wrong or missing.
- **Building:** these are your real numbers (2.5x volume, $1M unlocked, 700+ docs, 35% fewer missed
  calls, and so on). Confirm each one is accurate and something you are comfortable putting in
  writing. If a number is fuzzy, soften it or cut it.
- **Skills:** the right tools, nothing missing, nothing you would not want to be asked about.
- **Recommendations:** the quotes and who said them. Make sure the attributions are right and the
  people are okay being quoted publicly.
- **Off the clock:** coaching, Russian, the "choose to be happy" line. Keep what is true to you.
- **Office Hours and Connect:** the calendar link goes to your real scheduler, and the email,
  LinkedIn, and "open to" roles list are all current.

Accuracy beats polish here. A recruiter will ask about anything on this page, so every claim should
be one you can stand behind in a conversation.

**Add a photo (Claude will ask you for this).** During the walkthrough Claude will prompt you for a
photo, because the site has a spot for it and your link-preview card will reuse the same image
later. Save a photo of yourself as `photo.jpg` in this folder and it appears automatically: a
circle on mobile, a framed portrait on desktop. A warm, real, looking-at-the-camera shot beats a
stiff corporate headshot. No photo ready yet? Tell Claude and it leaves a clean placeholder so you
are not blocked.

**Change the font or anything else if you want.** The headline font is Bricolage Grotesque. Don't
love it? Say so to Claude and try another. Same for spacing, section order, wording, all of it.

**Things you can ask Claude to do.** Once the content is roughly right, just talk to it. Some
examples to copy/paste so you don't have to think about phrasing:

> Rewrite the hero so it sounds more confident and less corporate.

> The Experience bullets feel long. Cut each one to about twelve words and keep the punch.

> The 2.5x volume number is wrong for that year. Change it to 1.8x and update the description.

> Add a "Speaking and writing" section between Skills and Recommendations with these three talks: [paste]

> Swap the highlight color for something warmer. Show me three options first.

> Move Off the Clock above Recommendations.

> Add a project card about [X], same style as the others.

> Make the whole site feel a touch more playful, without changing the structure or palette.

There is no wrong way to ask. If you can describe it, Claude can change it.

Take your time here. The technical stuff below can wait until the content feels right.

---

## Part 2: Get it live (free)

Do these in order. One at a time. Ask Claude at any step if something is unclear.

### Step 1. Make a GitHub account

Go to github.com and sign up. It is free. GitHub is just the place your site's files will live, and
it can host the site for you for free (that is the next step). That is all it is for here.

### Step 2. Turn on free hosting (GitHub Pages)

1. On GitHub, click **New repository**.
2. Name it `yourusername.github.io` (use your actual GitHub username). Naming it this way gives you
   the cleanest free web address.
3. Check the box **Add a README file**. That is your first file. It can just be one line, like
   "About: my personal site." Done.
4. Once the repo exists, upload `index.html` and `design-system.md` (you can literally drag and
   drop them into the repo page, or let Claude do it after Step 4).
5. Go to the repo's **Settings → Pages**. Under "Source," pick the **main** branch and the root
   folder, then Save.
6. Wait about a minute. Your site is now live at `https://yourusername.github.io`.

What just happened: GitHub is now serving your file to the public. From now on, every time that
index.html changes in the repo, the live site updates on its own within a minute. That is the whole
magic, and there is no server to manage.

### Step 3. (Optional, now or later) Get your own domain

`yourusername.github.io` works forever and is free. But a real domain like `yourname.com` looks
sharper at the top of a resume. It runs about $10 to $15 a year.

- Buy it at **Cloudflare** (cloudflare.com). Their prices are at-cost (no markup), their DNS panel
  is the easiest to use, and as a bonus they include free, privacy-friendly visitor analytics.
  Namecheap and Porkbun are fine too.
- Pointing the domain at your GitHub site means adding a few "DNS records" in your registrar's DNS
  panel. These are GitHub Pages' current values: four A records on the apex domain, plus one CNAME
  on the `www` subdomain.

  ```
  A      @      185.199.108.153
  A      @      185.199.109.153
  A      @      185.199.110.153
  A      @      185.199.111.153
  CNAME  www    yourusername.github.io
  ```

  Paste those into your registrar's DNS panel and save. If anything looks stale or you are unsure
  what goes where, ask Claude: "give me the current DNS records for GitHub Pages and walk me through
  where each one goes in [registrar name]."
- Then in GitHub: **Settings → Pages → Custom domain**, type your domain, save, and tick **Enforce
  HTTPS**. That is it.

Honest note: none of the connectors Claude can plug into will set those DNS records for you
automatically, so this one step is copy-paste by hand. Claude will give you the exact records and
talk you through where they go.

### Step 4. Connect Claude to GitHub

So you are not dragging files around by hand forever. In your Cowork session, open the connectors
panel (look for the plug or puzzle-piece icon, depending on your Claude version), find GitHub, and
connect it. You will sign in to GitHub in a popup and authorize Claude. When it asks which repos to
grant access to, pick just the one you made above. Once it is connected, tell Claude the repo name
and it can read your files, make edits, and commit changes for you. From now on, when you are ready
to ship a change, you can just say "push this live" and Claude commits it to GitHub; Pages
redeploys on its own within about a minute.

### Step 5. The edit-and-publish loop (this is how you'll work from now on)

1. Keep editing your **local copy** in this folder with Claude. Change whatever you want.
2. Preview by opening index.html in your browser. Nobody sees this but you.
3. When you are happy, tell Claude "push this live." It commits the change to GitHub, and your real
   site updates within a minute.

You stay in your private sandbox until you decide to ship. No surprises go public.

---

## Part 3: The finishing touches (once it's live)

### Open it on your phone first (this is the one everyone skips)

Most people who click your link will be on their phone (LinkedIn, iMessage, email, Slack). So
before you do anything else, pull up your live URL on your actual phone (not your desktop browser
shrunk down) and scroll all the way through. Things to look for:

- Headline that runs off the edge or wraps in a weird spot.
- Buttons that are too small or too close together to tap with a thumb.
- Photo that crops your face oddly in the circle.
- Any section that feels cramped, cut off, or chopped.
- Anything that looks fine on desktop but feels broken on the small screen.

Tap every button. Open every disclosure. Then come back to Claude with specific changes, and the
more specific the better. "The hero headline is two lines on my iPhone and the second line is just
the word 'in.' Can we tighten it?" beats "make mobile better." Claude can fix exactly what you
describe.

### Analytics: see who's actually looking (free)

You are a data guy, so you will want this, and it is another honest read on whether your outreach is
landing. You can do all of it without spending a cent.

The pick is **GoatCounter** (goatcounter.com): free for personal use, privacy-friendly, no cookie
banners, one tiny script, and a clean dashboard. It natively supports the resume trick below and
custom events. If you would rather have zero setup, **Cloudflare Web Analytics** is also free (and
built in if you buy your domain at Cloudflare), just a bit more basic. Either way, ask Claude to add
the script for you.

Things actually worth tracking. Ask Claude to wire these as events:

- **Office hours clicks** (your "Book office hours" and "Grab a time" buttons). This is the money
  metric: is the site turning visitors into booked conversations?
- **Email clicks** and **LinkedIn clicks** (the footer buttons).
- **Outbound link clicks** in general.

And the best trick for a job search: **when you put this link on your resume, add `?ref=resume` to
the end**, like `https://yourname.com/?ref=resume`. Your dashboard will then show "resume" as a
traffic source, so you can literally see when someone opens your resume and clicks through. Use
different tags for different spots: `?ref=linkedin`, `?ref=email-signature`, and so on. Now you know
what is actually working.

### Meta tags and a link-preview image (the OG image)

When you paste your link into LinkedIn, iMessage, or Slack, the little preview card (image, title,
short description) is controlled by hidden "meta tags," specifically a set called **Open Graph (OG)**.
Without them you get a blank or ugly preview. With them, you get a sharp branded card that makes you
look like you have your act together.

Two parts:

1. **The tags.** Ask Claude: "add the Open Graph and meta tags for my domain." It will drop in the
   right block and fill in your address.
2. **The image.** The preview needs an image at exactly **1200 x 630 pixels**. Once you have picked
   your photo, ask Claude to **design your OG card** in the site's colors with your name, your
   headline, and your photo. It will hand you a ready-to-use image file in the format the social
   platforms actually accept.

While you are at it, ask Claude to make you a **favicon** too (the tiny icon in the browser tab).

---

## Working with Claude on this, going forward

- Keep **design-system.md** in the folder and tell Claude to read it at the start of each session.
  It is what keeps your edits looking intentional instead of generic.
- Change things locally, preview, push when ready.
- You can always undo. GitHub keeps a full history, so any change can be rolled back, and you can
  restart the whole thing whenever you feel like it.

## One more time, because it matters

This is a skeleton to get you off the blank page. It is not the "right" way to do
it and it is not finished. Rip out whatever does not feel like you, rebuild sections, change the
colors, or scrap it and start over. The only goal is that it ends up feeling like you, because that
is the part no template and no AI can fake. You've got this.
