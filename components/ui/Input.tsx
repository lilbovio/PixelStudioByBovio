/**
 * Input — single-line text input.
 *
 * Features:
 *   - Large touch-friendly height (48px default)
 *   - Accent-colored focus ring (not default blue browser ring)
 *   - Calm error state — no shake, no aggressive red
 *   - aria-describedby wiring for error messages (pass errorId)
 *   - Optional label rendered above the input
 *   - Optional helper text rendered below
 *
 * Accessibility:
 *   - Label is always associated via htmlFor/id
 *   - Error message linked via aria-describedby
 *   - aria-invalid signals error state to screen readers
 *   - Required fields get aria-required
 */

'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/cn'

// ─── Types ────────────────────────────────────────────────────

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?:       string
  helperText?:  string
  errorMessage?: string
  /** id of the element containing the error message, for aria-describedby */
  errorId?:     string
  className?:   string
}

// ─── Styles ───────────────────────────────────────────────────

const inputBase = [
  // Layout
  'w-full h-12 px-4',
  // Typography
  'text-body text-text-primary placeholder:text-text-disabled',
  // Shape
  'rounded-sm bg-surface',
  // Border — default state
  'border border-border',
  // Transitions
  'transition-all duration-fast ease-smooth',
  // Focus — overrides :focus-visible from globals
  'outline-none',
  'focus:border-accent focus:ring-2 focus:ring-accent/12',
  // Error state
  'aria-[invalid=true]:border-error aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-error/8',
  // Disabled
  'disabled:bg-bg-secondary disabled:text-text-disabled disabled:cursor-not-allowed',
] as const

// ─── Component ────────────────────────────────────────────────

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, helperText, errorMessage, errorId, className, id, required, ...rest },
  ref
) {
  const inputId   = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)
  const hasError  = Boolean(errorMessage)
  const describedBy = errorId ?? (hasError && inputId ? `${inputId}-error` : undefined)

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={inputId}
          className="type-label text-text-secondary"
        >
          {label}
          {required && (
            <span className="ml-0.5 text-error" aria-hidden="true">*</span>
          )}
        </label>
      )}

      <input
        ref={ref}
        id={inputId}
        required={required}
        aria-required={required}
        aria-invalid={hasError}
        aria-describedby={describedBy}
        className={cn(inputBase, className)}
        {...rest}
      />

      {/* Error message */}
      {hasError && errorMessage && (
        <p
          id={describedBy}
          role="alert"
          className="type-caption text-error"
        >
          {errorMessage}
        </p>
      )}

      {/* Helper text — only shown when no error */}
      {!hasError && helperText && (
        <p className="type-caption text-text-muted">{helperText}</p>
      )}
    </div>
  )
})
