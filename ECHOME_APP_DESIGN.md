# EchoMe — Landing Page Design Brief

This document is the complete visual identity for **EchoMe**, translated for a marketing landing page. It contains every color, font rule, surface style, spacing value, and motion principle from the product so the website feels like a seamless extension of the app.

Paste this whole file into a fresh session and build the landing page from it. **Do not invent new colors, fonts, or effects** — everything you need is here. When in doubt, choose the more restrained option.

---

## 0. What EchoMe is (so the design carries the right feeling)

EchoMe is a mental-wellness journaling app. The user journals daily, and an AI companion called **Echo** reads their entries and goals and talks with them — grounded in what they've actually written, like a conversation with a wiser future version of themselves.

The feeling the design must evoke: **calm, intimate, premium, a little futuristic.** Think "personal operating system for your inner life" — not a clinical health app, not a loud consumer app. Quiet confidence. Deep space with a warm glow behind frosted glass.

The three governing principles (apply these to every decision):

1. **Depth through layers.** Backgrounds are darkest; frosted-glass panels float above; soft pink/purple glows bleed through from behind. Never flatten this stack into solid blocks.
2. **Restrained color.** The pink→purple gradient is the *only* brand color. It appears on primary actions, key headings, and selected/active states. Everywhere else is dark grey, off-white, or transparent. Color is a rare accent, never a wash.
3. **Monospace clarity.** A fixed-width font is used for **100% of text**. The grid-like, typewriter feel reinforces the "journal / personal data" tone. This is non-negotiable and is a huge part of the brand.

---

## 1. Color System

These are the exact brand values. Use them precisely — never approximate, never introduce a color that isn't here.

### Brand accents (the only vivid colors in the entire product)

| Token | Hex | Description |
|-------|-----|-------------|
| `--gradient-1` | `#FF005E` | Vivid magenta-pink |
| `--gradient-2` | `#C953FF` | Vivid violet-purple |

**Brand gradient** — the signature gradient, used on primary buttons, key headings, icons, accents:

```
linear-gradient(135deg, #C953FF 0%, #FF005E 100%)
```

> **Direction matters: PURPLE → PINK** (gradient-2 first, gradient-1 second), running top-left → bottom-right. This is intentional. **Never reverse it.**

### Background / surface colors

| Token | Hex | Use |
|-------|-----|-----|
| `--scaffold-dark` | `#07070C` | Deepest backdrop — the "void of space." The base page color. |
| `--surface-deep` | `#12121C` | Solid panel fill when blur isn't possible (inputs, solid buttons, dropdowns). |

The page background is **not** a flat `#07070C`. It's a subtle gradient (see §3) that gives the void a faint warm tint at the corners.

### Text colors

| Token | Hex | Use |
|-------|-----|-----|
| `--text-primary` | `#F3F3F8` | Headings and primary body text (a soft off-white, never pure `#FFFFFF`). |
| `--text-secondary` | `#9B9BA8` | Subtitles, descriptions, supporting copy. |
| `--text-muted` | `#6E6E7A` | Hints, timestamps, captions, footnotes, inactive states. |

Maintain a strict three-level hierarchy: **primary → secondary → muted.** One level per semantic meaning. Do not invent in-between greys. **Never use pure white or any "grey" from a generic palette** — only these three.

### Glass helpers (frosted-panel fills and borders)

Glass surfaces are built from **white at a low opacity** over a blurred backdrop:

- **Glass fill:** white at `6%`–`8%` opacity → `rgba(255,255,255,0.06)` to `rgba(255,255,255,0.08)`
- **Glass border (hairline):** white at `14%`–`18%` opacity → `rgba(255,255,255,0.14)` to `rgba(255,255,255,0.18)`

Opacity guidance:
- **0.06–0.10** fill → background/content panels (calm, barely lifted)
- **0.25–0.35** border → interactive elements that need to feel clickable/pressable

