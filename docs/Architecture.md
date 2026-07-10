# Pixel by Bovio — Architecture Document

> **Status:** Pre-implementation specification. Authoritative source for all structural decisions.
> **Last updated:** See git history.

---

## 1. Project Summary

Pixel by Bovio is a premium Digital Design Studio website whose single objective is **lead generation via WhatsApp**. It is not a portfolio, agency template, or freelancer site. The site must communicate quality, craftsmanship, and trust within the first three seconds of load. Every architectural decision is subordinate to that goal.

---

## 2. Technology Stack

| Concern         | Choice                            | Rationale                                              |
| --------------- | --------------------------------- | ------------------------------------------------------ |
| Framework       | Next.js 15                        | App Router, RSC, built-in SEO, Vercel-native           |
| Language        | TypeScript (strict)               | Type safety, self-documenting, refactor confidence     |
| Styling         | Tailwind CSS v4                   | Utility-first, token-native, no runtime overhead       |
| Animations      | Framer Motion                     | Declarative, GPU-optimized, `useReducedMotion` support |
| Icons           | Lucide React                      | Tree-shakeable, single stroke system, consistent       |
| Font            | Geist (next/font)                 | Zero CLS, modern, neutral, Vercel-official             |
| Images          | next/image                        | Automatic WebP/AVIF, lazy load, CLS prevention         |
| Metadata        | Next.js Metadata API              | Per-page OG, Twitter, canonical, structured data       |
| Deployment      | Vercel                            | Zero-config, Edge Network, preview URLs                |
| Analytics       | Vercel Analytics + Speed Insights | Non-invasive, privacy-first, no cookie banner          |
| Package Manager | pnpm                              | Fast, strict, disk-efficient                           |
| Linting         | ESLint (next/core-web-vitals)     | Catches accessibility and performance issues           |
| Formatting      | Prettier                          | Consistent style, enforced on commit                   |

---

## 3. Architecture Pattern

**Next.js App Router with React Server Components as the default.**

The site is **predominantly static**. Content lives in `constants/` as typed data objects. There is no database, no external API at launch, and no authentication. The architecture is deliberately simple — complexity is introduced only when the feature genuinely requires it.

### Rendering Strategy

| Page / Feature            | Strategy                   | Reason                                         |
| ------------------------- | -------------------------- | ---------------------------------------------- |
| All pages                 | Static (SSG at build time) | No dynamic data, maximum performance           |
| Project detail modal/page | Static                     | Project data is static                         |
| Contact form (future)     | Server Action              | Progressive enhancement, no client JS required |
| Sitemap / robots          | Dynamic route              | Auto-generated from constants                  |

### Server vs. Client Component Policy

**Server Components (default):**

- All page files (`page.tsx`)
- All layout files (`layout.tsx`)
- All section components that only render markup
- Footer, Navigation shell
- SEO / metadata helpers

**Client Components (`"use client"` required):**

- `FloatingNavbar` — scroll-aware background transition
- `MobileMenu` — open/close state
- `FAQAccordion` — open/close state
- `AnimationWrapper` (Framer Motion entry animations) — all `motion.*` elements
- `ProjectModal` — open/close state
- `WhatsAppFloatingButton` — may track scroll position for show/hide
- `CounterAnimation` — if stat counters are included
- Any component using `useEffect`, `useState`, `useReducedMotion`

**Rule:** A Server Component can import and render a Client Component. A Client Component cannot import a Server Component. Place Client Components as **leaf nodes** in the tree to minimize the JS bundle shipped to the browser.

---

## 4. Folder Structure

