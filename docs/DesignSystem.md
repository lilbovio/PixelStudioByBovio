# Pixel by Bovio — Design System

> **Status:** Pre-implementation specification. Every token, component, and rule defined here is the law.
> Implementation uses Tailwind CSS v4 CSS custom properties.

---

## 1. Philosophy

The design system exists to ensure that every element on the site looks and behaves as if it was designed by the same hand. Consistency is the mechanism through which trust is communicated.

**Core Principle:** Every value is a token. Nothing is hardcoded. If the brand changes, the tokens change — the components do not.

---

## 2. Color Tokens

All colors are defined as CSS custom properties in `app/globals.css` and mapped to Tailwind's `theme.extend` in `tailwind.config.ts`.

### Semantic Roles

| Token | Light Value | Usage |
|---|---|---|
| `--color-bg` | `#FFFFFF` | Page background |
| `--color-bg-secondary` | `#F9FAFB` | Alternating section backgrounds |
| `--color-bg-tertiary` | `#F3F4F6` | Subtle UI backgrounds |
| `--color-surface` | `#FFFFFF` | Card surfaces |
| `--color-surface-glass` | `rgba(255,255,255,0.72)` | Glass morphism surfaces |
| `--color-border` | `#E5E7EB` | Default borders |
| `--color-border-subtle` | `rgba(229,231,235,0.6)` | Glass borders |
| `--color-text-primary` | `#0F0F0F` | Headlines, critical text |
| `--color-text-secondary` | `#374151` | Body copy |
| `--color-text-muted` | `#6B7280` | Supporting text, labels |
| `--color-text-disabled` | `#9CA3AF` | Disabled states |
| `--color-accent` | `#1A56DB` | Single accent — deep blue |
| `--color-accent-hover` | `#1E40AF` | Accent hover state |
| `--color-btn-primary-bg` | `#111827` | Primary button fill |
| `--color-btn-primary-hover` | `#1F2937` | Primary button hover |
| `--color-btn-primary-text` | `#FFFFFF` | Primary button label |
| `--color-btn-secondary-border` | `#D1D5DB` | Secondary button border |
| `--color-success` | `#059669` | Validation success |
| `--color-warning` | `#D97706` | Validation warning |
| `--color-error` | `#DC2626` | Validation error (used sparingly) |

### Color Rules
- **One accent color only.** `--color-accent` (deep blue `#1A56DB`) is used for hyperlinks, focus rings, and emphasis — never for decoration.
- **Never use purple, orange, or bright green.**
- The site must remain visually coherent if all accent colors are removed.
- Background alternation: white sections alternate with `--color-bg-secondary`. No other background colors.

---

## 3. Typography System

### Font

**Geist** loaded via `next/font/local`. Single font family. No decorative or secondary typeface. Weight variation creates all hierarchy.

```css
/* Weights loaded */
font-weight: 400; /* Regular — body copy */
font-weight: 500; /* Medium — labels, UI text */
font-weight: 600; /* Semibold — subheadings, card titles */
font-weight: 700; /* Bold — section headings */
font-weight: 800; /* Extrabold — display, hero */
```

### Type Scale

| Token | Size (Desktop) | Size (Mobile) | Weight | Line Height | Letter Spacing | Usage |
|---|---|---|---|---|---|---|
| `text-hero` | 72px | 40px | 800 | 1.05 | -0.03em | Main hero headline |
| `text-display` | 56px | 36px | 800 | 1.1 | -0.025em | Section intros |
| `text-heading-xl` | 48px | 32px | 700 | 1.15 | -0.02em | Section titles |
| `text-heading-lg` | 36px | 28px | 700 | 1.2 | -0.015em | Subsection titles |
| `text-heading-md` | 28px | 24px | 600 | 1.3 | -0.01em | Card titles |
| `text-heading-sm` | 22px | 20px | 600 | 1.35 | -0.005em | Minor headings |
| `text-body-lg` | 18px | 17px | 400 | 1.7 | 0 | Primary body copy |
| `text-body` | 16px | 16px | 400 | 1.65 | 0 | Secondary body |
| `text-caption` | 14px | 14px | 400 | 1.5 | 0.01em | Supporting text |
| `text-label` | 13px | 13px | 500 | 1.4 | 0.04em | Labels, tags, badges |
| `text-btn` | 15px | 15px | 500 | 1 | 0.01em | Button labels |

