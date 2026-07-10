/**
 * FAQItem — single accordion item with smooth height animation.
 *
 * Motion spec (docs/MotionLanguage.md §8):
 *   - Height: 0 → auto via Framer Motion layout animation
 *   - Content opacity fades in after height opens
 *   - Icon rotates 180° on open
 *   - Duration: 350ms ease-in-out
 *   - Never snaps open — always smooth
 *
 * Accessibility:
 *   - Button has aria-expanded
 *   - Panel has role="region" and aria-labelledby pointing to the button
 *   - Only one item can be open at a time (controlled by parent FAQSection)
 *   - Fully keyboard navigable (Tab + Enter/Space)
 *
 * Reduced motion:
 *   - Height animation still runs (structural, not decorative)
 *   - Blur and opacity transitions are disabled
 */

'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { faqContent, faqIcon, DURATION, EASE } from '@/lib/motion'
import { cn } from '@/lib/cn'
import type { FAQItem as FAQItemType } from '@/constants/faqs'

// ─── Types ────────────────────────────────────────────────────

interface FAQItemProps {
  item: FAQItemType
  isOpen: boolean
  onToggle: () => void
  /** Used for aria-labelledby/region id pairing */
  index: number
}

// ─── Component ────────────────────────────────────────────────

export function FAQItem({ item, isOpen, onToggle, index }: FAQItemProps) {
  const shouldReduce = useReducedMotion()

  const buttonId = `faq-btn-${index}`
  const panelId = `faq-panel-${index}`

  return (
    <div className="border-b border-border last:border-b-0">
      {/* ── Trigger button ─────────────────────────────────── */}
      <button
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className={cn(
          'group flex w-full items-center justify-between gap-4',
          'py-5 text-left',
          'type-heading-sm text-text-primary',
          'cursor-pointer',
          'duration-fast transition-colors ease-smooth',
          'hover:text-text-secondary',
          'rounded-sm focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none'
        )}
      >
        <span>{item.question}</span>

        {/* Rotating chevron icon */}
        <motion.span
          aria-hidden="true"
          variants={shouldReduce ? undefined : faqIcon}
          animate={isOpen ? 'open' : 'closed'}
          className="duration-fast shrink-0 text-text-muted transition-colors group-hover:text-text-secondary"
        >
          <ChevronDown size={20} strokeWidth={1.75} aria-hidden="true" />
        </motion.span>
      </button>

      {/* ── Answer panel ───────────────────────────────────── */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            key={panelId}
            initial={{ height: 0 }}
            animate={{
              height: 'auto',
              transition: {
                duration: shouldReduce ? 0 : DURATION.medium,
                ease: EASE.inOut,
              },
            }}
            exit={{
              height: 0,
              transition: {
                duration: shouldReduce ? 0 : DURATION.fast,
                ease: EASE.inOut,
              },
            }}
            className="overflow-hidden"
          >
            <motion.p
              variants={shouldReduce ? undefined : faqContent}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="type-body-lg pr-10 pb-5 leading-relaxed text-text-muted"
            >
              {item.answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
