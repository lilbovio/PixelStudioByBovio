/**
 * Button — primary interactive element.
 *
 * Visual upgrade:
 *   primary   — rich near-black, warm off-white text, ultra-tight radius,
 *               layered shadow, smooth press state
 *   secondary — glass surface with warm border, frost hover effect
 *   ghost     — text only, clean hover with accent underline
 *
 * Polymorphic: pass `href` to render as Next.js Link.
 */

import Link from 'next/link'
import { cn } from '@/lib/cn'
import type { ReactNode } from 'react'

// ─── Types ────────────────────────────────────────────────────

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  disabled?: boolean
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  className?: string
  children: ReactNode
}

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined
  }

type ButtonAsLink = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string
  }

type ButtonProps = ButtonAsButton | ButtonAsLink

// ─── Styles ───────────────────────────────────────────────────

const base = [
  // Layout
  'relative inline-flex items-center justify-center gap-2',
  // Typography
  'type-btn whitespace-nowrap',
  // Shape
  'rounded-lg',
  // Interaction
  'select-none cursor-pointer',
  // Transition
  'transition-all duration-fast ease-smooth',
  // Focus
  'focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent',
  // Disabled
  'disabled:pointer-events-none disabled:opacity-40',
  'aria-disabled:pointer-events-none aria-disabled:opacity-40',
] as const

const variants: Record<ButtonVariant, string> = {
  primary: cn(
    // Rich dark background with warm off-white text
    'bg-btn-primary text-text-inverse',
    // Subtle inset highlight gives a "carved" premium feel
    'shadow-[0_1px_3px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.06)]',
    'border border-transparent',
    // Hover: lighter + lift
    'hover:-translate-y-px hover:bg-btn-primary-hover',
    'hover:shadow-[0_4px_12px_rgba(0,0,0,0.20),0_1px_3px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.06)]',
    // Press
    'active:translate-y-0 active:scale-[0.98] active:shadow-none'
  ),
  secondary: cn(
    // Glass surface
    'bg-surface/80 text-text-primary border border-border',
    'backdrop-blur-sm',
    'shadow-soft',
    // Hover: tighten border, slight bg
    'hover:bg-bg-secondary hover:border-border-strong',
    'hover:shadow-medium',
    'active:scale-[0.98]'
  ),
  ghost: cn(
    'bg-transparent text-text-muted border border-transparent',
    'hover:text-text-primary hover:bg-bg-secondary',
    'active:scale-[0.98]'
  ),
}

const sizes: Record<ButtonSize, string> = {
  sm: 'h-9  px-4   text-[0.875rem]',
  md: 'h-11 px-5',
  lg: 'h-12 px-7   text-base',
}

// ─── Spinner ──────────────────────────────────────────────────

function Spinner() {
  return (
    <svg
      aria-hidden="true"
      className="size-4 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  )
}

// ─── Component ────────────────────────────────────────────────

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    loading = false,
    disabled = false,
    icon,
    iconPosition = 'left',
    className,
    children,
    href,
    ...rest
  } = props

  const isDisabled = disabled || loading
  const classes = cn(base, variants[variant], sizes[size], className)

  const content = (
    <>
      {loading && <Spinner />}
      {!loading && icon && iconPosition === 'left' && <span aria-hidden="true">{icon}</span>}
      <span>{children}</span>
      {!loading && icon && iconPosition === 'right' && <span aria-hidden="true">{icon}</span>}
    </>
  )

  if (href !== undefined) {
    const isExternal =
      href.startsWith('http') || href.startsWith('https') || href.startsWith('wa.me')
    return (
      <Link
        href={href}
        className={classes}
        aria-disabled={isDisabled}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </Link>
    )
  }

  return (
    <button
      className={classes}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={loading}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  )
}