### Text Alignment Rules
- **Headlines:** Left-aligned by default. Centered only in hero sections and final CTA.
- **Body copy:** Always left-aligned. Never justified.
- **Maximum reading width:** 720px. Body text never stretches across a full wide container.

---

## 4. Spacing System

Base unit: **8px**. Every spacing value is a multiple of 4 (half-unit allowed for fine-tuning only).

| Token | Value | Common Usage |
|---|---|---|
| `space-1` | 4px | Inline gaps, icon margins |
| `space-2` | 8px | Tight component padding |
| `space-3` | 12px | Compact padding |
| `space-4` | 16px | Standard padding, card internal gap |
| `space-6` | 24px | Component gap |
| `space-8` | 32px | Section internal spacing |
| `space-10` | 40px | Medium section gaps |
| `space-12` | 48px | Large section padding |
| `space-16` | 64px | Section vertical padding (mobile) |
| `space-20` | 80px | Section vertical padding (tablet) |
| `space-24` | 96px | Section vertical padding (desktop) |
| `space-32` | 128px | Section vertical padding (large desktop) |

### Vertical Rhythm (Section Padding)
| Breakpoint | Top/Bottom padding |
|---|---|
| Mobile (< 640px) | 64px |
| Tablet (640–1023px) | 80px |
| Desktop (1024px+) | 96px |
| Large (1440px+) | 128px |

---

## 5. Border Radius Tokens

| Token | Value | Usage |
|---|---|---|
| `radius-xs` | 6px | Tags, small chips |
| `radius-sm` | 10px | Small elements, inputs |
| `radius-md` | 16px | Cards, containers |
| `radius-lg` | 20px | Large cards, modals |
| `radius-xl` | 24px | Images, large surfaces |
| `radius-pill` | 9999px | Buttons, badges |
| `radius-full` | 50% | Circular elements (avatars) |

---

## 6. Shadow System

Three functional levels. No decorative shadows.

| Token | CSS Value | Usage |
|---|---|---|
| `shadow-soft` | `0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)` | Cards at rest |
| `shadow-medium` | `0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)` | Floating components, card hover |
| `shadow-elevated` | `0 8px 24px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.06)` | Modals, important interactive elements |
| `shadow-glass` | `0 2px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)` | Glass surfaces |

---

## 7. Glass System

Glass effects are used **only** where they enhance hierarchy — never as decoration.

**Approved glass contexts:**
- Floating navigation bar (post-scroll)
- Project preview cards
- Modal windows
- Floating CTA containers

**Properties:**
```css
background: rgba(255, 255, 255, 0.72);
backdrop-filter: blur(12px) saturate(1.2);
-webkit-backdrop-filter: blur(12px) saturate(1.2);
border: 1px solid rgba(255, 255, 255, 0.6);
box-shadow: var(--shadow-glass);
```

**Rules:**
- Text over glass must always meet WCAG AA contrast (4.5:1 minimum)
- Blur value: 8–16px. Never exceed 20px.
- Background opacity: 0.6–0.8. Never fully transparent.
- Never stack multiple glass layers

---

## 8. Z-Index System

| Token | Value | Usage |
|---|---|---|
| `z-background` | 0 | Static background elements |
| `z-content` | 10 | Normal page content |
| `z-sticky` | 40 | Sticky navigation bar |
| `z-floating` | 50 | WhatsApp floating button |
| `z-overlay` | 60 | Modal backdrop |
| `z-modal` | 70 | Modal content |
| `z-toast` | 80 | Toast notifications |
| `z-tooltip` | 90 | Tooltips |

---

## 9. Component Catalogue

All components live in `components/`. Each is documented with its required props, optional variants, and accessibility requirements.

### Primitives (`components/ui/`)

