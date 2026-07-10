# Pixel by Bovio — Architectural Decisions Log

> This document records every significant decision made during the architectural phase, along with the reasoning behind it. Decisions are numbered sequentially. Once recorded, they should not be quietly reversed — open a new entry instead.

---

## Decision Log

---

### ADR-001: Next.js 15 with App Router

**Date:** Pre-implementation  
**Status:** Accepted

**Context:**  
The site needs maximum SEO performance, fast page loads, and a production-grade architecture that a future team member could maintain. Several framework options were evaluated.

**Decision:**  
Use Next.js 15 with the App Router (not Pages Router).

**Reasoning:**

- App Router enables React Server Components by default, eliminating unnecessary JavaScript for static sections
- Built-in Metadata API handles per-page SEO without third-party packages
- `next/image` provides automatic WebP/AVIF conversion and lazy loading with zero configuration
- `next/font` eliminates CLS for font loading
- Vercel deployment is zero-configuration
- TypeScript support is first-class

**Trade-offs:**

- App Router has a steeper learning curve than Pages Router
- Some third-party libraries have incomplete RSC compatibility — evaluated before adoption

**Rejected alternatives:**

- Astro: Less React ecosystem familiarity; no team precedent
- Remix: Good option but less Vercel-native; smaller community for this use case
- Vite + React SPA: No SSR, poor baseline SEO

---

### ADR-002: TypeScript Strict Mode

**Date:** Pre-implementation  
**Status:** Accepted

**Context:**  
TypeScript can be configured at varying strictness levels. Looser settings are faster to write initially but create maintenance debt.

**Decision:**  
TypeScript `strict: true` is non-negotiable.

**Reasoning:**

- The project is designed to be maintained for years
- Strict mode catches bugs at compile time that would otherwise surface in production
- It forces proper interface definitions for all data (which directly enables CMS migration later)
- The `noUncheckedIndexedAccess` flag prevents the most common array access bugs

**Trade-offs:**

- Slightly slower initial development
- Requires explicit handling of `null` and `undefined` cases

---

### ADR-003: Tailwind CSS v4 (Not CSS Modules, Not styled-components)

**Date:** Pre-implementation  
**Status:** Accepted

**Context:**  
Multiple styling strategies are viable. CSS Modules, CSS-in-JS, Tailwind, or plain CSS all have valid use cases.

**Decision:**  
Tailwind CSS v4 as the sole styling mechanism, with design tokens expressed as CSS custom properties in `globals.css`.

**Reasoning:**

- Zero runtime overhead — all CSS is generated at build time
- Tailwind v4's native CSS variable support aligns perfectly with the token system defined in `DesignSystem.md`
- Consistent spacing/typography enforcement — using arbitrary values triggers ESLint
- `prettier-plugin-tailwindcss` enforces class order automatically
- No context switching between CSS files and JSX

**Trade-offs:**

- Long `className` strings for complex components — mitigated by `cn()` utility and component extraction
- Tailwind v4 is newer; some ecosystem plugins may lag

**Rejected alternatives:**

- CSS Modules: Good isolation but verbose; no built-in token enforcement
- styled-components / Emotion: Runtime overhead; poor RSC compatibility
- Zero-runtime CSS-in-JS (Linaria): Complex setup, smaller community

---

### ADR-004: Framer Motion (Not CSS Animations Alone)

**Date:** Pre-implementation  
**Status:** Accepted

**Context:**  
The motion system described in `MotionLanguage.md` requires scroll-triggered animations, staggered children, and layout animations (FAQ accordion). These are technically possible with pure CSS + Intersection Observer, but maintenance complexity is significantly higher.

**Decision:**  
Framer Motion as the animation library. CSS transitions are used only for simple hover states (defined in Tailwind).

**Reasoning:**

- `whileInView` provides scroll-triggered animations with built-in once/repeat control
- `AnimatePresence` handles mount/unmount animations (FAQ, modal)
- `useReducedMotion` hook enables `prefers-reduced-motion` support with one line
- `motion.div` with `layout` prop handles FAQ accordion height animation without `height: auto` hacks
- Variants system enables composable, consistent animation definitions
- Bundle size is acceptable given the animation requirements (~45KB gzipped for core)

**Trade-offs:**

- Client Components required wherever `motion.*` is used
- Additional ~45KB to the JS bundle
- Animations must be carefully isolated to avoid unnecessary hydration

**Rejected alternatives:**

