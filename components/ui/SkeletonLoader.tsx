/**
 * SkeletonLoader — animated placeholder for loading states.
 *
 * Shows a shimmer effect while content loads.
 * Never show empty space — always use a skeleton.
 *
 * The shimmer animation is defined in globals.css (.skeleton class).
 * Speed is 1.4s — slow enough to feel calm, not anxious.
 *
 * Variants:
 *   line    — for text placeholders (1 line of text)
 *   block   — for card/image placeholders
 *   circle  — for avatar/icon placeholders
 *
 * Usage:
 *   <SkeletonLoader variant="line" width="75%" />
 *   <SkeletonLoader variant="block" className="h-48 w-full" />
 *   <SkeletonLoader variant="circle" className="size-12" />
 */

import { cn } from '@/lib/cn'

// ─── Types ────────────────────────────────────────────────────

type SkeletonVariant = 'line' | 'block' | 'circle'

interface SkeletonLoaderProps {
  variant?:   SkeletonVariant
  width?:     string | number
  className?: string
  /** aria-label for screen readers */
  label?:     string
}

// ─── Styles ───────────────────────────────────────────────────

const variants: Record<SkeletonVariant, string> = {
  line:   'h-4 rounded-sm',
  block:  'h-40 rounded-md',
  circle: 'rounded-full aspect-square',
}

// ─── Component ────────────────────────────────────────────────

export function SkeletonLoader({
  variant   = 'line',
  width,
  className,
  label     = 'Loading…',
}: SkeletonLoaderProps) {
  return (
    <div
      role="status"
      aria-label={label}
      className={cn('skeleton', variants[variant], className)}
      style={width ? { width } : undefined}
    />
  )
}

// ─── Compound: text block skeleton ────────────────────────────

/**
 * SkeletonText — a stack of skeleton lines that mimics a paragraph.
 * Pass `lines` to control how many lines appear.
 */
interface SkeletonTextProps {
  lines?:     number
  className?: string
}

export function SkeletonText({ lines = 3, className }: SkeletonTextProps) {
  return (
    <div role="status" aria-label="Loading…" className={cn('flex flex-col gap-2', className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <SkeletonLoader
          key={i}
          variant="line"
          // Last line is shorter — mirrors real paragraph endings
          width={i === lines - 1 ? '65%' : '100%'}
        />
      ))}
    </div>
  )
}

// ─── Compound: card skeleton ──────────────────────────────────

/**
 * SkeletonCard — a full card placeholder.
 * Mirrors the structure of ServiceCard and FeatureCard.
 */
export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div
      role="status"
      aria-label="Loading…"
      className={cn('rounded-md border border-border bg-surface p-6 flex flex-col gap-4', className)}
    >
      <SkeletonLoader variant="circle" className="size-10" />
      <SkeletonLoader variant="line" width="60%" />
      <SkeletonText lines={3} />
    </div>
  )
}
