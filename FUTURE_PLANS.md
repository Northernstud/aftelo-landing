# Future Plans

A running list of things to add to the Aftelo landing page once the supporting
assets, links, and decisions are ready. Nothing here is built yet — it's the
backlog. Items are grouped by theme and roughly ordered by priority within each.

> When an item ships, move it to a short "Done" note at the bottom (or delete it)
> and update [`README.md`](./README.md) if it changes how the site is used.

---

## 🔗 Launch blockers (do these before going live)

- [ ] **Real store links.** Replace the placeholder `#download` / `#` hrefs in
      `src/content/site.ts` with the actual App Store and Google Play URLs.
      - Consider splitting the single "Download" CTA into two store badges, or a
        smart link that detects the visitor's OS (iOS → App Store, Android → Play,
        desktop → a "scan to download" QR / "we'll text you a link" form).
- [ ] **Real metrics.** The numbers in the Stats section
      (`stats.items` in `site.ts`) are illustrative. Swap in verified figures, or
      soften the section to avoid implying precise data we can't back up.
- [ ] **Legal pages.** Footer links to Privacy, Security, Your data, etc. currently
      point to `#`. Wire them to real pages or remove until they exist.
- [ ] **Favicon + social/OG images.** Add a favicon (the BrandMark works well) and
      Open Graph / Twitter card meta + image so shared links look right.
- [ ] **Domain, analytics, and consent.** Decide on hosting/domain, add a
      privacy-respecting analytics tool, and a cookie/consent banner if required.

---

## 📸 Documentation & assets

- [ ] **Screenshots / GIFs in the README.** Regenerate desktop + mobile captures and
      embed them at the top of `README.md`. A short GIF of the hero orb reacting to
      the cursor would sell the 3D nicely.
- [ ] **`CONTRIBUTING.md`.** A short guide: branch naming, how the layered
      architecture works, the "all copy lives in `content/site.ts`" rule, and the
      brand do/don't list (no off-brand color, no nested glass, no bounce motion).
- [ ] **Component notes.** Optional lightweight Storybook (or a simple `/kitchen-sink`
      route) showcasing the primitives — handy as the design system grows.

---

## ✨ Content & sections

- [ ] **Testimonials / social proof.** Real user quotes in glass cards (carousel or
      a quiet 2–3 column grid), styled like the existing pull-quote.
- [ ] **FAQ section.** Accordion answering privacy, pricing, "is it therapy?", data
      ownership, offline use, etc. (use `--surface-deep` for the expanded panels, not
      nested glass).
- [ ] **Pricing / plans.** If Aftelo monetizes, a restrained pricing section — glass
      tiles, one highlighted plan with the active-glow shadow.
- [ ] **"The Echo difference" deep-dive.** A longer scroll-driven explainer of how
      Echo grounds replies in your own entries (could reuse the phone mockups).
- [ ] **Blog / changelog link.** Once there's a place to write, link it from the nav
      and footer.

---

## 🎞️ Interaction & polish

- [ ] **Scroll-driven hero orb.** Let the orb subtly scale/recede or shift its glow
      as the user scrolls past the hero (kept calm — no jarring motion).
- [ ] **Phone screen transitions.** In the Showcase, cross-fade the in-app screens
      between a couple of states (journal → Echo reply) on view or hover.
- [ ] **Animated gradient accents.** A very slow gradient drift on key headings —
      only if it stays subtle enough to honor the "calm" brand rule.
- [ ] **Section-to-section glow continuity.** Tune the ambient glow positions so each
      section keeps one soft bloom as you scroll (verify on tall viewports).

---

## ⚙️ Engineering & quality

- [ ] **SEO pass.** Per-section semantic review, descriptive `alt`/`aria` text, a
      `sitemap.xml`, `robots.txt`, and structured data (`SoftwareApplication`).
- [ ] **Performance budget.** Lighthouse run; lazy-load below-the-fold images if any
      are added; consider `manualChunks` to split the three.js vendor chunk.
- [ ] **Accessibility audit.** Screen-reader pass, color-contrast check on muted text,
      focus-order verification, and a real reduced-motion walkthrough.
- [ ] **CI.** GitHub Action to type-check + build on every PR; optional Playwright
      visual-regression snapshots (the screenshot tooling was prototyped already).
- [ ] **i18n readiness.** Since all copy is centralized in `content/site.ts`,
      extracting strings into locale files later is low-effort — plan for it if
      Aftelo goes multi-language.
- [ ] **Error/empty states.** If forms get added (waitlist, "text me the link"),
      give them on-brand validation and success states.

---

## 💡 Ideas / maybe-later

- [ ] Waitlist or beta sign-up flow (if launch is staged).
- [ ] Dark/light is N/A (brand is dark-only) — but a high-contrast mode could help.
- [ ] A subtle ambient audio toggle on the hero (off by default) — risky vs. the
      "calm" brand; only if it genuinely adds to the mood.
- [ ] Press kit / media assets page.

---

## ✅ Done

_Nothing moved here yet._