- GSAP: More powerful but larger; licensing for commercial use
- Auto-animate: Less control over timing/easing
- Pure CSS: Insufficient for scroll-triggered stagger and `height: auto` animations

---

### ADR-005: Static Data in `constants/` (No Database at Launch)

**Date:** Pre-implementation  
**Status:** Accepted

**Context:**  
The site has no dynamic content at launch. Services, projects, FAQs, and navigation are all known at build time.

**Decision:**  
All content is stored as typed TypeScript constants in `constants/`. No database, no CMS, no API at launch.

**Reasoning:**

- Eliminates an entire class of infrastructure complexity
- 100% static output means perfect CDN caching
- TypeScript interfaces defined in `types/` match what a future CMS would return
- Migrating to a CMS later requires only: (1) add CMS client, (2) add fetch functions with same return types, (3) replace constants imports — no component changes
- Zero cost to operate

**Trade-offs:**

- Content updates require a code deployment
- Non-technical team members cannot edit content

**CMS migration path:**
When content editing is needed, the recommended path is **Sanity**. Its React-native SDK, GROQ queries, and Next.js preview mode integration are the best fit for this stack.

---

### ADR-006: Geist as the Single Typeface

**Date:** Pre-implementation  
**Status:** Accepted

**Context:**  
The PRD specifies Geist or Inter. Both are excellent choices. A decision was needed.

