/**
 * IconWrapper — consistent icon sizing and visual container.
 *
 * Ensures every icon across the site shares the same visual language:
 *   - Consistent sizes (sm: 16px, md: 20px, lg: 24px, xl: 32px)
 *   - Optional background variants for feature cards and process steps
 *
 * Variants:
 *   plain   — icon only, no background (nav, inline text)
 *   soft    — very light tinted background (service cards, features)
 *   outline — subtle border with light background (process steps)
 *
 * All Lucide icons are already sized via their `size` prop.
 * This wrapper ensures the surrounding space is consistent.
 *
 * Accessibility:
 *   - Decorative icons: pass aria-hidden via the icon's own props
 *   - Meaningful icons: pass aria-label to the icon's own props
 *   - This wrapper never adds aria attributes — delegate to the icon
 */

import { cn } from '@/lib/cn'
import type { ReactNode } from 'react'

// ─── Types ────────────────────────────────────────────────────

type IconWrapperSize = 'sm' | 'md' | 'lg' | 'xl'
type IconWrapperVariant = 'plain' | 'soft' | 'outline'

interface IconWrapperProps {
  size?: IconWrapperSize
  variant?: IconWrapperVariant
  /** Override color class for the icon. Defaults to text-text-muted */
  color?: string
  className?: string
  children: ReactNode
}

// ─── Styles ───────────────────────────────────────────────────

const sizes: Record<IconWrapperSize, string> = {
  sm: 'size-8',
  md: 'size-10',
  lg: 'size-12',
  xl: 'size-14',
}

const variants: Record<IconWrapperVariant, string> = {
  plain: 'bg-transparent',
  soft: 'bg-bg-secondary rounded-md',
  outline: 'bg-surface border border-border rounded-md',
}

// ─── Component ────────────────────────────────────────────────

export function IconWrapper({
  size = 'md',
  variant = 'plain',
  color = 'text-text-secondary',
  className,
  children,
}: IconWrapperProps) {
  return (
    <div
      className={cn(
        'flex shrink-0 items-center justify-center',
        sizes[size],
        variants[variant],
        color,
        className
      )}
    >
      {children}
    </div>
  )
}