```
pixel-by-bovio/
├── app/                          # Next.js App Router root
│   ├── layout.tsx                # Root layout: font, metadata, providers
│   ├── page.tsx                  # Homepage (assembles section components)
│   ├── globals.css               # Tailwind base + CSS custom properties (tokens)
│   ├── services/
│   │   └── page.tsx
│   ├── work/
│   │   ├── page.tsx              # Work gallery
│   │   └── [slug]/
│   │       └── page.tsx          # Project detail page
│   ├── process/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── not-found.tsx             # Custom 404
│   ├── sitemap.ts                # Auto-generated sitemap
│   └── robots.ts                 # robots.txt generation
│
├── components/
│   ├── ui/                       # Primitive, brand-agnostic atoms
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── Heading.tsx
│   │   ├── Input.tsx
│   │   ├── Textarea.tsx
│   │   ├── IconWrapper.tsx
│   │   └── SkeletonLoader.tsx
│   ├── layout/                   # Page-structure components
│   │   ├── Container.tsx         # Max-width wrapper with horizontal padding
│   │   ├── Section.tsx           # Section wrapper: padding, bg alternation
│   │   └── SectionHeader.tsx     # Label + heading + subheading block
│   ├── navigation/
│   │   ├── Navbar.tsx            # Server shell
│   │   ├── FloatingNavbar.tsx    # Client: scroll-aware glass effect
│   │   ├── NavLink.tsx
│   │   └── MobileMenu.tsx        # Client: hamburger + drawer
│   ├── sections/                 # One file per homepage section
│   │   ├── HeroSection.tsx
│   │   ├── TrustBadgesSection.tsx
│   │   ├── ProblemSection.tsx
│   │   ├── SolutionSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── FeaturedWorkSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── WhyUsSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── FinalCTASection.tsx
│   ├── cards/
│   │   ├── ServiceCard.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── FeatureCard.tsx
│   │   └── GlassCard.tsx
│   ├── forms/
│   │   └── ContactForm.tsx       # Future: if a form is added to /contact
│   ├── common/
│   │   ├── Footer.tsx
│   │   ├── WhatsAppButton.tsx    # Floating sticky button (Client)
│   │   ├── WhatsAppCTA.tsx       # Inline CTA variant
│   │   ├── AnimationWrapper.tsx  # Client: Framer Motion scroll-reveal wrapper
│   │   ├── StaggerWrapper.tsx    # Client: staggered list entrance
│   │   ├── FAQItem.tsx           # Client: accordion item
│   │   ├── ProjectModal.tsx      # Client: project detail overlay
│   │   └── ProcessStep.tsx
│   └── icons/
│       └── Logomark.tsx          # SVG brand mark (inlined for perf)
│
├── lib/
│   ├── whatsapp.ts               # buildWhatsAppURL() utility
│   ├── metadata.ts               # Shared metadata generators
│   ├── cn.ts                     # clsx + tailwind-merge utility
│   └── structured-data.ts       # JSON-LD schema builders
│
├── hooks/
│   ├── useScrollProgress.ts
│   └── useReducedMotion.ts       # Wraps Framer's hook for convenience
│
├── constants/
│   ├── site.ts                   # Business info, social links, contact
│   ├── navigation.ts             # Nav items array
│   ├── services.ts               # Service card data
│   ├── projects.ts               # Showcase project data
│   ├── process.ts                # Process steps data
│   ├── faqs.ts                   # FAQ data
│   ├── whyUs.ts                  # Why Us feature cards data
│   └── technologies.ts           # Trust badge logos
│
├── types/
│   ├── service.ts
│   ├── project.ts
│   ├── faq.ts
│   └── process.ts
│
├── public/
│   ├── images/
│   │   ├── projects/             # Project preview screenshots
│   │   └── about/                # Studio visuals
│   ├── icons/                    # Favicon variants
│   ├── logos/                    # Brand SVGs
│   └── og/                       # OG preview images
│
├── docs/                         # Project documentation
│   ├── PRD.md
│   ├── Architecture.md           # This file
│   ├── DesignSystem.md
│   ├── MotionLanguage.md
│   ├── BrandGuidelines.md
│   ├── DevelopmentStandards.md
│   └── Decisions.md
│
├── .env.example
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── .eslintrc.json
├── .prettierrc
└── package.json
```

---

## 5. Pages

