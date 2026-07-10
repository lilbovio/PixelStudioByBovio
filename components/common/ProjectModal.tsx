/**
 * ProjectModal — full-screen project detail overlay.
 *
 * Motion spec (docs/MotionLanguage.md):
 *   - Overlay fades in/out (opacity, 240ms)
 *   - Panel scales up from 0.96 + fades + slight y rise (350ms outExpo)
 *   - Exit mirrors enter (reversed, faster)
 *
 * Accessibility:
 *   - role="dialog" + aria-modal="true"
 *   - aria-labelledby pointing to the project title
 *   - Focus trap: first focusable element receives focus on open
 *   - ESC key closes
 *   - Backdrop click closes
 *   - Focus returns to trigger element on close
 *   - Body scroll locked while open
 */

'use client'

import { useEffect, useRef, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { modalOverlay, modalContent } from '@/lib/motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/cn'
import type { Project } from '@/constants/projects'

// ─── Types ────────────────────────────────────────────────────

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
  /** The trigger element that opened the modal — focus returns here on close */
  triggerRef?: React.RefObject<HTMLElement | null>
}

// ─── Component ────────────────────────────────────────────────

export function ProjectModal({ project, isOpen, onClose, triggerRef }: ProjectModalProps) {
  const shouldReduce = useReducedMotion()
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const titleId = 'modal-title'

  // ── Lock body scroll ──────────────────────────────────────
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
    } else {
      const scrollY = document.body.style.top
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      if (scrollY) window.scrollTo(0, parseInt(scrollY || '0', 10) * -1)
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
    }
  }, [isOpen])

  // ── Focus management ──────────────────────────────────────
  useEffect(() => {
    if (isOpen) {
      // Small delay allows the animation to begin before stealing focus
      const timer = setTimeout(() => closeButtonRef.current?.focus(), 50)
      return () => clearTimeout(timer)
    } else {
      // Return focus to the element that opened the modal
      triggerRef?.current?.focus()
    }
  }, [isOpen, triggerRef])

  // ── ESC key ───────────────────────────────────────────────
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose]
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, handleKeyDown])

  // ── Focus trap ────────────────────────────────────────────
  const handleTabKey = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'Tab') return
    const focusable = e.currentTarget.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
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

  // Overlay/panel animation variants — instant when reduced motion
  const overlayVariants = shouldReduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 }, exit: { opacity: 0 } }
    : modalOverlay
  const panelVariants = shouldReduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 }, exit: { opacity: 0 } }
    : modalContent

  return (
    <AnimatePresence>
      {isOpen && project && (
        <>
          {/* ── Backdrop ─────────────────────────────────── */}
          <motion.div
            key="modal-overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-overlay bg-black/50 backdrop-blur-sm"
            aria-hidden="true"
            onClick={onClose}
          />

          {/* ── Panel ────────────────────────────────────── */}
          <motion.div
            key="modal-content"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onKeyDown={handleTabKey}
            className={cn(
              'fixed inset-x-4 top-[5vh] bottom-[5vh]',
              'sm:inset-x-8 md:inset-x-[10%] lg:inset-x-[15%] xl:inset-x-[20%]',
              'z-modal overflow-y-auto overscroll-contain',
              'rounded-xl bg-surface shadow-elevated',
              'focus:outline-none'
            )}
          >
            {/* ── Close button ─────────────────────────── */}
            <div className="sticky top-0 z-10 flex justify-end border-b border-border bg-surface/80 p-4 backdrop-blur-sm">
              <button
                ref={closeButtonRef}
                onClick={onClose}
                aria-label="Close project details"
                className={cn(
                  'flex size-9 items-center justify-center rounded-md',
                  'text-text-muted hover:bg-bg-secondary hover:text-text-primary',
                  'duration-fast transition-colors ease-smooth',
                  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'
                )}
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            {/* ── Content ──────────────────────────────── */}
            <div className="p-6 sm:p-8 lg:p-10">
              {/* Header */}
              <div className="mb-8">
                <p className="type-label mb-2 text-text-muted">{project.industry}</p>
                <h2 id={titleId} className="type-heading-xl text-text-primary">
                  {project.title}
                </h2>
                <p className="type-body-lg mt-3 max-w-[640px] text-text-muted">
                  {project.description}
                </p>
              </div>

              {/* Cover image */}
              {project.coverImage && (
                <div className="mb-8 aspect-video overflow-hidden rounded-xl bg-bg-secondary">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.coverImage}
                    alt={`${project.title} — desktop preview`}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}

              {/* Two-column detail grid */}
              <div className="grid gap-8 sm:grid-cols-2">
                {/* Goal */}
                <div>
                  <h3 className="type-heading-sm mb-2 text-text-primary">Business Goal</h3>
                  <p className="type-body text-text-muted">{project.goal}</p>
                </div>

                {/* Features */}
                {project.features && project.features.length > 0 && (
                  <div>
                    <h3 className="type-heading-sm mb-2 text-text-primary">Key Features</h3>
                    <ul className="space-y-1">
                      {project.features.map((f) => (
                        <li key={f} className="type-body flex gap-2 text-text-muted">
                          <span aria-hidden="true" className="mt-0.5 text-accent">
                            ·
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Color palette */}
                {project.palette && project.palette.length > 0 && (
                  <div>
                    <h3 className="type-heading-sm mb-3 text-text-primary">Color Palette</h3>
                    <div className="flex gap-2">
                      {project.palette.map((color) => (
                        <div
                          key={color}
                          className="size-8 rounded-md border border-border shadow-soft"
                          style={{ backgroundColor: color }}
                          title={color}
                          aria-label={color}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Mobile preview */}
                {project.mobileImage && (
                  <div>
                    <h3 className="type-heading-sm mb-3 text-text-primary">Mobile View</h3>
                    <div className="max-w-[160px] overflow-hidden rounded-lg bg-bg-secondary">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.mobileImage}
                        alt={`${project.title} — mobile preview`}
                        className="w-full"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
