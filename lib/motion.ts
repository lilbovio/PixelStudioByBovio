/**
 * Motion constants — Framer Motion variant definitions.
 *
 * Every animation in the site is built from these primitives.
 * Defining them here (not inline in components) ensures:
 *   1. Complete consistency across all animations
 *   2. Easy global tweaks — change timing here, updates everywhere
 *   3. reduced-motion detection is handled by AnimationWrapper,
 *      not by the individual variants
 *
 * See docs/MotionLanguage.md for the full specification.
 */

import type { Variants, Transition } from 'framer-motion'

/* ─────────────────────────────────────────────────────────────────
   TIMING CONSTANTS
   Mirror the CSS tokens in globals.css @theme
   ───────────────────────────────────────────────────────────────── */

export const DURATION = {
  instant: 0.1,
  fast: 0.15,
  normal: 0.24,
  medium: 0.35,
  slow: 0.5,
  deliberate: 0.7,
} as const

/* ─────────────────────────────────────────────────────────────────
   EASING CONSTANTS
   Mirror the CSS tokens in globals.css @theme
   ───────────────────────────────────────────────────────────────── */

export const EASE = {
  /** General UI transitions — feels natural */
  smooth: [0.25, 0.46, 0.45, 0.94] as const,
  /** Scroll reveals — fast start, gentle landing into place */
  outExpo: [0.16, 1.0, 0.3, 1.0] as const,
  /** Panel open/close, modal transitions */
  inOut: [0.4, 0.0, 0.2, 1.0] as const,
} as const

/* ─────────────────────────────────────────────────────────────────
   SHARED TRANSITION PRESETS
   ───────────────────────────────────────────────────────────────── */

/** Default transition for scroll-reveal animations */
export const revealTransition: Transition = {
  duration: DURATION.slow,
  ease: EASE.outExpo,
}

/** Transition for hover/focus UI changes */
export const hoverTransition: Transition = {
  duration: DURATION.fast,
  ease: EASE.smooth,
}

/** Transition for modals and panels */
export const panelTransition: Transition = {
  duration: DURATION.medium,
  ease: EASE.inOut,
}

/* ─────────────────────────────────────────────────────────────────
   ANIMATION VARIANTS
   Used by AnimationWrapper, StaggerWrapper, and any motion.* element.
   ───────────────────────────────────────────────────────────────── */

/**
 * fadeUp — primary entrance for text blocks and cards.
 * Small upward movement + opacity + slight blur.
 * Most common animation on the site.
 */
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: DURATION.slow,
      ease: EASE.outExpo,
    },
  },
}

/**
 * fadeIn — for elements that should appear without moving.
 * Opacity only. Used for trust badges, overlays, labels.
 */
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: DURATION.medium,
      ease: EASE.smooth,
    },
  },
}

/**
 * blurUp — hero and large image entrance.
 * More movement and stronger blur than fadeUp.
 * Reserved for the highest-importance elements.
 */
export const blurUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: DURATION.deliberate,
      ease: EASE.outExpo,
    },
  },
}

/**
 * slideUp — for process steps and numbered items.
 * Moves further than fadeUp but no blur.
 */
export const slideUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASE.outExpo,
    },
  },
}

/**
 * scaleUp — for cards that should feel like they emerge from the page.
 * Very subtle scale change — not dramatic.
 */
export const scaleUp: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATION.medium,
      ease: EASE.outExpo,
    },
  },
}

/* ─────────────────────────────────────────────────────────────────
   STAGGER CONTAINER VARIANTS
   The parent that controls timing of child animations.
   ───────────────────────────────────────────────────────────────── */

/**
 * staggerContainer — standard stagger (70ms between children).
 * Used for service cards, feature cards, FAQ items.
 */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
}

/**
 * staggerContainerFast — tighter stagger (50ms).
 * Used for smaller, more numerous items (trust badges, process steps).
 */
export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.02,
    },
  },
}

/**
 * staggerContainerSlow — wider stagger (100ms).
 * Used for process steps that deserve more visual separation.
 */
export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

/* ─────────────────────────────────────────────────────────────────
   HERO SEQUENCE VARIANTS
   Used in HeroSection for the progressive content reveal.
   Each element has its own delay — the container does not stagger.
   ───────────────────────────────────────────────────────────────── */

const heroItemTransition = (delay: number): Transition => ({
  duration: DURATION.slow,
  ease: EASE.outExpo,
  delay,
})

export const heroHeadline: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: heroItemTransition(0.1) },
}

export const heroParagraph: Variants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: heroItemTransition(0.22) },
}

