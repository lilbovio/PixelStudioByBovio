'use client'

import { useReducedMotion as useFramerReducedMotion } from 'framer-motion'

/**
 * Returns true if the user has enabled "reduce motion" in their OS settings.
 *
 * Wraps Framer Motion's hook to:
 * 1. Provide a single import path across the codebase
 * 2. Allow easy swapping of the underlying implementation if needed
 *
 * Usage:
 *   const shouldReduceMotion = useReducedMotion()
 *   if (shouldReduceMotion) return <StaticVersion />
 */
export function useReducedMotion(): boolean {
  return useFramerReducedMotion() ?? false
}
