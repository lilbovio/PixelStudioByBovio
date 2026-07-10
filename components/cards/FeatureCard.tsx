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
  item:       WhyUsItem
  className?: string
}

export function FeatureCard({ item, className }: FeatureCardProps) {
  return (
    <article
      className={cn(
        'group relative flex flex-col gap-4 p-6',
        'bg-surface rounded-xl border border-border',
        'shadow-soft',
        'transition-all duration-normal ease-smooth',
        'hover:-translate-y-0.5 hover:shadow-medium hover:border-border-strong',
        // Left accent line on hover
        'overflow-hidden',
        className
      )}
    >
      {/* Left accent line — slides in from left on hover */}
      <span
        aria-hidden="true"
        className={cn(
          'absolute left-0 top-4 bottom-4 w-0.5 rounded-r-full',
          'bg-accent/50',
          'scale-y-0 group-hover:scale-y-100 origin-center',
          'transition-transform duration-normal ease-smooth',
        )}
      />

      {/* Icon */}
      <div
        className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0 transition-colors duration-normal group-hover:bg-accent-muted"
        style={{ backgroundColor: 'var(--color-bg-secondary)' }}
      >
        <DynamicIcon
          name={item.icon}
          size={18}
          strokeWidth={1.75}
          aria-hidden="true"
          className="text-text-secondary group-hover:text-accent transition-colors duration-normal"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1.5">
        <h3 className="type-heading-sm text-text-primary">{item.title}</h3>
        <p className="type-body text-text-muted leading-relaxed">
          {item.description}
        </p>
      </div>
    </article>
  )
}