| Route          | File                       | Description                         |
| -------------- | -------------------------- | ----------------------------------- |
| `/`            | `app/page.tsx`             | Homepage: full conversion narrative |
| `/services`    | `app/services/page.tsx`    | Expanded service descriptions       |
| `/work`        | `app/work/page.tsx`        | Full project gallery grid           |
| `/work/[slug]` | `app/work/[slug]/page.tsx` | Individual project case study       |
| `/process`     | `app/process/page.tsx`     | Expanded 4-step process             |
| `/about`       | `app/about/page.tsx`       | Studio story and positioning        |
| `/contact`     | `app/contact/page.tsx`     | Contact options + WhatsApp + form   |
| `404`          | `app/not-found.tsx`        | Branded not-found page              |

**Future pages (architecture ready):**
`/pricing`, `/blog`, `/blog/[slug]`, `/resources`, `/case-studies/[slug]`

---

## 6. Layouts

| File                         | Wraps          | Contains                                                                                      |
| ---------------------------- | -------------- | --------------------------------------------------------------------------------------------- |
| `app/layout.tsx`             | Everything     | HTML shell, font injection, global CSS, `<Navbar>`, `<Footer>`, `<WhatsAppButton>`, analytics |
| `app/(marketing)/layout.tsx` | Optional group | Could isolate marketing pages from future app routes                                          |

The root layout is minimal. It does not render anything except structural providers. All visual chrome (Navbar, Footer) is assembled here.

---

## 7. Data Flow

```
constants/*.ts
     │
     ▼
components/sections/*.tsx   (Server Components — import data directly)
     │
     ▼
components/cards/*.tsx       (Server Components — receive data as props)
     │
     ▼
components/common/AnimationWrapper.tsx   (Client Component — wraps with motion)
```

No prop drilling past two levels. Data is passed directly from section → card.

---

## 8. SEO Architecture

See [`docs/DevelopmentStandards.md`](./DevelopmentStandards.md) for full SEO implementation rules.

Summary:

- Every page exports a `generateMetadata()` function
- `app/sitemap.ts` auto-generates from `constants/` data
- `app/robots.ts` is generated code
- JSON-LD structured data (Organization + Website schema) injected in root layout
- Project pages include Article schema
- All images have descriptive `alt` attributes

---

## 9. CMS Readiness

The `constants/` directory acts as a **CMS adapter layer**. Each file exports typed data that matches an interface defined in `types/`. When a headless CMS is introduced:

1. Add a `lib/cms.ts` file with the CMS client
2. Create `lib/queries/` with typed fetch functions that return the same interfaces defined in `types/`
3. Replace the static `constants/` imports in each section component with the fetch functions
4. No component markup changes required

Recommended CMS when ready: **Sanity** (React-native, excellent Next.js support, GROQ queries, preview mode).

---

## 10. i18n Readiness

- All user-facing copy is stored in `constants/` as typed strings — never inline in JSX
- No locale-specific logic in components
- When i18n is needed: adopt `next-intl` and migrate constants to locale-namespaced message files
- URL structure supports future `/es/` prefix routing via Next.js `i18n` config
- Locale detection handled at the middleware layer

---

## 11. Analytics Integration

Vercel Analytics and Speed Insights are injected in `app/layout.tsx` via their official Next.js components. They require no cookies and no consent banner under most jurisdictions.

Future additions (modular, non-blocking):

- `lib/analytics.ts` — thin wrapper for `gtag` / GTM events
- `lib/pixels.ts` — Meta Pixel event helpers
- All tracked via environment variables (`NEXT_PUBLIC_GTM_ID`, etc.)

---

## 12. Performance Targets

| Metric                    | Target          |
| ------------------------- | --------------- |
| Lighthouse Performance    | 95+             |
| Lighthouse Accessibility  | 100             |
| Lighthouse Best Practices | 100             |
| Lighthouse SEO            | 100             |
| LCP                       | < 2.5s          |
| CLS                       | < 0.1           |
| FID / INP                 | < 200ms         |
| JS Bundle (initial)       | < 150KB gzipped |

