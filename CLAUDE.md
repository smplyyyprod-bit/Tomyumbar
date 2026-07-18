# CLAUDE.md — TomYumBar Website

> Project-specific instructions for the TomYumBar site. Adapted from a general
> "premium site" template and overridden throughout with this brand's actual
> palette, type, and voice — established from real interior/signage photos
> the client supplied. Where this file disagrees with generic defaults,
> this file wins.

---

## What this project is

The marketing/landing website for **TomYumBar** — a Modern Pan Asian Kitchen,
est. 2016, currently operating in Tashkent. Cinematic, editorial, warm —
not a generic restaurant template. The room itself (woven rattan pendants,
oxblood-red lacquer, cream plaster, brass accents) is the mood board; the
site should feel like that room, not like a stock "food website."

Full menu ordering already exists at `menu.tomyumbar.com` (not reachable from
this dev environment — network-blocked). This site is the brand/marketing
front door, with its own full menu section built from real menu data once
supplied (see `js/menu-data.js`).

**Feel:** modern, premium, cinematic, Asian-inspired, elegant but energetic.

## Tone for explaining things to the user

- Plain English first. No jargon dropped without a one-line explanation.
- Concrete over abstract — show, don't define.
- One step at a time on multi-part tasks.
- Reassure on errors: say what's likely happening before listing fixes.
- Skip the filler, get to the action.

## Current stack (already built — don't re-platform without asking)

- Plain **HTML + CSS + vanilla JS**, no framework, no build step. This is a
  one-pager (single `index.html`, anchor-linked sections), which is the
  right-sized stack for it — don't introduce Next.js/React/Tailwind unless
  the user explicitly asks to migrate.
- Menu content lives entirely in `js/menu-data.js` as a data array, rendered
  by `js/main.js`. This is the one file to edit when real menu data arrives —
  layout never needs to change for content updates.
- Fonts are self-hosted concerns via Google Fonts `<link>` tags in
  `index.html` (Playfair Display, Manrope) — see Typography below.
- **Motion library** (`npm install motion`, successor to Framer Motion) is
  the plan for Round 2 animation work, if/when the project moves to a
  bundler. Until then, keep interactions to plain CSS (no build step exists
  yet to import an npm package into the static HTML).

## File structure (actual, current)

```
Tomyumbar/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── menu-data.js      ← swap this file for real menu content (bilingual, see Language)
│   ├── main.js
│   ├── hero-video.js     ← hero background playlist/crossfade
│   ├── intro.js          ← one-time intro overlay → hero handoff
│   └── i18n.js            ← RU/EN language switch, see Language
└── assets/
    ├── images/
    │   ├── storefront-01.jpg
    │   ├── interior-01.jpg
    │   ├── interior-02.jpg
    │   ├── dish-sushi-platter.jpg
    │   ├── hero-poster.jpg        ← hero fallback frame, see Hero section
    │   ├── logo-full-dark.png     ← full lockup, black ink, transparent (light backgrounds)
    │   ├── logo-full-light.png    ← full lockup, cream ink, transparent (dark backgrounds)
    │   ├── logo-wordmark-dark.png ← "TomYumBar" only, black ink (nav, light state)
    │   └── logo-wordmark-light.png ← "TomYumBar" only, cream ink (nav, dark state)
    └── videos/
        ├── intro.mp4             ← one-time intro, see Intro overlay
        └── hero-01.mp4 … hero-05.mp4 ← hero playlist, in playback order
```

## Logo

Real logo, supplied by the client (IMG_1329): serif "TomYumBar®" wordmark,
"Modern Pan Asian Kitchen" subtitle, three chili-pepper marks, "est. 2016."
Source file had a baked-in white background — regenerated as true
transparent-PNG pairs so the mark works on both light and dark sections
without a background card:

- **Dark ink pair** (`logo-full-dark.png` / `logo-wordmark-dark.png`) — for
  light backgrounds (solid cream header state, light sections).