### Glow helpers (ambient radial blooms — used sparingly)

- **Purple glow:** `#C953FF` at `~8%–28%` opacity, as a soft radial bloom
- **Pink glow:** `#FF005E` at `~18%–20%` opacity, as a soft radial bloom

These are **only** for the ambient glow circles behind the page/panels (see §3) and for soft shadows on strongly-active elements. **Never** use them as a fill color for a visible surface.

### Danger color (destructive actions / errors only)

| Hex | Use |
|-----|-----|
| `#FF6B7A` | Soft red — delete/remove buttons and error text **only.** |

Always apply it at reduced opacity (≈`0.55` for borders, `0.07–0.10` for fills, `0.85` for text). **Never** use a saturated/standard red — it breaks the dark-glass mood. On a marketing page you'll rarely need this; it's here for completeness (e.g. a form error state).

### Hard color rules

- ✗ No hard-coded colors outside this token set.
- ✗ No standard/material palette colors (no generic red, blue, green).
- ✗ No pure white (`#FFFFFF`) for text or icons — use `--text-primary`.
- ✗ No generic grey — use `--text-secondary` or `--text-muted`.
- ✗ Never put the vivid brand colors as a large full-opacity fill. They live on small elements (buttons, icon badges ≤48px, thin accents, text gradients) — never as a big solid block of pink or purple.

---

## 2. Typography

