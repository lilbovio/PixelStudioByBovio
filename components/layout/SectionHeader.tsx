/**
 * SectionHeader — standardised section introduction block.
 *
 * Visual upgrade:
 *   - Eyebrow label uses a refined small-caps style with left border accent
 *   - Headline uses improved letter-spacing from upgraded type tokens
 *   - Subheadline gets generous line-height and max-width constraint
 */

import { cn } from '@/lib/cn'
import { Heading } from '@/components/ui/Heading'
import type { ReactNode } from 'react'

type SectionHeaderAlign = 'left' | 'center'

interface SectionHeaderProps {
  label?: string
  headline: string
  subheadline?: string | ReactNode
  align?: SectionHeaderAlign
  headingId?: string
  scheme?: 'light' | 'dark'
  className?: string
}

export function SectionHeader({
  label,
  headline,
  subheadline,
  align = 'left',
  headingId,
  scheme = 'light',
  className,
}: SectionHeaderProps) {
  const isCentered = align === 'center'
  const isDark = scheme === 'dark'

  return (
    <div className={cn('flex flex-col gap-5', isCentered && 'items-center text-center', className)}>
      {label && (
        <div className={cn('inline-flex items-center', isCentered && 'justify-center')}>
          <span
            className={cn(
              'type-label inline-flex items-center gap-2',
              isDark ? 'text-white/45' : 'text-text-muted'
            )}
          >
            {/* Small accent dot */}
            <span
              className={cn(
                'h-1.5 w-1.5 shrink-0 rounded-full',
                isDark ? 'bg-white/30' : 'bg-accent/50'
              )}
              aria-hidden="true"
            />
            {label}
          </span>
        </div>
      )}

      <Heading
        level={2}
        size="xl"
        id={headingId}
        color={isDark ? 'inverse' : 'primary'}
        className={isCentered ? 'mx-auto' : undefined}
      >
        {headline}
      </Heading>

      {subheadline && (
        <p
          className={cn(
            'type-body-lg max-w-[600px]',
            isDark ? 'text-white/50' : 'text-text-muted',
            isCentered && 'mx-auto'
          )}
        >
          {subheadline}
        </p>
      )}
    </div>
  )
}
