/**
 * AnimationWrapper — scroll-triggered entrance animation.
 *
 * The universal adapter between Server Components and Framer Motion.
 * All scroll-reveal animations in the site flow through this component.
 *
 * How it works:
 *   1. Receives children from a Server Component
 *   2. Wraps them in a Framer Motion element with named variants
 *   3. Triggers via whileInView with a configurable viewport threshold
 *   4. Respects prefers-reduced-motion — renders children statically
 *
 * Delay implementation:
 *   We inject `delay` directly into the variant's `transition` object
 *   via the `custom` prop + a factory variant. This avoids the conflict
 *   between `animate` and `whileInView` that would break the scroll trigger.
 *
 * Usage:
 *   <AnimationWrapper variant="fadeUp" delay={0.1}>
 *     <ServiceCard ... />
 *   </AnimationWrapper>
 */

'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { DURATION, EASE } from '@/lib/motion'
import { cn } from '@/lib/cn'
import type { ReactNode } from 'react'
import type { Variants } from 'framer-motion'

// ─── Types ────────────────────────────────────────────────────

export type AnimationVariant = 'fadeUp' | 'fadeIn' | 'blurUp' | 'scaleUp' | 'slideUp'

interface AnimationWrapperProps {
  variant?: AnimationVariant
  /** Additional delay in seconds before the animation starts */
  delay?: number
  /** Intersection threshold — 0.0 to 1.0. Default: 0.15 */
  threshold?: number
  /** Animate only the first time the element enters view. Default: true */
  once?: boolean
  className?: string
  children: ReactNode
  as?: 'div' | 'li' | 'article' | 'section' | 'header' | 'footer' | 'span'
}

// ─── Variant factories ─────────────────────────────────────────
// Each factory accepts `custom` (the delay value) so the transition
// delay is injected cleanly without conflicting with whileInView.

const variantFactories: Record<AnimationVariant, (delay: number) => Variants> = {
  fadeUp: (delay) => ({
    hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: DURATION.slow, ease: EASE.outExpo, delay },
    },
  }),
  fadeIn: (delay) => ({
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: DURATION.medium, ease: EASE.smooth, delay } },
  }),
  blurUp: (delay) => ({
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: DURATION.deliberate, ease: EASE.outExpo, delay },
    },
  }),
  scaleUp: (delay) => ({
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: DURATION.medium, ease: EASE.outExpo, delay },
    },
  }),
  slideUp: (delay) => ({
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION.slow, ease: EASE.outExpo, delay },
    },
  }),
}

// ─── Component ────────────────────────────────────────────────

export function AnimationWrapper({
  variant = 'fadeUp',
  delay = 0,
  threshold = 0.15,
  once = true,
  className,
  children,
  as = 'div',
}: AnimationWrapperProps) {
  const shouldReduce = useReducedMotion()

  // Reduced motion: render statically, fully visible, no animation
  if (shouldReduce) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  const MotionTag = motion[as]
  const variants = variantFactories[variant](delay)

  return (
    <MotionTag
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  )
}
