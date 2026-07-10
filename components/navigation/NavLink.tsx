/**
 * NavLink — navigation link with animated underline on hover/active.
 *
 * Motion spec:
 *   - Underline grows from left to right on hover (scaleX 0→1)
 *   - Active page underline is always visible (accent color)
 *   - Text color transitions from muted → primary on hover
 *   - Duration: 150ms ease-smooth
 *
 * Used in FloatingNavbar (desktop) and MobileMenu.
 * Not used for the CTA button — that uses the Button component.
 */

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/cn'

// ─── Types ────────────────────────────────────────────────────

interface NavLinkProps {
  href:       string
  children:   React.ReactNode
  /** Close mobile menu when a link is clicked */
  onClick?:   () => void
  className?: string
  /** Desktop nav (small text, horizontal) vs mobile (large text, stacked) */
  size?:      'desktop' | 'mobile'
}

// ─── Component ────────────────────────────────────────────────

export function NavLink({ href, children, onClick, className, size = 'desktop' }: NavLinkProps) {
  const pathname  = usePathname()
  const isActive  = pathname === href || (href !== '/' && pathname.startsWith(href))

  if (size === 'mobile') {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={cn(
          'block w-full',
          'type-heading-md text-text-primary',
          'py-4 border-b border-border',
          'transition-colors duration-fast ease-smooth',
          isActive ? 'text-accent' : 'hover:text-text-muted',
          className
        )}
        aria-current={isActive ? 'page' : undefined}
      >
        {children}
      </Link>
    )
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        // Layout — 'group' enables the underline's group-hover
        'group relative inline-flex flex-col items-center',
        // Typography — slightly tighter for premium nav feel
        'type-btn',
        // Color transition
        'transition-colors duration-fast ease-smooth',
        isActive
          ? 'text-text-primary font-medium'
          : 'text-text-muted hover:text-text-primary',
        className
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}

      {/* Animated underline — scales from left on hover, always visible when active */}
      <span
        aria-hidden="true"
        className={cn(
          'absolute -bottom-0.5 left-0 h-px w-full origin-left',
          'bg-accent',
          'transition-transform duration-fast ease-smooth',
          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        )}
      />
    </Link>
  )
}
