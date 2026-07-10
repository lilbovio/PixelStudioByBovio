/**
 * Heading — semantic heading element with decoupled visual size.
 *
 * This component exists to enforce correct heading hierarchy without
 * coupling the visual size to the semantic level.
 *
 * Example: A card title is visually a heading-md, but semantically
 * it may be an h3 inside a section that already has an h2. This
 * component expresses both independently.
 *
 * Usage:
 *   <Heading level={2} size="xl">Our Services</Heading>
 *   <Heading level={3} size="md">Landing Pages</Heading>
 *   <Heading level={2} size="hero" className="text-center">...</Heading>
 *
 * Accessibility:
 *   - `level` sets the HTML element (h1–h6)
 *   - One h1 per page — enforced by discipline, not by this component
 *   - Never skip heading levels
 */

import { cn } from '@/lib/cn'
import type { ReactNode } from 'react'

// ─── Types ────────────────────────────────────────────────────

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6
type HeadingSize  = 'hero' | 'display' | 'xl' | 'lg' | 'md' | 'sm'

interface HeadingProps {
  level:      HeadingLevel
  size?:      HeadingSize
  /** Override the color. Defaults to text-text-primary via .type-* class. */
  color?:     'primary' | 'inverse' | 'muted' | 'inherit'
  balance?:   boolean
  className?: string
  children:   ReactNode
  id?:        string
}

// ─── Maps ─────────────────────────────────────────────────────

/** Maps level → default size when `size` prop is not passed */
const defaultSizes: Record<HeadingLevel, HeadingSize> = {
  1: 'hero',
  2: 'xl',
  3: 'lg',
  4: 'md',
  5: 'sm',
  6: 'sm',
}

const sizeClasses: Record<HeadingSize, string> = {
  hero:    'type-hero',
  display: 'type-display',
  xl:      'type-heading-xl',
  lg:      'type-heading-lg',
  md:      'type-heading-md',
  sm:      'type-heading-sm',
}

const colorClasses: Record<NonNullable<HeadingProps['color']>, string> = {
  primary: 'text-text-primary',
  inverse: 'text-text-inverse',
  muted:   'text-text-muted',
  inherit: 'text-inherit',
}

// ─── Component ────────────────────────────────────────────────

export function Heading({
  level,
  size,
  color = 'primary',
  balance = true,
  className,
  children,
  id,
}: HeadingProps) {
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  const resolvedSize = size ?? defaultSizes[level]

  return (
    <Tag
      id={id}
      className={cn(
        sizeClasses[resolvedSize],
        colorClasses[color],
        balance && 'text-balance',
        className
      )}
    >
      {children}
    </Tag>
  )
}
