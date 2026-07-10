# Pixel by Bovio — Development Standards

> **Status:** Pre-implementation specification. These standards are enforced via ESLint, Prettier, and TypeScript.

---

## 1. Philosophy

Write code that another senior engineer would enjoy maintaining.

Every file. Every function. Every component. Should communicate craftsmanship.

**Rules:**
- Readable code is more valuable than clever code
- Optimize for maintainability, not cleverness
- The smallest change that solves the problem
- Every line must trace to a requirement

---

## 2. TypeScript Standards

```jsonc
// tsconfig.json — enforced
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true
  }
}
```

**Rules:**
- `strict: true` — no exceptions
- No `any` types — use `unknown` + type narrowing
- No type assertions (`as Type`) unless genuinely required
- All component props are typed via explicit interfaces, not inline
- All data constants are typed with exported interfaces from `types/`
- No `@ts-ignore` — fix the root cause

---

## 3. Component Standards

### File Structure

```tsx
// components/cards/ServiceCard.tsx

import type { Service } from '@/types/service'
import { IconWrapper } from '@/components/ui/IconWrapper'
import { cn } from '@/lib/cn'

// ─── Types ────────────────────────────────────────────────────
interface ServiceCardProps {
  service: Service
  className?: string
}

// ─── Component ────────────────────────────────────────────────
export function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <article className={cn('...', className)}>
      {/* ... */}
    </article>
  )
}
```

**Rules:**
- One component per file
- Named exports (never default exports for components)
- Types defined at top of file
- `className` prop on all layout/UI components for composability
- Max ~250 lines per file — split if larger
- No business logic in components — components render, `lib/` computes

---

## 4. "use client" Policy

Add `"use client"` only when the component genuinely requires it:
- Uses `useState`, `useEffect`, `useRef`, `useContext`
- Uses Framer Motion `motion.*` elements or `useReducedMotion`
- Responds to browser events (scroll, click with state)
- Uses browser APIs (window, document, localStorage)

**Never** add `"use client"` because it's easier, because a child needs it, or out of habit.

When a parent needs to pass a Client Component into a Server Component, pass it as a `children` prop or `slot` prop rather than importing it directly in the Server Component tree where avoidable.

---

## 5. Naming Conventions

| Item | Convention | Example |
|---|---|---|
| Components | PascalCase | `ServiceCard.tsx` |
| Hooks | camelCase with `use` prefix | `useScrollProgress.ts` |
| Utilities | camelCase | `buildWhatsAppURL.ts` |
| Constants | camelCase for variables, UPPER_SNAKE for fixed values | `services`, `SITE_URL` |
| CSS classes | Tailwind utilities | `flex items-center gap-4` |
| Types/Interfaces | PascalCase | `Service`, `Project`, `FAQItem` |
| Event handlers | `handle` prefix | `handleSubmit`, `handleToggle` |
| Boolean props | `is` / `has` prefix | `isLoading`, `hasError` |

---

## 6. Import Order

ESLint enforces this order automatically:

```tsx
// 1. React (only if needed — usually not in RSC)
import { useState } from 'react'

// 2. Next.js
import Link from 'next/link'
import Image from 'next/image'

// 3. Third-party libraries
import { motion } from 'framer-motion'

// 4. Internal — types
import type { Service } from '@/types/service'

// 5. Internal — components
import { Button } from '@/components/ui/Button'

// 6. Internal — utilities
import { cn } from '@/lib/cn'

// 7. Internal — constants
import { services } from '@/constants/services'
```

---

## 7. CSS / Tailwind Standards

- **Tailwind utilities only.** No custom CSS unless a utility genuinely cannot express it.
- **No magic numbers.** All spacing from the design token scale.
- **`cn()` for conditional classes.** Always use `clsx` + `tailwind-merge` via `lib/cn.ts` — never string concatenation.
- **No inline `style` props** for values that belong in the design system.
- **Responsive modifier order:** base → `sm:` → `md:` → `lg:` → `xl:` → `2xl:`
- **State modifier order:** base → `hover:` → `focus:` → `active:` → `disabled:`

```tsx
// ✓ Correct
<div className={cn(
  'flex items-center gap-4 px-6 py-3',
  'sm:gap-6 sm:px-8',
  'hover:bg-gray-50',
  isActive && 'bg-gray-100',
  className
)}>
```

---

## 8. SEO Implementation

### Per-Page Metadata

Every `page.tsx` exports a `generateMetadata()` function:

```tsx
// app/services/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services — Pixel by Bovio',
  description: 'Premium website design and development services...',
  alternates: { canonical: 'https://pixelbybovio.com/services' },
  openGraph: {
    title: 'Services — Pixel by Bovio',
    description: '...',
    url: 'https://pixelbybovio.com/services',
    images: [{ url: '/og/services.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services — Pixel by Bovio',
    description: '...',
    images: ['/og/services.png'],
  },
}
```

### Structured Data (JSON-LD)

Injected in root layout:

```tsx
// app/layout.tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
/>
```

Schemas required at launch:
- `Organization` (root layout)
- `WebSite` with `SearchAction` (root layout)
- `Service` (services page)
- `FAQPage` (homepage FAQ section)

### Sitemap (`app/sitemap.ts`)

```ts
import type { MetadataRoute } from 'next'
import { projects } from '@/constants/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['/', '/services', '/work', '/process', '/about', '/contact']
  const projectRoutes = projects.map(p => `/work/${p.slug}`)
  
  return [...staticRoutes, ...projectRoutes].map(url => ({
    url: `https://pixelbybovio.com${url}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: url === '/' ? 1 : 0.8,
  }))
}
```

### Robots (`app/robots.ts`)

```ts
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://pixelbybovio.com/sitemap.xml',
  }
}
```

---

## 9. Performance Standards

### Images

All images use `next/image`:
```tsx
<Image
  src="/images/projects/coffee-shop.webp"
  alt="Coffee shop website concept — hero section preview"
  width={800}
  height={600}
  quality={85}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

- Never use `<img>` tags directly
- Always specify `width` and `height` to prevent CLS
- Hero images: `priority={true}` (preloaded)
- Below-fold images: lazy loaded (default)
- Format: WebP preferred, AVIF for modern browsers
- Quality: 80–85 (balance of size vs. sharpness)

### Fonts

```tsx
// app/layout.tsx
import { GeistSans } from 'geist/font/sans'

<html className={GeistSans.variable}>
```

- Single font family, variable font
- Loaded via `next/font` for zero CLS
- `font-display: swap` handled automatically

### JavaScript Bundle

- No unnecessary client components
- No heavy libraries for simple tasks (no lodash, no moment.js)
- Tree-shake icons individually: `import { ArrowRight } from 'lucide-react'`
- Dynamic imports for ProjectModal (heavy, not needed on initial load):
  ```tsx
  const ProjectModal = dynamic(() => import('@/components/common/ProjectModal'), {
    loading: () => <SkeletonLoader />,
  })
  ```

### Animation Performance

Only animate GPU-friendly properties:
- ✓ `opacity`
- ✓ `transform` (translate, scale, rotate)
- ✓ `filter` (blur — use sparingly)
- ✗ `width` / `height` — causes layout reflow
- ✗ `top` / `left` / `margin` — causes layout reflow
- ✗ `background-color` — prefer `opacity` wrapper

---

## 10. Data Constants Pattern

All site content that may change is stored in typed constants — never inline in JSX.

```ts
// constants/services.ts
import type { Service } from '@/types/service'

export const services: Service[] = [
  {
    id: 'landing-pages',
    name: 'Landing Pages',
    description: 'Beautiful high-converting landing pages designed to capture leads...',
    outcome: 'Generate qualified leads and grow your customer base.',
    icon: 'layout',  // Lucide icon name
  },
  // ...
]
```

```ts
// types/service.ts
export interface Service {
  id: string
  name: string
  description: string
  outcome: string
  icon: string
}
```

**Rule:** If you find yourself typing the same business information more than once, it belongs in `constants/`.

---

## 11. WhatsApp Utility

```ts
// lib/whatsapp.ts
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? ''

const DEFAULT_MESSAGE = `Hello Pixel by Bovio,

I found your website and I'm interested in discussing a project for my business.

I would like to receive more information.

Thank you.`

export function buildWhatsAppURL(message = DEFAULT_MESSAGE): string {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
}
```

Every WhatsApp CTA in the site calls `buildWhatsAppURL()`. The phone number is stored in an environment variable. Changing the number or message requires one file update.

---

## 12. Error Handling

```tsx
// app/not-found.tsx
export default function NotFound() {
  return (
    <main>
      <Section>
        <Container>
          <SectionHeader
            label="404"
            headline="Page not found."
            subheadline="The page you're looking for doesn't exist. Let's get you back on track."
          />
          <Button href="/" variant="primary">Back to home</Button>
        </Container>
      </Section>
    </main>
  )
}
```

Rules:
- `not-found.tsx` — always branded, never plain text
- `error.tsx` — Client Component boundary for runtime errors
- Missing images — handled gracefully by `next/image` fallback
- Empty data arrays — every section handles the empty state without breaking

