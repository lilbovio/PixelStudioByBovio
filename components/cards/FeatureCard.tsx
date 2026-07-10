/**
 * FeatureCard — displays a "Why Us" value proposition item.
 *
 * Visual upgrade:
 *   - Left-aligned icon above content (editorial layout)
 *   - Thin left border accent appears on hover for a selected/active feel
 *   - Generous internal spacing
 *   - Icon container uses subtle bg with hover tint
 */

import { cn } from '@/lib/cn'
import { DynamicIcon } from '@/components/icons/DynamicIcon'
import type { WhyUsItem } from '@/constants/whyUs'

interface FeatureCardProps {
  item: WhyUsItem
  className?: string
}

export function FeatureCard({ item, className }: FeatureCardProps) {
  return (
    <article
      className={cn(
        'group relative flex flex-col gap-4 p-6',
        'rounded-xl border border-border bg-surface',
        'shadow-soft',
        'duration-normal transition-all ease-smooth',
        'hover:-translate-y-0.5 hover:border-border-strong hover:shadow-medium',
        // Left accent line on hover
        'overflow-hidden',
        className
      )}
    >
      {/* Left accent line — slides in from left on hover */}
      <span
        aria-hidden="true"
        className={cn(
          'absolute top-4 bottom-4 left-0 w-0.5 rounded-r-full',
          'bg-accent/50',
          'origin-center scale-y-0 group-hover:scale-y-100',
          'duration-normal transition-transform ease-smooth'
        )}
      />

      {/* Icon */}
      <div
        className="duration-normal flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors group-hover:bg-accent-muted"
        style={{ backgroundColor: 'var(--color-bg-secondary)' }}
      >
        <DynamicIcon
          name={item.icon}
          size={18}
          strokeWidth={1.75}
          aria-hidden="true"
          className="duration-normal text-text-secondary transition-colors group-hover:text-accent"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1.5">
        <h3 className="type-heading-sm text-text-primary">{item.title}</h3>
        <p className="type-body leading-relaxed text-text-muted">{item.description}</p>
      </div>
    </article>
  )
}
