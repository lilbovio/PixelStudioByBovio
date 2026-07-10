/**
 * Textarea — multi-line text input.
 *
 * Shares all design decisions with Input:
 *   - Same token-based border/focus/error styles
 *   - Same label/helper/error accessibility wiring
 *   - Auto-resizes vertically based on `rows` (default: 4)
 *
 * Note: the contact page does not have a form at launch (OQ-004),
 * but this component is ready if a form is ever added.
 */

'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/cn'

// ─── Types ────────────────────────────────────────────────────

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  helperText?: string
  errorMessage?: string
  errorId?: string
  className?: string
}

// ─── Styles ───────────────────────────────────────────────────

const textareaBase = [
  'w-full px-4 py-3',
  'text-body text-text-primary placeholder:text-text-disabled',
  'rounded-sm bg-surface',
  'border border-border',
  'transition-all duration-fast ease-smooth',
  'outline-none resize-y',
  'focus:border-accent focus:ring-2 focus:ring-accent/12',
  'aria-[invalid=true]:border-error aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-error/8',
  'disabled:bg-bg-secondary disabled:text-text-disabled disabled:cursor-not-allowed',
  // Minimum comfortable height
  'min-h-[112px]',
] as const

// ─── Component ────────────────────────────────────────────────

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, helperText, errorMessage, errorId, className, id, required, rows = 4, ...rest },
  ref
) {
  const textareaId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)
  const hasError = Boolean(errorMessage)
  const describedBy = errorId ?? (hasError && textareaId ? `${textareaId}-error` : undefined)

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={textareaId} className="type-label text-text-secondary">
          {label}
          {required && (
            <span className="ml-0.5 text-error" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}

      <textarea
        ref={ref}
        id={textareaId}
        rows={rows}
        required={required}
        aria-required={required}
        aria-invalid={hasError}
        aria-describedby={describedBy}
        className={cn(textareaBase, className)}
        {...rest}
      />

      {hasError && errorMessage && (
        <p id={describedBy} role="alert" className="type-caption text-error">
          {errorMessage}
        </p>
      )}

      {!hasError && helperText && <p className="type-caption text-text-muted">{helperText}</p>}
    </div>
  )
})
