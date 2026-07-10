/**
 * Section — full-width section wrapper with responsive vertical rhythm.
 *
 * Every homepage section and inner-page section uses this component.
 * It controls:
 *   - Background colour (white / gray / dark) — the alternation rhythm
 *   - Vertical padding via the section-padding utility class
 *   - Anchor IDs for nav scroll-to links
 *
 * Background alternation sequence (from docs/DesignSystem.md §12):
 *   Hero, Trust Badges, Solution, Featured Work, Why Us  →  white
 *   Problem, Services, Process, FAQ                      →  gray
 *   Final CTA, Footer                                    →  dark
 *
 * Accessibility:
 *   - Renders as <section> with an optional aria-labelledby for screen readers
 *   - Pass `labelledBy` with the id of the section's heading
 */

import { cn } from '@/lib/cn'
import type { ReactNode } from 'react'

// ─── Types ────────────────────────────────────────────────────

type SectionVariant = 'white' | 'gray' | 'dark'
type SectionPadding = 'default' | 'none' | 'top-only' | 'bottom-only'

interface SectionProps {
  variant?: SectionVariant
  padding?: SectionPadding
  id?: string
  labelledBy?: string
  className?: string
  children: ReactNode
}

// ─── Styles ───────────────────────────────────────────────────

const variantClasses: Record<SectionVariant, string> = {
  white: 'section-white',
  gray: 'section-gray',
  dark: 'section-dark',
}

const paddingClasses: Record<SectionPadding, string> = {
  default: 'section-padding',
  none: '',
  'top-only': 'pt-section-sm sm:pt-section-md lg:pt-section-lg xl:pt-section-xl',
  'bottom-only': 'pb-section-sm sm:pb-section-md lg:pb-section-lg xl:pb-section-xl',
}

// ─── Component ────────────────────────────────────────────────

export function Section({
  variant = 'white',
  padding = 'default',
  id,
  labelledBy,
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(variantClasses[variant], paddingClasses[padding], className)}
    >
      {children}
    </section>
  )
}