**One font for everything: a monospace typeface.** The app uses **Overpass Mono**. Use Overpass Mono on the website too (it's freely available) so the web matches the app exactly. Every single piece of text is this font — headings, body, buttons, captions, the lot. No secondary/pairing font.

If Overpass Mono is unavailable for any reason, the fallback stack is another geometric monospace, but **strongly prefer Overpass Mono** — the typewriter character of the brand depends on it.

### Type scale

The app uses small, dense type. A landing page can scale the hero up for impact, but keep body and UI text tight and monospace-precise. Suggested web scale (translated and expanded from the app's tokens):

| Role | Size (approx) | Weight |
|------|---------------|--------|
| Hero headline | 48–72px (clamp responsively) | 800 |
| Section heading | 28–40px | 700–800 |
| Sub-heading / feature title | 20–24px | 700 |
| Lead paragraph | 16–18px | 500 |
| Body copy | 14–16px | 500 |
| Button / label text | 13–14px | 700 |
| Caption / metadata | 11–12px | 500–600 |
| Micro-label (eyebrow, chips) | 10–11px, uppercase | 600 |

The app's own UI sizes for reference (keep these in mind for any embedded app-like UI): nav labels 9px, metadata 11px, body 12–14px, card titles 16px, page headers 17–22px.

### Weights — use only these four

- **500** — regular body
- **600** — medium emphasis (subtitles, secondary actions)
- **700** — titles, card headings, buttons
- **800** — hero/page titles, celebration text

Do not use 300/400 (too thin for this mono on dark) or 900.

### Line height

- Headings: tight, ~1.1–1.2
- Body copy: `1.4`–`1.5`
- Long-form paragraphs: `1.5`

### Letter spacing

- Standard text: `0` (none)
- Uppercase labels / eyebrows / chips: `0.6px` to `1.8px`
- Badge / celebration text: `1.5px` to `2.0px`

### Text color rules

- Headings / primary content → `--text-primary`
- Supporting copy → `--text-secondary`
- Captions / hints → `--text-muted`
- For brand-emphasis headings → **gradient text** (clip the brand gradient to the text). Use this for hero keywords, section eyebrows, and CTA emphasis.
- ✗ Never set normal body copy directly to the vivid pink or purple — gradient text is for short headings/labels only, never long paragraphs, never text below ~11px (it becomes unreadable).

---

## 3. Page Background ("the void with glow")

Every screen in the app sits on the same layered background. Recreate it as the page backdrop so the site feels like the app.

**Layer 1 — Background gradient.** A linear gradient from `#14101F` (top-left) through `#07070C` (center) to `#100818` (bottom-right). Deep near-black with a very subtle warm purple tint pooling at the corners.

**Layer 2 — Three ambient glow circles** (large, soft, heavily blurred radial blooms; they must not be interactive):
- **Top-right:** ~360px purple glow (`#C953FF` at ~28% opacity)
- **Bottom-left:** ~320px pink glow (`#FF005E` at ~20% opacity)
- **Mid-left:** ~200px very faint purple glow (`#C953FF` at ~8% opacity)

These glows are what make the frosted-glass panels appear to glow from behind. On a long landing page, repeat/redistribute a few of these blooms down the scroll so each section still has a faint glow behind its glass — but keep them subtle and never let two strong glows fight in one viewport.

**Layer 3 — content** sits transparently on top.

The blur/glass effect only reads if these glows are visible behind the panels. **The background is mandatory — never place glass on a flat black page.**

---

## 4. Glass Surfaces (the core visual motif)

Every card, panel, feature box, testimonial, pricing tile, nav bar, and dialog is a **frosted-glass surface.** This is *the* signature of the brand. Build one reusable "glass panel" treatment and use it everywhere.

A glass panel stacks three things, in order:

1. **Backdrop blur** — blur whatever is behind it (the glows and gradient). Blur radius ~24px (use ~32px for the nav bar, ~16–20px for very subtle panels).
2. **White fill** — white at 6–8% opacity (lower = more transparent/calm, see §1).
3. **Hairline border** — a 1px border of white at 14–18% opacity, to crisp the edge.

Plus a soft drop shadow underneath (see §7).

### Preset panels

| Preset | Radius | Blur | Fill | Border | Use |
|--------|--------|------|------|--------|-----|
| **Standard card** | 22px | 24px | white 6% | white 16% | Feature cards, content panels, info tiles |
| **Navigation bar** | 26px | 32px | white 7% | white 18% | Top nav / pinned header |
| **Dialog / overlay** | 22px | 24px | white 6% | white 16% | Modals, popovers |
| **Light panel** | 16–20px | 16–20px | white 5% | white 12% | Surfaces that barely lift from the bg |

### Glass rules

- ✗ **Never nest a glass panel inside another glass panel.** One layer of blur is the maximum — nested blurs look muddy and are expensive. Inside a glass card, use plain transparent content, not another frosted box.
- ✗ Never put a solid-color block inside a glass panel — it blocks the blur and kills the effect.
- If you genuinely need a solid surface (e.g. a dropdown menu), use `--surface-deep` (`#12121C`) directly instead of glass.

---

## 5. Gradient Text & Gradient Icons

For text or icons that should carry the brand, **clip the brand gradient** onto them (purple→pink, top-left→bottom-right).

Use gradient treatment for:
- Hero headline keyword(s) — e.g. one or two emphasized words, not the whole sentence
- Section eyebrows / category labels
- Primary CTA button labels (on outline-style buttons)
- Key icons that deserve brand emphasis
- Celebration / "wow" moments

Do **not** use gradient text for:
- Long body copy (unreadable)
- Error/warning text (use the danger color)
- Anything smaller than ~11px

Always use the **one** brand gradient (purple→pink). Never invent an alternate gradient for text.

---

## 6. Icon Badges & Buttons

### Icon badge (gradient square)

Icons that sit beside a title use a small **solid gradient square**:
- Size: 34×34px (or 48×48px for prominent/hero feature icons)
- Corner radius: 10px (14px for the large variant)
- Background: the brand gradient (purple→pink), often at ~80–85% opacity
- Icon: ~18px (24px large), colored `--text-primary` (near-white) — never black

This is the *one* place a solid brand-gradient fill is allowed, because it's small.

### Button styles

There are four button patterns. Match the context.

**A) Primary action — "glass outline" button** (the signature button):
- Transparent/`--surface-deep` fill at ~50% opacity
- 1px border of white at ~35% opacity (stronger than card borders, so it feels pressable)
- Label is **gradient text** (purple→pink), weight 700, ~13–14px
- **Signature shape: asymmetric corners** — bottom-right radius `14px`, top-left radius `10px`, other corners minimal. This asymmetry is a deliberate brand signature that makes buttons feel designed, not generic. Use it for primary CTAs.
- Padding ≈ 9px vertical / 16px horizontal

**B) Inline / secondary button** (small, header-style):
- Uniform 12px corners
- Border: pink (`#FF005E`) at ~55% opacity
- Fill: `--surface-deep` at ~35% opacity
- Icon + label in pink at ~95% opacity, weight 600, ~11px

