/**
 * ProcessStep — single numbered step in the process sequence.
 *
 * Visual upgrade:
 *   - Large outlined step number (editorial feel)
 *   - Clean title + description with generous spacing
 *   - Timeline badge at bottom
 *   - No icon competing with the step number
 */

import { Clock } from 'lucide-react'
import { cn } from '@/lib/cn'
import type { ProcessStep as ProcessStepType } from '@/constants/process'

interface ProcessStepProps {
  step:       ProcessStepType
  isLast:     boolean
  className?: string
}

export function ProcessStep({ step, isLast, className }: ProcessStepProps) {
  return (
    <div
      className={cn(
        'relative flex flex-row lg:flex-col gap-5 lg:gap-6',
        'flex-1',
        className
      )}
    >
      {/* ── Step number + mobile connector ────────────────────── */}
      <div className="flex flex-col items-center lg:items-start gap-2 shrink-0">
        {/* Step number — large, outlined for editorial feel */}
        <div
          className={cn(
            'flex items-center justify-center',
            'w-10 h-10 rounded-xl shrink-0',
            'bg-surface border-2 border-border',
            'text-text-primary',
          )}
          style={{
            fontSize: '0.8125rem',
            fontWeight: 700,
            letterSpacing: '-0.01em',
          }}
          aria-hidden="true"
        >
          {step.step.toString().padStart(2, '0')}
        </div>

        {/* Vertical connector between steps on mobile */}
        {!isLast && (
          <div
            className="w-px flex-1 bg-border lg:hidden min-h-[32px]"
            aria-hidden="true"
          />
        )}
      </div>

      {/* ── Text content ─────────────────────────────────────── */}
      <div className="flex flex-col gap-2.5 pb-6 lg:pb-0">
        <h3 className="type-heading-sm text-text-primary">{step.title}</h3>

        <p className="type-body text-text-muted leading-relaxed">
          {step.description}
        </p>

        {/* Timeline badge */}
        <div className="flex items-center gap-1.5 mt-1">
          <Clock
            size={12}
            strokeWidth={1.75}
            className="text-text-disabled shrink-0"
            aria-hidden="true"
          />
          <span className="type-body-sm text-text-disabled">{step.timeline}</span>
        </div>
      </div>
    </div>
  )
}