- **Light ink pair** (`logo-full-light.png` / `logo-wordmark-light.png`) —
  ink recolored to cream, for dark backgrounds (transparent-over-hero header
  state, footer). The red chili marks are left untouched in both — red reads
  fine on both grounds.
- **Wordmark-only crop** — just the "TomYumBar" line, no subtitle/chilis/est.
  year, for the compact nav slot where the full lockup would be illegible at
  nav height.

The header (`.wordmark`) swaps between the wordmark-only light/dark pair via
CSS (`.site-header--solid` toggles which `<img>` is visible) — no JS needed,
both are loaded and only one is shown at a time. The footer always uses the
full light-ink lockup since the footer background is always dark.

If a higher-resolution or vector export becomes available later, regenerate
these four PNGs from it the same way rather than re-cropping a rasterized
version of a rasterized version.

## Typography

Established from the physical signage (serif logotype) and current build:

| Role | Typeface | Notes |
|---|---|---|
| Display / headlines / dish names | **Playfair Display** | 500/600/700, italic 500 for accents. Matches the serif brand mark. |
| Body / UI / nav / prices | **Manrope** | 400–800. Clean, energetic, legible at small sizes (menu cards). |
| Eyebrow labels | Manrope, uppercase, `letter-spacing: 0.18em` | e.g. "OUR STORY", "FULL MENU" — editorial accent, not a third typeface. |

Never introduce a third family. Two is deliberate — don't add "just one more"
for a single section.

**Sizes (already in `css/styles.css` via `clamp()`):**
- Hero headline: ~44–88px, responsive
- Section heading (`h2`): ~32–44px
- Body: 16px, line-height 1.5

## Color palette

TomYumBar's palette, drawn from the real room and signage — **use this, not
generic dark/light-mode defaults**:

| Token | Hex | Use |
|---|---|---|
| `--color-cream` | `#F7F2E9` | Primary background |
| `--color-cream-alt` | `#EFE6D4` | Alternating section background |
| `--color-paper` | `#FFFDF9` | Card/menu background |
| `--color-ink` | `#1B1512` | Primary text, dark sections (gallery, footer) |
| `--color-ink-soft` | `#4A3F3A` | Secondary text |
| `--color-maroon` | `#7A1522` | Primary accent — CTAs, prices, eyebrows |
| `--color-maroon-dark` | `#591019` | Hover state on maroon |
| `--color-gold` | `#B0894F` | Secondary accent — used sparingly (logo mark, gallery eyebrow) |

Never pure black (`#000`) or pure white (`#FFF`) — the ink and cream tokens
above are chosen warm on purpose, matching the wood/lacquer/plaster of the
actual space.

## Hero section

Full-viewport. Background is a 5-clip video playlist (`js/hero-video.js`)
that plays back-to-back on loop with a ~400ms crossfade between clips —
two `<video>` elements (`#heroVideoA` / `#heroVideoB`) swap an `is-active`
class while the standby element preloads the next clip, so there's never a
black frame or stall. `HERO_PLAYLIST` in that file is the order of truth;
edit it to reorder/add/remove clips, don't hand-edit the `<video>` tags.
Source clips are iPhone H.264 exports remuxed with `-movflags +faststart`
(moov atom moved to the front) — always do this to any new clip before
adding it, or browsers that can't range-request the file (some static
hosts, some dev servers) will fail to demux it entirely, not just load
slowly. `assets/images/hero-poster.jpg` is the fallback frame (both a CSS
background on `#heroMedia` and a `poster` attribute on the first video) —
regenerate it (`ffmpeg -i <clip> -ss 1 -frames:v 1 poster.jpg`) if clip 1
changes. Scrim (`.hero__scrim`) sits at ~60–72% black (client asked for it
darker than the initial 45–55% pass), well above the lighter 25–35%
general guidance below — video needs more contrast suppression than a
static photo to keep text legible, and this brand wanted it darker still.

## Intro overlay

