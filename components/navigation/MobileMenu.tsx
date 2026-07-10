/**
 * MobileMenu — full-screen slide-down drawer for mobile navigation.
 *
 * Motion spec:
 *   - Overlay fades in (opacity 0→1, 240ms)
 *   - Panel slides down from -8px + fades in (350ms outExpo)
 *   - Exit is faster (150ms)
 *
 * Accessibility:
 *   - id="mobile-menu" matches aria-controls on the hamburger button
 *   - role="dialog" + aria-modal="true" + aria-label
 *   - Focus trap — Tab cycles within the open menu
 *   - ESC closes the menu
 *   - Backdrop click closes the menu
 *   - Focus returns to the hamburger button on close
 *
 * Client Component — manages open/close state and keyboard interactions.
 */

'use client'

import Link from 'next/link'
import { useEffect, useRef, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { mobileMenuOverlay, mobileMenuPanel } from '@/lib/motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { navItems, navCTA } from '@/constants/navigation'
import { buildWhatsAppURL } from '@/lib/whatsapp'
import { NavLink } from './NavLink'
import { Logomark } from '@/components/icons/Logomark'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'

// ─── Types ────────────────────────────────────────────────────

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

// ─── Component ────────────────────────────────────────────────

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const shouldReduce = useReducedMotion()
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const whatsappUrl = buildWhatsAppURL()
  const pathname = usePathname()

  // ── Close menu on route change ────────────────────────────
  // Handles the case where a NavLink navigates to a new page while
  // the menu is open — ensures the drawer closes even if onClick
  // was not fired (e.g., keyboard navigation, programmatic routing).
  useEffect(() => {
    if (isOpen) onClose()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  // ── Focus management ──────────────────────────────────────
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => closeButtonRef.current?.focus(), 50)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  // ── ESC key ───────────────────────────────────────────────
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // ── Body scroll lock ──────────────────────────────────────
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // ── Focus trap ────────────────────────────────────────────
  const handleTabKey = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'Tab') return
    const panel = e.currentTarget
    const focusable = panel.querySelectorAll<HTMLElement>(
      'button, [href], input, [tabindex]:not([tabindex="-1"])'
    )
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (!first || !last) return
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }, [])

  const noMotion = shouldReduce
  const overlayV = noMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 }, exit: { opacity: 0 } }
    : mobileMenuOverlay
  const panelV = noMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 }, exit: { opacity: 0 } }
    : mobileMenuPanel

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ── Backdrop ────────────────────────────────── */}
          <motion.div
            key="menu-overlay"
            variants={overlayV}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-overlay bg-black/40 md:hidden"
            aria-hidden="true"
            onClick={onClose}
          />

          {/* ── Panel ───────────────────────────────────── */}
          <motion.div
            id="mobile-menu"
            key="menu-panel"
            variants={panelV}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            onKeyDown={handleTabKey}
            className={cn(
              'fixed inset-x-0 top-0 z-modal',
              'glass border-b border-border-subtle shadow-elevated',
              'md:hidden',
              'focus:outline-none'
            )}
          >
            {/* Top bar */}
            <div className="flex h-16 items-center justify-between border-b border-border px-5">
              <Link
                href="/"
                onClick={onClose}
                aria-label="Pixel Studio by Bovio — Home"
                className="rounded-sm text-[1.125rem] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <Logomark variant="mark" scheme="dark" />
              </Link>

              <button
                ref={closeButtonRef}
                onClick={onClose}
                aria-label="Close navigation menu"
                className={cn(
                  'flex size-10 items-center justify-center rounded-md',
                  'text-text-secondary hover:bg-bg-secondary hover:text-text-primary',
                  'duration-fast transition-colors ease-smooth',
                  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'
                )}
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            {/* Nav links */}
            <nav aria-label="Mobile navigation" className="px-5">
              {navItems.map((item) => (
                <NavLink key={item.href} href={item.href} size="mobile" onClick={onClose}>
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* CTA */}
            <div className="px-5 py-6">
              <Button
                href={whatsappUrl}
                variant="primary"
                size="lg"
                className="w-full"
                aria-label="Start a project on WhatsApp"
              >
                {navCTA.label}
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