#### `Button`
```typescript
variant: 'primary' | 'secondary' | 'ghost'
size: 'sm' | 'md' | 'lg'
href?: string        // renders as <a> via Next.js Link
loading?: boolean
disabled?: boolean
icon?: ReactNode
iconPosition?: 'left' | 'right'
```
- Primary: dark charcoal fill, white text, pill radius, subtle hover elevation
- Secondary: transparent, thin border, soft hover background
- Ghost: no border, text only, subtle hover
- All include `aria-disabled` and loading spinner

#### `Badge`
```typescript
variant: 'default' | 'accent' | 'muted'
size: 'sm' | 'md'
```
Small label chip with pill radius. Used for service tags, project categories.

#### `Heading`
```typescript
level: 1 | 2 | 3 | 4 | 5 | 6   // semantic HTML level
size?: 'hero' | 'display' | 'xl' | 'lg' | 'md' | 'sm'  // visual size override
```
Decouples semantic level from visual size. Required for correct heading hierarchy.

#### `Input` / `Textarea`
- Large rounded inputs with soft focus rings (accent color)
- No aggressive error states — calm inline validation
- `aria-describedby` connected to error message element

#### `IconWrapper`
```typescript
size: 'sm' | 'md' | 'lg'
variant: 'default' | 'soft' | 'outline'
```
Consistent icon sizing and alignment container. Enforces single icon family (Lucide).

#### `SkeletonLoader`
Animated shimmer placeholder. Used whenever async content is loading.

---

### Layout (`components/layout/`)

#### `Container`
Max-width 1280px, auto horizontal margins, responsive horizontal padding (`px-5 sm:px-8 lg:px-12`). Every page section wraps content in `<Container>`.

#### `Section`
```typescript
variant: 'white' | 'gray' | 'dark'  // background alternation
padding?: 'sm' | 'md' | 'lg' | 'xl'  // vertical rhythm
id?: string  // for anchor navigation
```
Every homepage section uses `<Section>`. Background alternation creates page rhythm.

#### `SectionHeader`
```typescript
label?: string    // small badge above headline
headline: string
subheadline?: string
align?: 'left' | 'center'
```
Standardized section introduction. Used in 9 of 10 homepage sections.

---

### Cards (`components/cards/`)

#### `ServiceCard`
```typescript
icon: ReactNode
name: string
description: string
outcome: string
```
Grid card for the Services section. Hover: 4px upward translation + shadow enhancement.

#### `ProjectCard`
```typescript
slug: string
title: string
industry: string
description: string
goal: string
coverImage: string
tags: string[]
```
Gallery card for the Work section. Hover: image moves up, overlay fades, CTA appears.

#### `FeatureCard`
```typescript
icon: ReactNode
title: string
description: string
```
Grid card for the Why Us section.

#### `GlassCard`
Generic glass surface card. Used in contexts requiring elevated hierarchy (testimonials, stats).

---

### Navigation (`components/navigation/`)

#### `FloatingNavbar` (Client)
- Logo left, links centered, CTA right
- Transparent on scroll position 0
- Glass background appears smoothly once user scrolls > 20px
- Mobile: hamburger icon replaces links
- Sticky, `z-sticky`

#### `MobileMenu` (Client)
- Full-screen drawer or slide-down panel
- Closes on link click, on escape key, on backdrop click
- Animated entrance/exit via Framer Motion
- Focus trap while open

---

### Sections (`components/sections/`)

One file per section. Sections are Server Components — they import data from `constants/` and render markup. Animations are handled by wrapping children in `AnimationWrapper` or `StaggerWrapper`.

| Component | Data Source | Animation Type |
|---|---|---|
| `HeroSection` | `constants/site.ts` | Progressive stagger (headline → paragraph → buttons → visual) |
| `TrustBadgesSection` | `constants/technologies.ts` | Fade in stagger |
| `ProblemSection` | Inline copy | Fade up stagger |
| `SolutionSection` | Inline copy | Fade up |
| `ServicesSection` | `constants/services.ts` | Card stagger |
| `FeaturedWorkSection` | `constants/projects.ts` | Card stagger |
| `ProcessSection` | `constants/process.ts` | Step stagger with connector line animation |
| `WhyUsSection` | `constants/whyUs.ts` | Card stagger |
| `FAQSection` | `constants/faqs.ts` | Fade up stagger, accordion Client |
| `FinalCTASection` | `constants/site.ts` | Fade up |

