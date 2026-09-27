<p align="center">
  <img src="banner.svg" alt="Personal Site — Build a distinctive personal website through a guided interview with Claude" width="100%"/>
</p>

# personal-site

Build a distinctive personal website through a guided interview with Claude. No HTML required. Walks you through resume intake, picking real reference sites and a design direction, choosing a palette and fonts from a shortlist picked just for you, generating the files, QA'ing the content against your real story, and getting the whole thing live on GitHub Pages for free.

Designed not to look like every other AI-built site. Ships a real editorial backbone (not a prompt) and a strict "do not use" list to keep generated output from drifting into generic AI defaults.

## Install

1. Download the latest `personal-site.plugin` from [Releases](../../releases).
2. Open the Claude desktop app and turn on Cowork.
3. Drop the `.plugin` file in.

That's it. Then start a new Cowork session and say "build me a personal site" or run `/personal-site`.

## What it does

A typical session takes about an hour and looks like this:

- Three-question interview about the site's purpose, audience, and where you are in life
- Resume intake (paste it or drop a file)
- Quick voice check (casual or formal, dry or warm, what you don't want to sound like)
- Point at two or three real websites you like (any industry), then pick from two or three design directions built from them
- Pick a palette and a font pairing from a shortlist seeded by your name and the date, so your site doesn't start where everyone else's does (no cream-and-terracotta, no Inter, no Instrument Serif)
- Drop in a photo and your scheduling link
- Claude generates `index.html`, a `DESIGN.md` rulebook, a `PRODUCT.md` about you and the site, and a tailored `START-HERE.md` guide in your folder
- A separate critic that sees only screenshots scores the design, the Impeccable detector checks it, and Claude fixes what they find (and logs it in `critique-log.md`)
- Walks you through QA'ing every section against your resume
- Walks you through getting it live on GitHub Pages, optionally pointing a $10 domain at it, and connecting Claude to GitHub so future edits push live with one sentence
- Reminds you to test on your phone and tells you what to look for
- Adds free analytics with a clever resume-tracking trick (`?ref=resume` shows up as a source so you can see when recruiters click through)

## Why this exists

Most AI-built sites have a tell. The same Inter font, the same pill buttons, the same icon-card grids, the same testimonial carousels, the same drop shadows. This plugin fights that on five fronts:

- A bundled backbone instead of generating from scratch. The structural layout, type system, color-zoned chapters, and mobile patterns ship with the plugin and don't drift.
- A bundled design system with an explicit "do not use" list that Claude reads first every session.
- Hard reliance on the user's specifics. The interview, resume read, and voice check force user-true content into the copy.
- Forced divergence. A seed script picks which palettes and fonts you see, and Claude strikes its own first-instinct picks before showing you anything, because banning one cliché just moves a model to the next one over.
- A post-generation design check with two independent reviewers: the [Impeccable](https://impeccable.style) detector (the open anti-pattern standard by Paul Bakaus) and a blind critic subagent that sees only the desktop and phone screenshots, never the code. Models over-grade their own work; a critic that didn't write it doesn't. It runs again whenever sections are added later, and every pass is logged so later sessions remember what you already said no to.

## What's new

**0.5.0 (September 2026): out of the beige.** By fall 2026 the AI-site look had moved from purple gradients to "Claude beige": cream backgrounds, terracotta accents, Instrument Serif with one italic word, and little labels over every heading. Half of this plugin's own palette menu sat in that cluster. This release moves it out:

- A new palette menu: ten palettes across cool, tinted, saturated, and dark grounds, with at most two near-neutral paper options and no cream. No blue action colors either (two old palettes quietly broke the skill's own no-blue rule; they're gone).
- Eight new font pairings, all on Google Fonts. Instrument Serif, Bricolage Grotesque, Inter, Geist, Fraunces, Space Grotesk, and Plus Jakarta Sans are off the menu.
- A seed script (`scripts/seed.mjs`) that picks your shortlist from your name and the date, plus a step where Claude privately throws out its own first three picks.
- Real references first: you point at two or three sites you like, and Claude shows two or three directions before building.
- A blind critic: a separate Claude that only sees screenshots of your site scores it and names the top three fixes, alongside the Impeccable detector. One repeat, max.
- Your site folder now keeps `PRODUCT.md`, `DESIGN.md`, and `critique-log.md`, and later sessions read them first.
- New backbone default: Fog and oxblood, set in Funnel Display and Funnel Sans.

The template's detector findings went from 1 (the accepted cream background) to 0.

**0.4.0 (September 2026): design refresh.** A real site built with 0.3.0 still came out with some AI tells, and a few of them came from the template itself. This release brings the backbone up to the [Impeccable](https://impeccable.style) standard:

- No more small caps labels above every heading. Section names now run into the headline.
- No decorative 01 / 02 / 03 numbering, no translucent blurred nav, no fade-in on every section. One motion moment: a highlighter swipe across the hero punch line.
- Every piece of text is 12.5px or larger, and all muted text passes contrast on every colored section.
- Theme touches most generated sites skip: text selection, focus rings, link underlines, scrollbars.
- A much longer "do not use" list (glows, glass cards, gradient text, pill chips, big-number tiles, grid backgrounds, and more), a craft floor, and extra care for dark palettes.
- The post-generation check now runs the Impeccable detector and takes real screenshots, instead of a text search.

The template's detector findings went from 29 to 1 (the paper-toned background, which is a deliberate palette choice).

## What's inside the plugin

```
personal-site/
├── .claude-plugin/plugin.json
├── skills/build-personal-site/
│   ├── SKILL.md            the behavior file Claude follows
│   ├── scripts/
│   │   └── seed.mjs        picks each user's palette and font shortlist
│   └── references/
│       ├── index.html      the editorial backbone
│       ├── design-system.md   the rulebook + the do-not-use list (becomes DESIGN.md)
│       ├── START-HERE.md   the user-facing guide template
│       └── palettes.md     ten palettes, eight font pairings, the shortlist method
├── README.md
└── LICENSE
```

## License

MIT. See [LICENSE](LICENSE).