A one-time, full-screen cinematic intro (`assets/videos/intro.mp4`, ~7s)
plays before the hero on every real page load — `js/intro.js`, markup at
the very top of `<body>` in `index.html`. Fixed, `z-index: 9999`, blocks
scroll via `.intro-active` on `<html>`. Hands off to the hero with a 1s
crossfade (`--intro-fade` token, shared by both elements so JS and CSS
can't drift out of sync) once **both** are true: the intro clip has
ended, and `#heroVideoA` (the first hero clip) is buffered enough to
play smoothly — so the hero is always already playing, silently, before
it's ever revealed. Skipped entirely under `prefers-reduced-motion`
(hero shown immediately, no lock, no fade) and if JS is unavailable
(`<noscript>` fallback right after the overlay markup).

**The bug that actually happened here, worth knowing about:** both the
intro-ended and hero-ready checks originally relied only on event
listeners (`ended`, `canplay`, `canplaythrough`). On a fast connection —
or in any environment where the browser races through a short, already-
cached clip — that event can fire *before* the script finishes attaching
its listener, and a `{ once: true }` listener registered after the fact
never sees it. The fix is checking the synchronous state first
(`video.ended`/`video.error`, `video.readyState`) and only falling back
to an event listener if that state hasn't been reached yet. Apply the
same pattern to any future "wait for this video to reach some state"
logic — don't rely on the event alone.

**Open item to revisit:** the current hero ships two CTAs ("View Full Menu"
+ "Reserve a Table"). Premium hero conventions (and this file, generally)
favor a single primary CTA — flag this to the user before Round 2 and
either demote one to a text link or drop it, rather than silently changing
it.

## Menu section rules

- All content comes from `js/menu-data.js` — never hand-edit dish cards in
  `index.html`, they're rendered by `js/main.js`.
- Category nav is a sticky pill-row of anchor links; dish cards show image
  (or placeholder), name, description, price. Keep prices in UZS (som),
  formatted with thousands separators, matching how TomYumBar's own ordering
  site prices dishes.
- Don't summarize or drop menu items — the full, current menu must always be
  present, per the client's explicit requirement.

## Language

Russian is the default/primary language (client's explicit requirement — this
is a Tashkent restaurant); English is a secondary toggle, not the other way
around. This shapes how content gets added:

- **The HTML in `index.html` is authored in Russian directly** — not English
  with a translation layer bolted on. This avoids a flash-of-English on every
  load (no JS needed to correct the default language). `<html lang="ru">` is
  the real starting state, not a JS-applied one.
- English strings live in `js/i18n.js`'s `STRINGS.en` object, keyed to match
  each translatable element's `data-i18n` (text), `data-i18n-alt` (image alt),
  or `data-i18n-aria` (aria-label) attribute. On first run the script
  snapshots the Russian original of every tagged element (`data-i18n-ru` etc.)
  so switching back to Russian is a plain lookup — there's no duplicate
  Russian copy inside `STRINGS`.
- **Menu content is bilingual at the data level**: every `name` and
  `description` in `js/menu-data.js` is `{ ru, en }`, not a plain string.
  `js/main.js`'s `renderMenu(lang)` (exposed as `window.TYB_renderMenu`) picks
  the active language — this is why the menu isn't wired through the
  `data-i18n` attribute system like static copy is; it's rendered from data,
  not present in the HTML to tag in the first place. When adding new dishes,
  fill in both languages.
- The toggle itself (`.lang-switch`, "RU / EN") lives in `.site-header__actions`
  so it's reachable at every breakpoint without duplicating it into the mobile
  drawer — that div already renders at all widths (only the Reserve/Order
  Online buttons inside it hide below 1210px, moving to the drawer).
- Preference persists via `localStorage` (`tomyumbar-lang`) and is re-applied
  on load before the intro overlay finishes, so a returning English-preferring
  visitor never sees a flash of Russian — the swap happens while the intro
  still fully covers the screen.
- `prefers-reduced-motion` users and no-JS visitors both get the Russian
  default with no toggle logic running (`<noscript>` fallback mirrors what
  the reduced-motion path already handles for the intro).

**The bug that actually happened here, worth knowing about:** Russian text
runs meaningfully longer than the English original — enough that two
separate layout assumptions calibrated against English content broke under
Russian: (1) the desktop-nav-vs-hamburger breakpoint (nav links no longer fit
on one line at 1090px, needed pushing to 1210px — right at the container's
own 1200px cap, so there's no headroom left over there without shrinking nav
gaps too), and (2) the header logo + language switch + hamburger stopped
fitting together below ~370px, made worse by a genuine pre-existing bug —
`.menu-card`'s `1fr` grid column had no `minmax(0, 1fr)` / `min-width: 0`,
so a long dish name or the wider "сум" currency label could force the whole
card past its grid track instead of wrapping. Any time copy length changes
(new language, longer real menu data, rebranding), re-check header wrapping
and card overflow at narrow widths — don't assume layout math done against
English holds for other content.

## Mobile

Every change ships checked on mobile, not just verified there exists a media
query. Before calling anything done:

- Test real interaction, not just layout — open the mobile nav, tap a link,
  confirm the overlay actually closes and the destination is visible (this
  broke once already: the nav stayed open over the scrolled content because
  nothing removed `.is-open` on link tap).
- Check the tablet zone (~721–1210px), not just phone widths. The desktop
  header nav (logo + 5 links + language switch + 2 CTAs) doesn't actually
  fit until just past the container's 1200px cap, so anything narrower needs
  the hamburger — that gap wasn't obvious from looking at 390px and 1440px
  alone and caused the nav to wrap onto two lines for every tablet size in
  between. When adding anything to the header row, or when copy length
  changes (translations, real menu data), re-check this range.
- Check the narrowest phones too (320–370px), not just 390px+. The header
  logo + language switch + hamburger stopped fitting together below ~370px
  — easy to miss if 390px (iPhone 12/13/14) is the only small width tested,
  since it's already comfortably above that line.
- Grid/flex children need explicit shrink room. `.menu-card`'s image+body
  grid had no `minmax(0, 1fr)` on the text column, so a long dish name or a
  wide price/currency label could force the card past its track width
  instead of wrapping — invisible in English, appeared with Russian's
  longer average word length. Any fixed-plus-flexible grid or flex row
  needs `min-width: 0` on the flexible side to actually be flexible.
- Interactive elements need a real tap target, not just a visible one — the
  hamburger icon's bars were 28×16px but its clickable box is padded out to
  44×44px (`.nav-toggle`) without changing how it looks. Apply the same
  padding+negative-margin pattern to any other small icon-only control.
- Confirm no horizontal scroll at 320–430px (`document.documentElement
  .scrollWidth` should equal `clientWidth`).
- When something scrolls horizontally on purpose (menu category pills), it
  needs a visual hint that it does — the edge fade on `.menu-nav-wrap` is
  the existing pattern to reuse, not a one-off.

## Motion (Round 2+, not yet implemented)

When animation work starts:
- Subtle over loud — 24px translation max, 0.6–0.8s duration, `ease-out`.
- `viewport={{ once: true }}` equivalent — reveals fire once, never replay
  on scroll-back.
- Respect `prefers-reduced-motion`.
- Animate `transform`/`opacity` only.
- Good candidates: hero video slow push-in (baked into the video file, not
  CSS), section fade/rise on scroll, sticky menu-nav active-state
  highlighting, subtle cursor accent on desktop only.

## Anti-patterns (don't do these)

- ❌ Bootstrap, Material UI, jQuery
- ❌ Generic Tailwind starter templates
- ❌ Stock photo backgrounds — this project has real brand photography, use it
- ❌ Carousels with autoplay
- ❌ Pop-ups before the user has scrolled
- ❌ More than 2 fonts on the page
- ❌ Pure black / pure white backgrounds
- ❌ Hand-editing menu content in HTML instead of `menu-data.js`
- ❌ Shortening or summarizing the menu

## Tone for code comments

- Short, one line max.
- Only when the WHY isn't obvious from the code.
- Never explain WHAT the code does.

---

*Adapted for TomYumBar from a general premium-site template.*
