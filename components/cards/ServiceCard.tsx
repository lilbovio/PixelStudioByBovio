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
  service:    Service
  className?: string
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <article
      className={cn(
        'group flex flex-col gap-5 p-6 h-full',
        'bg-surface rounded-xl border border-border',
        'shadow-soft',
        'transition-all duration-normal ease-smooth',
        'hover:-translate-y-1 hover:shadow-medium hover:border-border-strong',
        className
      )}
    >
      {/* Icon — subtle accent tint on the box */}
      <div
        className="flex items-center justify-center w-11 h-11 rounded-xl shrink-0 transition-colors duration-normal group-hover:bg-accent-muted"
        style={{ backgroundColor: 'var(--color-bg-secondary)' }}
      >
        <DynamicIcon
          name={service.icon}
          size={20}
          strokeWidth={1.75}
          aria-hidden="true"
          className="text-text-secondary group-hover:text-accent transition-colors duration-normal"
        />
      </div>

      {/* Text content */}
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="type-heading-sm text-text-primary">{service.name}</h3>
        <p className="type-body text-text-muted leading-relaxed flex-1">
          {service.description}
        </p>
      </div>

      {/* Outcome — business value callout */}
      <div className="flex items-start gap-2 border-t border-border pt-4">
        <span
          className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0"
          aria-hidden="true"
        />
        <p className="type-body-sm text-text-secondary leading-snug">
          {service.outcome}
        </p>
      </div>
    </article>
  )
}
