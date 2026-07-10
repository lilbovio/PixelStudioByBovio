/**
 * FloatingNavbar — sticky floating glass navigation.
 *
 * Design:
 *   - At scroll 0: transparent, no border, full-width
 *   - After 20px: transforms into a centred floating pill/card
 *     with glass background, subtle shadow, and rounded corners
 *   - The "floating pill" effect is achieved by adding horizontal
 *     margin + border-radius once scrolled — not a simple bg fade
 *
 * Motion spec:
 *   - Background, shadow, radius all animate via CSS transitions
 *   - 240ms ease-smooth — barely noticeable, feels physical
 *
 * Layout:
 *   - Logo left, nav links centered, CTA right
 *   - Mobile: logo left, hamburger right
 */

'use client'

import { useState }             from 'react'
import { motion }               from 'framer-motion'
import { Menu }                 from 'lucide-react'
import Link                     from 'next/link'
import { useScrollY }           from '@/hooks/useScrollY'
import { useReducedMotion }     from '@/hooks/useReducedMotion'
import { navbarScrolled }       from '@/lib/motion'
import { navItems, navCTA }     from '@/constants/navigation'
import { buildWhatsAppURL }     from '@/lib/whatsapp'
import { NavLink }              from './NavLink'
import { MobileMenu }           from './MobileMenu'
import { Logomark }             from '@/components/icons/Logomark'
import { Button }               from '@/components/ui/Button'
import { cn }                   from '@/lib/cn'

// ─── Component ────────────────────────────────────────────────

export function FloatingNavbar() {
  const scrollY      = useScrollY()
  const shouldReduce = useReducedMotion()
  const [menuOpen, setMenuOpen] = useState(false)

  const hasScrolled  = scrollY > 20
  const whatsappUrl  = buildWhatsAppURL()

  return (
    <>
      {/* ── Skip link — first focusable on the page ─────────── */}
      <a
        href="#main-content"
        className={cn(
          'sr-only focus:not-sr-only',
          'fixed top-4 left-4 z-tooltip',
          'bg-surface border border-border rounded-md px-4 py-2',
          'type-btn text-text-primary shadow-elevated',
          'focus-visible:outline-2 focus-visible:outline-accent',
        )}
      >
        Skip to main content
      </a>

      {/* ── Outer wrapper — full width, sticky ───────────────── */}
      <div
        className={cn(
          'fixed top-0 inset-x-0 z-sticky',
          'flex justify-center',
          'pointer-events-none', // let clicks pass through the wrapper
        )}
      >
        {/* ── Inner nav bar — animates width + radius ──────── */}
        <motion.header
          variants={shouldReduce ? undefined : navbarScrolled}
          animate={hasScrolled ? 'scrolled' : 'top'}
          initial="top"
          role="banner"
          className={cn(
            // Full width at top, shrinks to pill when scrolled
            'pointer-events-auto w-full',
            'transition-all duration-normal ease-smooth',
            hasScrolled
              ? 'mt-3 mx-4 md:mx-6 lg:mx-8 rounded-2xl glass shadow-navbar'
              : 'border-b border-transparent',
            shouldReduce && hasScrolled && 'bg-surface/80 backdrop-blur-md border border-border/50',
          )}
        >
          <div className={cn(
            'mx-auto w-full px-4 sm:px-5',
            !hasScrolled && 'max-w-container px-5 sm:px-8 lg:px-12',
          )}>
            <div className="flex h-14 items-center justify-between">

              {/* Logo */}
              <Link
                href="/"
                aria-label="Pixel Studio by Bovio — Home"
                className={cn(
                  'text-[1rem] focus-visible:outline-2 focus-visible:outline-offset-4',
                  'focus-visible:outline-accent rounded-sm',
                )}
              >
                <Logomark variant="mark" scheme="dark" />
              </Link>

              {/* Desktop nav — hidden on mobile */}
              <nav aria-label="Main navigation" className="hidden md:flex items-center gap-7">
                {navItems.map((item) => (
                  <NavLink key={item.href} href={item.href}>
                    {item.label}
                  </NavLink>
                ))}
              </nav>

              {/* Right: CTA + hamburger */}
              <div className="flex items-center gap-2.5">
                {/* Desktop CTA */}
                <Button
                  href={whatsappUrl}
                  variant="primary"
                  size="sm"
                  className="hidden sm:inline-flex"
                  aria-label="Start a project on WhatsApp"
                >
                  {navCTA.label}
                </Button>

                {/* Mobile hamburger */}
                <button
                  aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                  aria-expanded={menuOpen}
                  aria-controls="mobile-menu"
                  onClick={() => setMenuOpen(true)}
                  className={cn(
                    'md:hidden flex items-center justify-center size-9 rounded-lg',
                    'text-text-muted hover:text-text-primary hover:bg-bg-secondary',
                    'transition-colors duration-fast ease-smooth',
                    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
                  )}
                >
                  <Menu size={18} strokeWidth={1.75} aria-hidden="true" />
                </button>
              </div>

            </div>
          </div>
        </motion.header>
      </div>

      {/* ── Mobile menu (rendered outside nav for z-index) ─── */}
      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  )
}
