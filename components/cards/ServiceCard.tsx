/**
 * ServiceCard — displays a single service with icon, name, description and outcome.
 *
 * Visual upgrade:
 *   - Larger icon box with very subtle accent tint
 *   - Bottom outcome line gets a thin top separator + accent dot
 *   - Premium hover: border darkens + shadow deepens + subtle lift
 *   - Clean gap rhythm throughout
 */

import { cn } from '@/lib/cn'
import { DynamicIcon } from '@/components/icons/DynamicIcon'
import type { Service } from '@/constants/services'

interface ServiceCardProps {
  service: Service
  className?: string
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <article
      className={cn(
        'group flex h-full flex-col gap-5 p-6',
        'rounded-xl border border-border bg-surface',
        'shadow-soft',
        'duration-normal transition-all ease-smooth',
        'hover:-translate-y-1 hover:border-border-strong hover:shadow-medium',
        className
      )}
    >
      {/* Icon — subtle accent tint on the box */}
      <div
        className="duration-normal flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors group-hover:bg-accent-muted"
        style={{ backgroundColor: 'var(--color-bg-secondary)' }}
      >
        <DynamicIcon
          name={service.icon}
          size={20}
          strokeWidth={1.75}
          aria-hidden="true"
          className="duration-normal text-text-secondary transition-colors group-hover:text-accent"
        />
      </div>

      {/* Text content */}
      <div className="flex flex-1 flex-col gap-2">
        <h3 className="type-heading-sm text-text-primary">{service.name}</h3>
        <p className="type-body flex-1 leading-relaxed text-text-muted">{service.description}</p>
      </div>

      {/* Outcome — business value callout */}
      <div className="flex items-start gap-2 border-t border-border pt-4">
        <span
          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60"
          aria-hidden="true"
        />
        <p className="type-body-sm leading-snug text-text-secondary">{service.outcome}</p>
      </div>
    </article>
  )
}