export const heroPrimaryBtn: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: heroItemTransition(0.34) },
}

export const heroSecondaryBtn: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: heroItemTransition(0.42) },
}

export const heroVisual: Variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: DURATION.deliberate, ease: EASE.outExpo, delay: 0.5 },
  },
}

/* ─────────────────────────────────────────────────────────────────
   NAVBAR VARIANTS
   Glass effect animates in when user scrolls.
   ───────────────────────────────────────────────────────────────── */

export const navbarScrolled: Variants = {
  top: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    backdropFilter: 'blur(0px)',
    borderBottomColor: 'rgba(229, 231, 235, 0)',
    boxShadow: 'none',
  },
  scrolled: {
    backgroundColor: 'rgba(255, 255, 255, 0.72)',
    backdropFilter: 'blur(12px)',
    borderBottomColor: 'rgba(229, 231, 235, 0.5)',
    boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
    transition: {
      duration: DURATION.normal,
      ease: EASE.smooth,
    },
  },
}

/* ─────────────────────────────────────────────────────────────────
   MODAL VARIANTS
   ───────────────────────────────────────────────────────────────── */

export const modalOverlay: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: DURATION.normal, ease: EASE.smooth } },
  exit: { opacity: 0, transition: { duration: DURATION.fast, ease: EASE.smooth } },
}

export const modalContent: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: DURATION.medium, ease: EASE.outExpo },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 8,
    transition: { duration: DURATION.fast, ease: EASE.smooth },
  },
}

/* ─────────────────────────────────────────────────────────────────
   MOBILE MENU VARIANTS
   ───────────────────────────────────────────────────────────────── */

export const mobileMenuOverlay: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: DURATION.normal, ease: EASE.smooth } },
  exit: { opacity: 0, transition: { duration: DURATION.fast, ease: EASE.smooth } },
}

export const mobileMenuPanel: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION.medium, ease: EASE.outExpo } },
  exit: { opacity: 0, y: -8, transition: { duration: DURATION.fast, ease: EASE.inOut } },
}

/* ─────────────────────────────────────────────────────────────────
   FAQ ACCORDION VARIANTS
   Height is handled via Framer's layout animation.
   This controls the text content opacity.
   ───────────────────────────────────────────────────────────────── */

export const faqContent: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.normal, ease: EASE.smooth, delay: 0.05 },
  },
  exit: { opacity: 0, transition: { duration: DURATION.fast, ease: EASE.smooth } },
}

export const faqIcon: Variants = {
  closed: { rotate: 0 },
  open: { rotate: 180, transition: { duration: DURATION.normal, ease: EASE.smooth } },
}

/* ─────────────────────────────────────────────────────────────────
   WHATSAPP FLOATING BUTTON VARIANTS
   ───────────────────────────────────────────────────────────────── */

export const whatsappButton: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: DURATION.medium, ease: EASE.outExpo },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 16,
    transition: { duration: DURATION.fast, ease: EASE.smooth },
  },
}

/* ─────────────────────────────────────────────────────────────────
   CARD HOVER SPRING
   For programmatic use with useAnimation() or whileHover
   ───────────────────────────────────────────────────────────────── */

export const cardHover = {
  rest: {
    y: 0,
    boxShadow: 'var(--shadow-soft)',
    transition: { duration: DURATION.normal, ease: EASE.smooth },
  },
  hover: {
    y: -4,
    boxShadow: 'var(--shadow-medium)',
    transition: { duration: DURATION.normal, ease: EASE.smooth },
  },
} as const

export const projectCardHover = {
  rest: {
    y: 0,
    boxShadow: 'var(--shadow-soft)',
    transition: { duration: DURATION.normal, ease: EASE.smooth },
  },
  hover: {
    y: -6,
    boxShadow: 'var(--shadow-elevated)',
    transition: { duration: DURATION.normal, ease: EASE.smooth },
  },
} as const

/* ─────────────────────────────────────────────────────────────────
   IMAGE REVEAL VARIANT
   Used on project preview images
   ───────────────────────────────────────────────────────────────── */

export const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
    filter: 'blur(6px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: DURATION.deliberate,
      ease: EASE.outExpo,
    },
  },
}

/* ─────────────────────────────────────────────────────────────────
   TOAST NOTIFICATION VARIANTS
   ───────────────────────────────────────────────────────────────── */

export const toastEnter: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: DURATION.medium, ease: EASE.outExpo },
  },
  exit: { opacity: 0, y: 8, transition: { duration: DURATION.fast, ease: EASE.smooth } },
}