**C) Solid gradient button** (high-emphasis CTA, e.g. "Download" / "Get started"):
- Filled with the brand gradient (purple→pink)
- Label `--text-primary`, weight 700
- Soft pink glow shadow beneath (see §7)
- Use this sparingly — it's the loudest element on the page, reserve it for the single most important CTA per section.

**D) Danger button** (rarely needed on marketing):
- Border: danger `#FF6B7A` at 35% opacity
- Fill: danger at 7% opacity
- Text: danger at 85% opacity
- Never a solid red fill.

For interactive press feel, add a subtle **scale-down on press** (~0.96) and a hover lift — see §8.

---

## 7. Elevation & Shadows

Shadows are manual and soft — no default/material elevation.

**Glass card shadow** (under every panel):
```
box-shadow: 0 14px 28px -6px rgba(0,0,0,0.45);
```

**Active/selected glow** (for hovered or featured elements — a colored bloom):
```
box-shadow: 0 0 16px rgba(255,0,94,0.35), 0 0 10px rgba(201,83,255,0.20);
```

**Gradient button glow** (under solid gradient CTAs):
```
box-shadow: 0 4px 14px rgba(255,0,94,0.40);
```

Use the colored glow shadows sparingly — on the primary CTA, on a hovered feature card, on a highlighted element. Most panels use only the soft black shadow.

---

## 8. Motion & Animation

The app's motion is calm, smooth, and deliberate — never bouncy. Mirror that on the web.

### Timing tokens (use these durations consistently)

| Token | Duration | Use |
|-------|----------|-----|
| micro | 120ms | Press feedback, icon cross-fades |
| fast | 200ms | Quick state changes, hovers |
| standard | 300ms | Most enter animations, section reveals |
| slow | 420ms | Count-up numbers, progress sweeps |
| celebrate | 650ms | Big "wow" entrance moments |
| stagger | 60ms | Delay increment between staggered items |

### Curves

- Default easing: **ease-out-cubic** (smooth deceleration) for entrances/exits
- Cross-fades / expands: **ease-in-out**
- ✗ **Never** use bounce / elastic / spring-overshoot curves — they conflict with the calm, reflective mood. This is a hard rule.

### Patterns