---

## 13. Security

- No secrets in client code; all sensitive values via environment variables
- No user authentication at launch
- Contact form (if added) validated server-side via Server Action
- Input sanitized before any processing
- No third-party scripts injected without explicit review
- Content Security Policy headers configured in `next.config.ts`

---

## 14. Deployment

1. Push to `main` branch → Vercel auto-deploys production
2. Feature branches get preview deployments automatically
3. No build step manual configuration required
4. Environment variables stored in Vercel project settings
5. Custom domain configured via Vercel DNS or CNAME

---

## 15. Implementation Roadmap

### Phase 0 — Foundation (Complexity: Low)

**Goal:** Project compiles, runs, and deploys cleanly.

- Initialize Next.js 15 with TypeScript strict, Tailwind v4, ESLint, Prettier
- Configure `next.config.ts` (image domains, headers, redirects)
- Install all dependencies
- Set up Geist font via `next/font`
- Create base CSS tokens in `globals.css`
- Create `lib/cn.ts` utility
- Create `constants/site.ts`

### Phase 1 — Design System (Complexity: Medium)

**Goal:** Every primitive component exists and is visually correct.

- Implement all tokens (colors, spacing, radius, shadow, motion)
- Build `ui/` components: Button, Badge, Heading, Input, Textarea, IconWrapper
- Build `layout/` components: Container, Section, SectionHeader
- Build `AnimationWrapper`, `StaggerWrapper`
- Visual QA on all primitives

### Phase 2 — Navigation & Shell (Complexity: Medium)

**Goal:** Full site navigation works on all breakpoints.

- FloatingNavbar with glass scroll effect
- MobileMenu (drawer)
- Footer
- WhatsAppButton (floating)
- Root layout assembled

### Phase 3 — Homepage (Complexity: High)

**Goal:** Complete homepage tells the full conversion story.

- HeroSection (with entrance animation sequence)
- TrustBadgesSection
- ProblemSection
- SolutionSection
- ServicesSection (ServiceCard grid)
- FeaturedWorkSection (ProjectCard grid)
- ProcessSection (ProcessStep with scroll animation)
- WhyUsSection (FeatureCard grid)
- FAQSection (accordion)
- FinalCTASection

### Phase 4 — Inner Pages (Complexity: Medium)

**Goal:** All routes exist and are production-quality.

- `/services` page
- `/work` page + `/work/[slug]` project detail
- `/process` page
- `/about` page
- `/contact` page
- Custom 404 page

### Phase 5 — SEO & Performance (Complexity: Medium)

**Goal:** Lighthouse scores hit targets.

- Per-page metadata + generateMetadata()
- JSON-LD structured data
- sitemap.ts + robots.ts
- OG image generation (static or dynamic)
- Image optimization audit
- Bundle analysis + code splitting
- Core Web Vitals validation

### Phase 6 — QA & Launch (Complexity: Medium)

**Goal:** Every item in the PRD quality checklist passes.

- Responsive QA (320px–1920px)
- Accessibility audit (axe, keyboard navigation)
- Animation audit (reduced motion, frame drops)
- Link audit (internal, external, WhatsApp)
- Cross-browser verification (Chrome, Firefox, Safari, Edge)
- Vercel production deployment + domain configuration

---

## 16. Dependencies to Install

```
# Core
next@15
react@19
react-dom@19
typescript

# Styling
tailwindcss@4
@tailwindcss/postcss

# Animations
framer-motion

# Icons
lucide-react

# Utility
clsx
tailwind-merge

# Analytics
@vercel/analytics
@vercel/speed-insights

# Dev
eslint
eslint-config-next
prettier
prettier-plugin-tailwindcss
@types/node
@types/react
@types/react-dom
```

**Not installed at launch (future):**

```
# CMS
@sanity/client
next-sanity

# i18n
next-intl

# Forms
react-hook-form
zod

# Email
resend
```