---

## 13. Environment Variables

```bash
# .env.example
NEXT_PUBLIC_WHATSAPP_NUMBER=521XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://pixelbybovio.com
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=   # auto-provided by Vercel

# Future
NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_GA_MEASUREMENT_ID=
SANITY_PROJECT_ID=
SANITY_DATASET=
SANITY_API_TOKEN=
```

- `NEXT_PUBLIC_*` — safe to expose to browser
- All other variables — server-only
- `.env.local` is gitignored
- `.env.example` is committed with placeholder values

---

## 14. Code Quality Gates

### ESLint (`.eslintrc.json`)

```json
{
  "extends": ["next/core-web-vitals", "next/typescript"],
  "rules": {
    "no-console": "warn",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "react/self-closing-comp": "warn"
  }
}
```

### Prettier (`.prettierrc`)

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

`prettier-plugin-tailwindcss` enforces class order automatically. Never manually sort Tailwind classes.

---

## 15. Git Workflow

### Branch Naming
```
main                   — production
feature/hero-section   — new features
fix/navbar-mobile      — bug fixes
chore/update-deps      — maintenance
```

### Commit Messages (Conventional Commits)
```
feat: add hero section entrance animation
fix: correct mobile menu focus trap
chore: update framer-motion to v11
docs: update architecture decision log
style: apply prettier formatting
refactor: extract WhatsApp URL builder
```

---

## 16. Development Commands

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Type check (no emit)
pnpm typecheck

# Lint
pnpm lint

# Format
pnpm format

# Build for production
pnpm build

# Preview production build
pnpm start

# Analyze bundle
pnpm analyze
```

---

## 17. How-to Reference

### Add a New Service
1. Open `types/service.ts` — verify the `Service` interface covers your needs
2. Open `constants/services.ts` — add a new object to the `services` array
3. Choose a Lucide icon name for the `icon` field
4. The `ServicesSection` component renders automatically — no markup changes

### Add a New Project
1. Add project images to `public/images/projects/[project-name]/`
2. Open `constants/projects.ts` — add a new `Project` object with a unique `slug`
3. The `/work` gallery and sitemap update automatically

### Update Contact Information
1. Open `constants/site.ts`
2. Update the relevant field (`whatsappNumber`, `email`, `location`, etc.)
3. All components that reference these values update automatically

### Add a New Page
1. Create `app/[page-name]/page.tsx`
2. Export a `generateMetadata()` function
3. Add the route to `constants/navigation.ts` if it should appear in the nav
4. The sitemap picks it up automatically if added to `app/sitemap.ts`

### Update Navigation
1. Open `constants/navigation.ts`
2. Add, remove, or reorder items
3. Both `FloatingNavbar` and `MobileMenu` render from this same array

---

## 18. Pre-Launch Checklist

### Visual
- [ ] All sections render correctly at 320px, 768px, 1024px, 1280px, 1920px
- [ ] Typography hierarchy is consistent across all pages
- [ ] Spacing follows the 8px system throughout
- [ ] Cards share consistent radius and shadow
- [ ] Glass effects are subtle and readable
- [ ] All hover states are implemented and feel refined
- [ ] Loading states are implemented for async interactions

### Accessibility
- [ ] `axe` browser extension passes with 0 errors
- [ ] Tab navigation visits every interactive element in logical order
- [ ] All images have descriptive `alt` text
- [ ] Heading hierarchy is correct on every page (one h1, no skipped levels)
- [ ] Color contrast meets 4.5:1 for normal text
- [ ] Focus rings are visible and styled
- [ ] Reduced motion mode tested and working
- [ ] Mobile menu has focus trap

### Performance
- [ ] Lighthouse Performance ≥ 95 on mobile
- [ ] Lighthouse Accessibility = 100
- [ ] Lighthouse Best Practices = 100
- [ ] Lighthouse SEO = 100
- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] No console errors in production build

### SEO
- [ ] Every page has unique `<title>` and `<meta name="description">`
- [ ] Every page has canonical URL
- [ ] Every page has OG and Twitter metadata
- [ ] JSON-LD structured data present
- [ ] `sitemap.xml` accessible and valid
- [ ] `robots.txt` accessible and allows indexing
- [ ] All internal links work
- [ ] All images have alt text

### Functionality
- [ ] All WhatsApp links open correctly with prefilled message
- [ ] Email link works
- [ ] All navigation links work
- [ ] Mobile menu opens, closes, and traps focus
- [ ] FAQ accordion open/close works
- [ ] Project modal open/close works
- [ ] Floating WhatsApp button appears after scroll
- [ ] 404 page displays correctly