**Decision:**  
Geist (Vercel's typeface), loaded via `next/font/local`.

**Reasoning:**

- Geist is a variable font — one file covers all weights with perfect rendering
- `next/font` with Geist eliminates CLS entirely (font dimensions are known at build time)
- The weight variation from 400 to 800 creates all the hierarchy defined in the type scale
- Its neutral-premium character aligns with the brand personality (Apple × Linear × Vercel)
- No external font requests — no privacy/CSP concerns

**Trade-offs:**

- Less universal recognition than Inter among designers
- If the brand ever needs a display or serif typeface for contrast, this will need revisiting

---

### ADR-007: Server Components as Default, Client Components at Leaf Nodes

**Date:** Pre-implementation  
**Status:** Accepted

**Context:**  
Next.js 15 makes Server Components the default but allows `"use client"` anywhere. The temptation is to mark entire sections as client components for convenience.

**Decision:**  
Server Components are the default. Client Components (`"use client"`) are added only at the **leaf node** — the smallest possible component that actually needs interactivity.

**Pattern:**

```
ServicesSection (Server) → ServiceCard (Server) → CardHover (Client, just wraps motion.div)
FAQSection (Server) → FAQList (Server) → FAQItem (Client, has open/close state)
```

**Reasoning:**

- Minimizes JavaScript shipped to browser
- Server Components enable direct data access without client-side fetch
- Preserves static rendering for the majority of the page
- Framer Motion `motion.*` elements are Client Components — this is unavoidable but containable

**Trade-offs:**

- Requires discipline — easy to accidentally add `"use client"` too high in the tree
- Some patterns (context providers) require Client wrappers around Server content

---

### ADR-008: WhatsApp as Primary CTA (Not Email Form)

**Date:** Pre-implementation  
**Status:** Accepted

**Context:**  
The primary conversion mechanism could be an email contact form, a booking system, or a direct communication channel.

**Decision:**  
WhatsApp is the primary and dominant conversion channel. Contact form is secondary and optional.

**Reasoning:**

- Target audience (Latin American business owners) has extremely high WhatsApp adoption
- WhatsApp conversations are faster, more personal, and have higher response rates than email for service inquiries
- No server infrastructure required at launch (no form backend, no email service)
- Prefilled messages reduce friction to near zero
- Conversations happen in a context (WhatsApp) where clients feel comfortable

**Trade-offs:**

- Requires a dedicated business WhatsApp number
- No automatic lead tracking without additional tooling
- Phone number must be stored securely (environment variable)

**Future consideration:**  
If email form is added (e.g., for clients who prefer it), use a Server Action + Resend API. Never use `mailto:` links for professional contact forms.

---

### ADR-009: No Global State Management Library

**Date:** Pre-implementation  
**Status:** Accepted

**Context:**  
Modern React projects often install Zustand, Jotai, or Redux. The question is whether this site needs them.

**Decision:**  
No global state management library. State lives in components via `useState` and `useReducer` where needed.

**Reasoning:**

- The site is predominantly static
- Interactive state is local: FAQ accordion (open item), mobile menu (open/closed), modal (open/closed)
- None of this state needs to be shared across distant components
- Adding a global store would introduce unnecessary complexity and bundle weight

**Revisit if:**

- A client portal is added
- Multi-step forms with shared state are needed
- Server state synchronization (SWR/React Query) becomes necessary

---

### ADR-010: Vercel Analytics + Speed Insights (Not Google Analytics at Launch)

**Date:** Pre-implementation  
**Status:** Accepted

**Context:**  
Analytics is needed to understand visitor behavior. Multiple options exist.

**Decision:**  
Use Vercel Analytics and Speed Insights at launch. Google Analytics is prepared but not activated.

**Reasoning:**

- Vercel Analytics requires no cookie banner in most jurisdictions (privacy-first architecture)
- Speed Insights provides real-user Core Web Vitals data — directly actionable
- Both are injected via official Next.js components with zero configuration
- Google Analytics adds ~50KB and requires GDPR cookie consent implementation

**Future:**  
When marketing campaigns begin and attribution data is needed, add Google Tag Manager via environment variable. The infrastructure is prepared in `lib/analytics.ts`.

---

### ADR-011: pnpm as Package Manager

**Date:** Pre-implementation  
**Status:** Accepted

**Context:**  
npm, yarn, and pnpm are all viable. A choice must be made and enforced.

**Decision:**  
pnpm exclusively. A `.npmrc` or `package.json` `engines` field can enforce this.

**Reasoning:**

- Strict hoisting prevents phantom dependency bugs
- Significantly faster installs via content-addressable storage
- Vercel supports pnpm natively via `packageManager` field in `package.json`
- Smaller `node_modules` footprint on disk

---

### ADR-012: Conceptual Projects Instead of Fake Testimonials

**Date:** Pre-implementation  
**Status:** Accepted

**Context:**  
At launch, there are no real client projects. The PRD explicitly forbids inventing fake companies or fake testimonials.

**Decision:**  
Create 4–6 clearly labeled "design concepts" — hypothetical projects for real industry types (coffee shop, dental clinic, law firm, etc.) — presented honestly as concepts, not client work.

**Reasoning:**

- Demonstrates design capability without dishonesty
- Clearly labeled "Design Concept" prevents any perception of deception
- Industry diversity shows range without needing actual clients
- As real projects are completed, concepts are replaced

**Labels required:**

- "Design Concept" badge on all project cards
- Project description copy explicitly frames it as a concept
- No fake company names presented as real clients

---

### ADR-013: Mobile-First Responsive Strategy

**Date:** Pre-implementation  
**Status:** Accepted

**Context:**  
The PRD explicitly mandates mobile-first design. The target audience (Latin American business owners) has high mobile usage rates.

**Decision:**  
All CSS is written mobile-first. Desktop styles are layered with `sm:`, `md:`, `lg:` prefixes. No desktop-first breakpoints.

**Tailwind Breakpoints Used:**

```
default: 320px+  (mobile)
sm: 640px+       (tablet)
lg: 1024px+      (desktop)
xl: 1440px+      (large desktop)
2xl: 1920px+     (ultra-wide)
```

Note: The standard Tailwind `md: 768px` breakpoint is de-emphasized. Most layouts transition directly from mobile to desktop (`sm:` or `lg:`), avoiding awkward intermediate states.

---

## Open Questions — RESOLVED

| #      | Question                        | Resolution                                                                                                                                                        |
| ------ | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| OQ-001 | WhatsApp business number?       | **+52 33 2939 1532** — stored as `5233293915329` in env (wa.me format, no `+` or spaces)                                                                          |
| OQ-002 | Domain?                         | **pixelstudiobybovio.lat**                                                                                                                                        |
| OQ-003 | Social URLs?                    | Instagram and TikTok — URLs to be confirmed and added later. Placeholders in `constants/site.ts`.                                                                 |
| OQ-004 | Contact form?                   | **No form.** WhatsApp-only contact. The `/contact` page shows WhatsApp + email only.                                                                              |
| OQ-005 | "Book a Discovery Call" button? | **Hidden at launch.** Feature flag `enableBookingCTA: false` in `constants/site.ts`.                                                                              |
| OQ-006 | Projects at launch?             | **Zero projects.** Real client work will be added over time. Work section shows a designed empty state until first project is added. ADR-012 updated accordingly. |

---

## Superseded Decisions

_(None at time of writing. When a decision is reversed or replaced, the original entry is retained here with a note pointing to the superseding ADR.)_