- **Entrance:** sections and items **fade in + slide up ~16px** on first appearance (e.g. as they scroll into view). Stagger groups of items by `60ms × index`, but cap the stagger so the last item doesn't wait more than ~360ms.
- **Press feedback:** interactive elements scale down slightly (~0.96) on press.
- **Hover:** cards/buttons lift subtly and may gain the colored glow shadow; transitions at `fast` (200ms).
- **Count-up numbers:** any stat (user counts, streaks, "7 days") animates from 0 → value on first view, over `slow` (420ms).
- **Content swaps / cross-fades:** 200–350ms fades.
- **Accessibility:** respect "reduce motion" — disable slides/scales and just show content.
- ✗ Never animate a blur radius (it's expensive and janky). Blur on glass panels is **static.**
- ✗ Avoid stacking two animated blurred surfaces in the same area.

### Loading / spinners

If you ever show a spinner, it's a thin (2px stroke) circular indicator in the brand pink (`#FF005E`). For content placeholders, use a flat left-to-right **shimmer** (a moving light gradient over a panel-shaped block, ~1400ms loop) — never a blurred shimmer.

---

## 9. Spacing & Layout

The app uses a consistent spacing rhythm. Translate it to generous, breathable web sections.

### Spacing scale (from the app)

`4 · 6 · 8 · 12 · 14 · 18 · 22` px are the in-component steps:
- 22 → major section break
- 18 → secondary break
- 14 → between related items
- 12 → header-to-body inside a card
- 8 → tight gaps in rows
- 6 → micro gaps (title→subtitle)
- 4 → minimal separation

For the **page**, scale up: large vertical breathing room between marketing sections (think 80–140px between major sections on desktop), with content max-width kept comfortable (don't let text run edge-to-edge). The app's page content padding is 22px horizontal — give the web more, but keep that snug, contained, "premium app" feel rather than a sprawling full-bleed marketing page.

### Border-radius scale

| Radius | Use |
|--------|-----|
| 8–10px | Small chips, tags, badge corners |
| 12px | Inline buttons, small containers |
| 14px | Inputs, standard buttons, snackbars |
| 16px | Small cards, cells |
| 18px | Confirm dialogs |
| 20px | Default glass panel |
| 22px | Standard card panels, dialogs |
| 26px | Navigation bar |
| 28px | Large cards / hero panels |

**Signature detail:** the asymmetric button corner (bottom-right 14px, top-left 10px) — reuse this on primary CTAs to tie back to the app.

---

## 10. Composition guidance for the landing page

You have full creative freedom on layout and copy, but stay inside the visual identity above. Some direction:

- **Hero:** the void background with glows; a large monospace headline (one or two words in gradient text); a calm sub-line in `--text-secondary`; one solid-gradient primary CTA (§6C) plus maybe a glass-outline secondary CTA (§6A). Consider a frosted-glass "app screenshot" panel floating with the card shadow.
- **Feature sections:** glass cards (§4 standard preset) with a gradient icon badge (§6), a 700-weight title, and `--text-secondary` body. Stagger them in on scroll.
- **The "Echo" story:** lean into the intimacy — Echo as your future self. Quiet, lots of negative space, a single glowing accent. Don't make it loud.
- **Numbers / proof:** count-up stats (§8) on a glass panel.
- **Final CTA:** one strong solid-gradient button on a glass panel with a soft pink glow.
- **Footer:** muted text (`--text-muted`), hairline glass divider, monospace, understated.

### Tone of the whole thing
Premium, calm, futuristic, personal. Lots of dark space. Glass that glows. Pink/purple used like a spark, never a flood. Every piece of text in mono. If a section feels loud or busy, pull color and motion *out* until it feels quiet again — restraint is the brand.

---

## 11. Quick checklist (before shipping any section)

- [ ] Background is the layered void + soft glows, never flat black
- [ ] Every surface is frosted glass (or solid `--surface-deep` when blur isn't viable) — never nested glass
- [ ] All text is the monospace font (Overpass Mono)
- [ ] Only the token colors are used — no off-brand hex, no pure white, no generic grey
- [ ] Brand gradient is purple→pink, top-left→bottom-right, never reversed
- [ ] Vivid colors only on small elements (buttons, badges ≤48px, thin accents, gradient text) — never a big solid fill
- [ ] Text hierarchy is primary → secondary → muted, one level per meaning
- [ ] Primary CTAs use the asymmetric corner signature
- [ ] Shadows are soft/manual (black card shadow; colored glow only on active/featured items)
- [ ] Motion is fade+slide, calm easing, no bounce; blur is never animated
- [ ] Stats count up; sections reveal on scroll with a slight stagger
- [ ] Reduce-motion is respected
- [ ] The section feels calm, premium, and restrained — when unsure, remove color/motion