---

### Common (`components/common/`)

#### `WhatsAppButton` (Client)
- Fixed bottom-right, `z-floating`
- Show after scrolling 300px
- Opens WhatsApp with prefilled message from `lib/whatsapp.ts`
- Accessible: `aria-label="Start a conversation on WhatsApp"`

#### `AnimationWrapper` (Client)
Wraps any content in a scroll-triggered Framer Motion animation.
```typescript
variant?: 'fadeUp' | 'fadeIn' | 'blurUp'  // animation preset
delay?: number
threshold?: number  // intersection ratio to trigger
once?: boolean  // animate only once (default: true)
```
Checks `useReducedMotion` — if true, renders children without animation.

#### `StaggerWrapper` (Client)
Wraps a list of children and staggers their entrance animations.
```typescript
staggerDelay?: number  // ms between children (default: 70ms)
variant?: 'fadeUp' | 'fadeIn'
```

#### `FAQItem` (Client)
Accordion item. Height animates via `motion.div` with `AnimatePresence`. Icon rotates 180° on open.

#### `ProjectModal` (Client)
Full-screen overlay for project detail view. Includes:
- Homepage preview image
- Mobile preview image
- Color palette swatches
- Typography sample
- Business objectives + key features
- Close button + ESC key + backdrop click

---

## 10. Responsive Strategy

**Philosophy:** Mobile-first. Every component is designed for 320px and expanded upward.

| Breakpoint | Token | Width |
|---|---|---|
| Mobile | (default) | 320px – 639px |
| Tablet | `sm` | 640px – 1023px |
| Desktop | `lg` | 1024px – 1439px |
| Large | `xl` | 1440px – 1919px |
| Ultra-wide | `2xl` | 1920px+ |

### Grid Behavior per Breakpoint

| Section | Mobile | Tablet | Desktop |
|---|---|---|---|
| Services | 1 column | 2 columns | 3 columns |
| Featured Work | 1 column | 2 columns | 3 columns |
| Why Us | 1 column | 2 columns | 4 columns |
| Process | 1 column stacked | 2 columns | 4 columns horizontal |
| Trust Badges | 3 columns | 4 columns | 6 columns |

### Touch Targets
- Minimum 44×44px for all interactive elements
- Navigation links have generous padding on mobile
- Floating WhatsApp button: 56×56px minimum

---

## 11. Accessibility Standards

**Target: WCAG 2.1 AA**

| Requirement | Implementation |
|---|---|
| Color contrast | Text on light bg: ≥ 4.5:1. Large text: ≥ 3:1 |
| Focus indicators | Custom focus ring: `outline: 2px solid var(--color-accent); outline-offset: 3px` |
| Keyboard navigation | All interactive elements reachable via Tab. Logical order. |
| Screen reader | Semantic HTML. All images have `alt`. Icons have `aria-hidden="true"` when decorative. |
| Heading hierarchy | One `h1` per page. Never skip levels. |
| Reduced motion | `AnimationWrapper` detects `prefers-reduced-motion` and disables all animations |
| Forms | Labels associated with inputs via `htmlFor`/`id`. Error messages via `aria-describedby`. |
| Modals | Focus trap on open. Returns focus to trigger on close. `role="dialog"`, `aria-modal="true"` |
| Language | `<html lang="en">` in root layout |

---

## 12. Section Alternation Rhythm

Sections alternate backgrounds to create visual rhythm without relying on color:

```
Hero             → White (#FFFFFF)
Trust Badges     → White (#FFFFFF)
Problem          → Gray (#F9FAFB)
Solution         → White (#FFFFFF)
Services         → Gray (#F9FAFB)
Featured Work    → White (#FFFFFF)
Process          → Gray (#F9FAFB)
Why Us           → White (#FFFFFF)
FAQ              → Gray (#F9FAFB)
Final CTA        → Dark (near black, exception)
Footer           → Dark (consistent with CTA)
```

The Final CTA and Footer are the only sections that break the white/gray alternation — intentionally. The dark section creates a definitive visual close to the page and makes the CTA feel final.
