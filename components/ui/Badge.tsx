/**
 * Badge — small label chip.
 *
 * Used for:
 *   - Service category labels
 *   - Project industry tags
 *   - Section eyebrow labels (e.g. "Our Services" above a heading)
 *   - "Design Concept" label on project cards
 *
 * Variants:
 *   default — neutral gray, used for tags
 *   accent  — brand blue tint, used for active/highlighted labels
 *   muted   — lightest, used for less-prominent metadata
 *   dark    — white text on near-black, for use on dark sections
 *
 * Sizes: sm | md
 */

import { cn } from '@/lib/cn'
import type { ReactNode } from 'react'

// ─── Types ────────────────────────────────────────────────────

type BadgeVariant = 'default' | 'accent' | 'muted' | 'dark'
type BadgeSize    = 'sm' | 'md'

interface BadgeProps {
  variant?:   BadgeVariant
  size?:      BadgeSize
  className?: string
  children:   ReactNode
}

// ─── Styles ───────────────────────────────────────────────────

const base = [
  'inline-flex items-center justify-center',
  'rounded-pill font-medium leading-none',
  'type-label tracking-wide',
  'whitespace-nowrap',
] as const

const variants: Record<BadgeVariant, string> = {
  default: 'bg-bg-tertiary text-text-muted border border-border',
  accent:  'bg-accent-light text-accent border border-accent/20',
  muted:   'bg-bg-secondary text-text-disabled border border-border',
  dark:    'bg-white/10 text-white/80 border border-white/20',
}

const sizes: Record<BadgeSize, string> = {
  sm: 'h-5 px-2   text-[0.6875rem]',
  md: 'h-6 px-2.5 text-[0.75rem]',
}

// ─── Component ────────────────────────────────────────────────

export function Badge({ variant = 'default', size = 'md', className, children }: BadgeProps) {
  return (
    <span className={cn(base, variants[variant], sizes[size], className)}>
      {children}
    </span>
  )
}
