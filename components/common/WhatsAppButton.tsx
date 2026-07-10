/**
 * WhatsAppButton — floating sticky CTA button.
 *
 * Motion spec (docs/MotionLanguage.md):
 *   - Appears after the user scrolls 300px (per spec)
 *   - Enter: scales up from 0.8 + fades in + rises 16px (350ms outExpo)
 *   - Exit:  scales down + fades out (150ms)
 *
 * Positioning: fixed bottom-right, z-floating (50)
 * Size: 56×56px minimum touch target
 *
 * Accessibility:
 *   - aria-label explains the destination precisely
 *   - Opens WhatsApp in a new tab
 *   - icon is aria-hidden (label carries the meaning)
 */

'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle }           from 'lucide-react'
import { useScrollY }              from '@/hooks/useScrollY'
import { useReducedMotion }        from '@/hooks/useReducedMotion'
import { whatsappButton }          from '@/lib/motion'
import { buildWhatsAppURL }        from '@/lib/whatsapp'
import { cn }                      from '@/lib/cn'

// ─── Component ────────────────────────────────────────────────

export function WhatsAppButton() {
  const scrollY      = useScrollY()
  const shouldReduce = useReducedMotion()
  const isVisible    = scrollY > 300
  const whatsappUrl  = buildWhatsAppURL()

  const variants = shouldReduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 }, exit: { opacity: 0 } }
    : whatsappButton

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          key="whatsapp-fab"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Start a conversation on WhatsApp"
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={cn(
            // Position + layer
            'fixed bottom-6 right-6 z-floating',
            // Size — meets 56px minimum touch target
            'size-14',
            // Shape + color
            'rounded-full bg-[#25D366]',
            // Icon color
            'text-white',
            // Layout
            'flex items-center justify-center',
            // Premium shadow
            'shadow-[0_4px_16px_rgba(37,211,102,0.35),0_2px_6px_rgba(0,0,0,0.12)]',
            // Hover
            'hover:-translate-y-0.5',
            'hover:shadow-[0_6px_24px_rgba(37,211,102,0.45),0_2px_8px_rgba(0,0,0,0.14)]',
            // Transition
            'transition-all duration-fast ease-smooth',
            // Focus
            'focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#25D366]',
          )}
        >
          <MessageCircle
            size={26}
            strokeWidth={1.75}
            aria-hidden="true"
            fill="currentColor"
          />
        </motion.a>
      )}
    </AnimatePresence>
  )
}
