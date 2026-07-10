/**
 * TypeScript interfaces for all data shapes.
 *
 * These interfaces are the contract between the constants layer
 * and the component layer. When a CMS is introduced, fetch
 * functions must return data matching these same interfaces —
 * no component changes required.
 *
 * See docs/Architecture.md §9 for the CMS migration strategy.
 */

// Re-export all types from their respective constant files
// so consumers can import from a single location.

export type { Service } from '@/constants/services'
export type { Project } from '@/constants/projects'
export type { ProcessStep } from '@/constants/process'
export type { FAQItem } from '@/constants/faqs'
export type { WhyUsItem } from '@/constants/whyUs'
export type { TechBadge } from '@/constants/technologies'
export type { NavItem } from '@/constants/navigation'
export type { Site } from '@/constants/site'
