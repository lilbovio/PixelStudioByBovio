/**
 * StaggerWrapper — staggers entrance animations across a list of children.
 *
 * Wraps a list container in a stagger parent. Each direct child animates
 * in sequence with a configurable delay between items.
 *
 * Architecture:
 *   StaggerWrapper (motion parent — controls stagger timing)
 *     └─ child 1 (AnimationWrapper or motion element)
 *     └─ child 2
 *     └─ child 3
 *
 * The children must be wrapped in an element that accepts variants.
 * Typically used with AnimationWrapper as children, or with
 * motion.li / motion.div elements that use the named variants.
 *
 * When reduced motion is active: stagger delay is set to 0ms,
 * so all children appear simultaneously.
 *
 * Usage:
 *   <StaggerWrapper>
 *     {services.map((s) => (
 *       <AnimationWrapper key={s.id} variant="fadeUp" as="li">
 *         <ServiceCard service={s} />
 *       </AnimationWrapper>
 *     ))}
 *   </StaggerWrapper>
 */

'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import {
  staggerContainer,
  staggerContainerFast,
  staggerContainerSlow,
} from '@/lib/motion'
import { cn } from '@/lib/cn'
import type { ReactNode } from 'react'
import type { Variants } from 'framer-motion'

// ─── Types ────────────────────────────────────────────────────

type StaggerSpeed = 'fast' | 'normal' | 'slow'

interface StaggerWrapperProps {
  /** Spacing between child animations. Default: 'normal' (70ms) */
  speed?:     StaggerSpeed
  className?: string
  children:   ReactNode
  as?:        'div' | 'ul' | 'ol' | 'section'
}

// ─── Variant map ──────────────────────────────────────────────

const containerVariants: Record<StaggerSpeed, Variants> = {
  fast:   staggerContainerFast,
  normal: staggerContainer,
  slow:   staggerContainerSlow,
}

// ─── Component ────────────────────────────────────────────────

export function StaggerWrapper({
  speed     = 'normal',
  className,
  children,
  as        = 'div',
}: StaggerWrapperProps) {
  const shouldReduce = useReducedMotion()

  const MotionTag = motion[as]

  // When motion is reduced: render immediately with no stagger
  if (shouldReduce) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag
      variants={containerVariants[speed]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  )
}
