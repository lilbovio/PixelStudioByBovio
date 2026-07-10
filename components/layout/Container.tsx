/**
 * Container — max-width wrapper with responsive horizontal padding.
 *
 * Every section's content lives inside a Container.
 * This is the only place max-width is set — never on sections directly.
 *
 * Max-width: 1280px (--spacing-container)
 * Padding:
 *   Mobile  →  px-5  (20px)
 *   Tablet  →  px-8  (32px)
 *   Desktop →  px-12 (48px)
 *
 * The `narrow` prop constrains to ~720px reading width for text-heavy pages.
 */

import { cn } from '@/lib/cn'
import type { ReactNode } from 'react'

// ─── Types ────────────────────────────────────────────────────

interface ContainerProps {
  /** Constrain to reading width (~720px) for long-form text */
  narrow?:    boolean
  className?: string
  children:   ReactNode
  as?:        'div' | 'section' | 'article' | 'header' | 'footer' | 'main'
}

// ─── Component ────────────────────────────────────────────────

export function Container({
  narrow    = false,
  className,
  children,
  as: Tag   = 'div',
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        'mx-auto w-full px-5 sm:px-8 lg:px-12',
        narrow ? 'max-w-reading' : 'max-w-container',
        className
      )}
    >
      {children}
    </Tag>
  )
}
