<div align="center">

# Aftelo — Landing Page

**A journal that listens back.**

Marketing site for [Aftelo](#about-aftelo) — a mental-wellness journaling app whose
AI companion *Echo* reads your entries and talks them through with you.

Built with Vite · React · TypeScript · React-Three-Fiber

</div>

---

## Table of contents

- [About Aftelo](#about-aftelo)
- [Design philosophy](#design-philosophy)
- [Highlights](#highlights)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [npm scripts](#npm-scripts)
- [Project architecture](#project-architecture)
- [The design system](#the-design-system)
- [The 3D Echo orb](#the-3d-echo-orb)
- [Motion & accessibility](#motion--accessibility)
- [Performance](#performance)
- [Customization guide](#customization-guide)
- [Page sections](#page-sections)
- [Deployment](#deployment)
- [Browser support](#browser-support)
- [License](#license)

---

## About Aftelo

Aftelo is a mental-wellness journaling app for iOS and Android. You journal daily,
and an AI companion called **Echo** reads your entries and goals and talks with you —
grounded in what you've actually written, like a conversation with a wiser future
version of yourself.

The feeling the brand evokes: **calm, intimate, premium, a little futuristic** — a
"personal operating system for your inner life." Deep space with a warm glow behind
frosted glass.

This repository is the **marketing landing page**. It is a faithful extension of the
app's visual identity so the web feels like the same product. The complete brand
specification lives in [`AFTELO_APP_DESIGN.md`](./AFTELO_APP_DESIGN.md) and is treated
as the source of truth for every color, font, surface, and motion rule.

---

## Design philosophy

Three governing principles drive every decision (straight from the brand spec):

1. **Depth through layers.** Backgrounds are darkest; frosted-glass panels float
   above; soft pink/purple glows bleed through from behind. The stack is never
   flattened into solid blocks.
2. **Restrained color.** The pink→purple gradient is the *only* brand color. It
   appears on primary actions, key headings, and active states — and nowhere else.
   Everywhere else is dark grey, off-white, or transparent. Color is a rare spark,
   never a flood.
3. **Monospace clarity.** A single monospace typeface (**Overpass Mono**) is used for
   **100% of text** — the typewriter, "personal data" feel is core to the brand.

The signature moment is **Echo** itself: a refractive 3D glass orb floating in the
hero, glowing purple→pink from within. It embodies the brand thesis — your inner
light behind frosted glass — and it is the *one* bold element. Everything around it
stays deliberately quiet.

---

## Highlights

- 🪐 **Interactive 3D hero** — a real-time WebGL glass orb (transmission material)
  that drifts and tilts toward the cursor, lazy-loaded so it never blocks first paint.
- 🧊 **A single reusable glass system** — every card, panel, and the nav share one
  frosted-glass treatment with backdrop blur, low-opacity fill, and hairline borders.
- 📱 **Recreated app UI** — the product showcase shows the journal and Echo chat
  screens rebuilt in HTML/CSS inside floating, parallax-tilting phones (crisp at any
  size, no screenshots).
- 🎞️ **Orchestrated motion** — fade-and-slide reveals on scroll, a staggered hero
  load sequence, and count-up stats — all calm ease-out, no bounce.
- ♿ **Accessible by default** — full `prefers-reduced-motion` support (including
  pausing the 3D loop), visible keyboard focus, and semantic HTML.
- 📐 **Fully responsive** — from a 1440px desktop split layout down to a 390px phone.
- 🧱 **Clean, layered architecture** — content, design system, and sections are
  separated so dependencies only point inward.

---

## Tech stack

| Concern        | Choice                                             |
| -------------- | -------------------------------------------------- |
| Build tool     | [Vite 5](https://vitejs.dev/)                      |
| UI library     | [React 18](https://react.dev/)                     |
| Language       | [TypeScript 5](https://www.typescriptlang.org/)    |
| 3D / WebGL     | [react-three-fiber](https://r3f.docs.pmnd.rs/) + [drei](https://github.com/pmndrs/drei) + [three](https://threejs.org/) |
| Styling        | Plain CSS with a custom-property token layer (no UI framework) |
| Font           | [Overpass Mono](https://fonts.google.com/specimen/Overpass+Mono) via Google Fonts |

> No CSS framework is used on purpose: a hand-built token layer guarantees every
> value traces back to the brand spec, with nothing off-brand sneaking in.

---

## Getting started

**Prerequisites:** [Node.js](https://nodejs.org/) 18+ and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (hot reload)
npm run dev
# → http://localhost:5173

# 3. Build for production
npm run build
# → outputs to /dist

# 4. Preview the production build locally
npm run preview
# → http://localhost:4173
```

---

## npm scripts

| Script            | What it does                                            |
| ----------------- | ------------------------------------------------------- |
| `npm run dev`     | Start the Vite dev server with hot module replacement.  |
| `npm run build`   | Type-check (`tsc -b`) then build a production bundle.    |
| `npm run preview` | Serve the built `/dist` locally to verify the bundle.   |

---

## Project architecture

The codebase follows a **clean, layered architecture**: dependencies point inward.
Content knows nothing about React, primitives know nothing about sections, sections
know nothing about each other, and `App` only wires things together.

```
content (data)  →  primitives (design system)  →  sections (features)  →  App
                ↘  hooks (motion)  ↗
```

```
aftelo-landing/
├── AFTELO_APP_DESIGN.md         # The brand specification (source of truth)
├── index.html                   # HTML shell, font preconnect, meta
├── package.json
├── vite.config.ts               # Vite + React plugin + "@/" path alias
├── tsconfig.json
└── src/
    ├── main.tsx                 # Entry — mounts <App> into #root
    ├── App.tsx                  # Composition root — orders sections + chrome
    │
    ├── content/
    │   └── site.ts              # ALL copy + structured data (the data layer)
    │
    ├── styles/
    │   ├── tokens.css           # The brand: color, type, glass, motion, spacing
    │   └── global.css           # Resets, base type, reduced-motion floor
    │
    ├── hooks/                   # Reusable motion primitives
    │   ├── useReducedMotion.ts  # Tracks prefers-reduced-motion, reactively
    │   ├── useScrollReveal.ts   # IntersectionObserver fade-in trigger
    │   ├── useCountUp.ts        # Animated 0 → value for stats
    │   └── usePointerParallax.ts# Smoothed pointer position for parallax/orb
    │
    ├── components/
    │   ├── primitives/          # The design system (presentational atoms)
    │   │   ├── GlassPanel.tsx       # The core frosted-glass surface
    │   │   ├── GradientText.tsx     # Brand-gradient-clipped text
    │   │   ├── Button.tsx           # solid / outline / inline CTA variants
    │   │   ├── IconBadge.tsx        # Small gradient icon square
    │   │   ├── Icon.tsx             # Inline line-icon set
    │   │   ├── Eyebrow.tsx          # Uppercase section label with tick
    │   │   ├── Reveal.tsx           # Scroll-reveal wrapper (+ stagger)
    │   │   └── SectionHeading.tsx   # Eyebrow + title + sub group
    │   │
    │   ├── layout/              # Page chrome
    │   │   ├── Background.tsx       # The "void with glow" backdrop
    │   │   ├── Nav.tsx              # Pinned glass nav (+ mobile menu)
    │   │   ├── Footer.tsx           # Understated footer
    │   │   └── BrandMark.tsx        # The Aftelo logo mark (SVG)
    │   │
    │   ├── three/               # The 3D signature
    │   │   ├── EchoScene.tsx        # Canvas + lighting (Lightformers)
    │   │   └── EchoOrb.tsx          # The refractive glass orb + inner motes
    │   │
    │   └── app-ui/              # In-app UI recreated for the showcase
    │       ├── PhoneFrame.tsx       # Device shell
    │       └── screens.tsx          # Journal + Echo chat screens
    │
    └── sections/                # The page, top to bottom
        ├── Hero.tsx                 # Headline + orb + CTAs
        ├── HowItWorks.tsx           # The 3-step sequence
        ├── Features.tsx             # 6 feature cards
        ├── Showcase.tsx             # Floating phones with app UI
        ├── EchoStory.tsx            # The intimate "Meet Echo" beat
        ├── Stats.tsx                # Count-up proof numbers
        └── FinalCTA.tsx             # Closing call to action
```

Each component keeps its styles in a sibling `.css` file with namespaced class names
(e.g. `.feature-card__title`) to avoid selector-specificity collisions.

### Why this structure

- **Content is data, not markup.** All marketing copy lives in `content/site.ts`,
  so wording changes never require touching a component, and the copy can be reviewed
  in one place.
- **The design system is reusable and self-documenting.** Sections compose
  primitives (`GlassPanel`, `Button`, `GradientText`…) instead of re-implementing the
  brand look, so the visual language stays consistent.
- **Sections are independent.** Each pulls its own copy and styling and is unaware of
  its neighbors, so the page can be reordered or trimmed by editing only `App.tsx`.

---

## The design system

Everything visual derives from one token file: [`src/styles/tokens.css`](./src/styles/tokens.css).

### Color

| Token                | Value                         | Use                              |
| -------------------- | ----------------------------- | -------------------------------- |
| `--gradient-2`       | `#C953FF`                     | Brand purple (gradient start)    |
| `--gradient-1`       | `#FF005E`                     | Brand pink (gradient end)        |
| `--brand-gradient`   | `linear-gradient(135deg, …)`  | The one brand gradient, purple→pink |
| `--scaffold-dark`    | `#07070C`                     | The void — base page color       |
| `--surface-deep`     | `#12121C`                     | Solid panels when blur isn't viable |
| `--text-primary`     | `#F3F3F8`                     | Headings + primary text (never pure white) |
| `--text-secondary`   | `#9B9BA8`                     | Supporting copy                  |
| `--text-muted`       | `#6E6E7A`                     | Captions, hints, footnotes       |

The gradient always runs **purple → pink at 135°** and is reserved for small
elements (buttons, ≤48px badges, thin accents, clipped text) — never as a large
solid fill.

### Glass surfaces

The `GlassPanel` primitive provides three presets — `card`, `nav`, and `light` —
each combining backdrop blur, a low-opacity white fill, and a hairline border.
**Glass is never nested** (one blur layer max); where a solid is genuinely needed,
`--surface-deep` is used instead.

### Typography

One typeface, **Overpass Mono**, for all text. Four weights only: `500` (body),
`600` (medium), `700` (titles/buttons), `800` (hero). A responsive `clamp()` type
scale runs from 11px micro-labels up to a 72px hero headline.

### Signature details

- **Asymmetric button corners** (top-left 10px, bottom-right 14px) on primary CTAs.
- **Gradient-clipped text** for hero keywords, eyebrows, stats, and accents.
- **Soft, manual shadows** — a black card shadow everywhere, a colored glow only on
  hovered/featured elements.

---

## The 3D Echo orb

The hero centerpiece (`components/three/`) is *Echo* made visible — a frosted glass
sphere drifting in the void:

- An **inner emissive core** provides the warm purple→pink glow.
- A **`MeshTransmissionMaterial` shell** refracts the background like real glass.
- A few **drifting motes** float inside, like thoughts.
- A **faint halo ring** echoes the logo mark.

It rotates slowly, breathes, and tilts toward the pointer (smoothed via
`usePointerParallax`). The lighting environment is built in-scene with `Lightformer`
cards, so there is **no external HDR download at runtime**. The whole scene is
**lazy-loaded** and respects reduced motion (the render loop switches to on-demand).

> The orb is tuned for GPU rendering. On a software/headless renderer it can look
> grainier and cooler than intended; on real hardware the transmission is smooth and
> reads purple→pink.

---

## Motion & accessibility

Motion mirrors the app: calm, smooth, deliberate, **never bouncy**.

- **Entrances** fade in and slide up ~16px as they scroll into view, with grouped
  items staggered by 60ms (capped so the last item never lags far behind).
- **Stats** count up from zero on first view.
- **Hovers** lift cards/buttons subtly and may add a colored glow.
- **Timing tokens** (`--t-micro` … `--t-celebrate`) and easing curves
  (`ease-out-cubic`, `ease-in-out`) are centralized in `tokens.css`.

Accessibility floor:

- `prefers-reduced-motion: reduce` disables slides/scales, pauses the 3D loop, and
  reveals content immediately.
- Keyboard focus is always visible (`:focus-visible` outline in brand purple).
- Semantic landmarks (`header`, `nav`, `main`, `footer`), labelled controls, and
  `aria-hidden` on decorative layers.

---

## Performance

- **Code-split 3D.** The Three.js scene is a lazy chunk, so the initial JS payload is
  ~53 KB gzipped; WebGL loads only after the hero copy paints.
- **Capped device pixel ratio** on the canvas and a single light rig keep the scene
  cheap.
- **No blur is ever animated** (expensive); glass blur is static.
- **Static-friendly output** — `npm run build` emits a plain `/dist` you can host
  anywhere.

---

## Customization guide

| You want to change…       | Edit…                                                        |
| ------------------------- | ----------------------------------------------------------- |
| Any wording / copy        | `src/content/site.ts`                                       |
| Brand colors / spacing / radii / motion timing | `src/styles/tokens.css`                |
| Nav links or footer menus | `src/content/site.ts` (`nav`, `footer`)                     |
| Feature cards or stats    | `src/content/site.ts` (`features.items`, `stats.items`)     |
| Section order / which sections appear | `src/App.tsx`                                   |
| The orb (size, glow, colors) | `src/components/three/EchoOrb.tsx` + `EchoScene.tsx`     |
| The in-app mockup screens | `src/components/app-ui/screens.tsx`                         |
| App Store / Play links    | the `href`s in `src/content/site.ts` (currently `#download`)|

Because copy and data are isolated in `content/site.ts`, most everyday edits need no
component changes at all.

---

## Page sections

| # | Section        | Purpose                                                        |
| - | -------------- | ------------------------------------------------------------- |
| 1 | **Hero**       | The thesis: monospace headline + the live Echo orb + CTAs.    |
| 2 | **How it works** | The three-step journaling loop (a genuine ordered sequence).|
| 3 | **Features**   | Six glass cards covering what's inside the app.               |
| 4 | **Showcase**   | The real app UI in floating, parallax-tilting phones.        |
| 5 | **Meet Echo**  | The intimate beat — Echo as your future self, with a pull-quote. |
| 6 | **Numbers**    | Count-up proof stats on a single glass panel.                |
| 7 | **Final CTA**  | One glowing glass panel with the primary download button.    |
|   | **Footer**     | Understated links + legal, hairline glass divider.           |

---

## Deployment

The build output in `/dist` is fully static and works on any static host.

**Vercel**
```bash
npm run build      # Build command
# Output directory: dist
```

**Netlify**
```
Build command:    npm run build
Publish directory: dist
```

**GitHub Pages / any static host** — upload the contents of `dist/` after building.

> If you deploy under a sub-path (e.g. `example.com/aftelo/`), set Vite's
> [`base`](https://vitejs.dev/config/shared-options.html#base) option in
> `vite.config.ts` accordingly.

---

## Browser support

Targets modern evergreen browsers (Chrome, Edge, Firefox, Safari). The frosted-glass
effect uses `backdrop-filter`; where it's unsupported, panels fall back to a solid
`--surface-deep` fill so content stays legible. The 3D orb requires WebGL; without
it, the hero still renders fully — only the orb is absent.

---

## License

Proprietary — © 2026 Aftelo. All rights reserved.
