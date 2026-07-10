/**
 * Site-wide constants — single source of truth for all business information.
 *
 * To update any contact detail, social link, or studio info, change it here.
 * Every component that references this data will update automatically.
 *
 * See docs/Decisions.md — OQ-001 through OQ-006 for resolved decisions.
 */

export const site = {
  // ── Studio Identity ──────────────────────────────────────────
  name: 'Pixel Studio by Bovio',
  tagline: 'Digital Design Studio',
  description:
    'We design and build modern websites that help businesses earn trust, attract customers and grow.',
  location: 'Guadalajara, Mexico',

  // ── Domain & URLs ────────────────────────────────────────────
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://pixelstudiobybovio.lat',

  // ── Contact ───────────────────────────────────────────────────
  // WhatsApp number stored in env — never hardcode here
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '',
  email: '', // Add studio email when available

  // ── Social Links ──────────────────────────────────────────────
  // Leave blank — will be filled in when accounts are ready
  social: {
    instagram: '',
    tiktok: '',
    linkedin: '',     // Optional — add when ready
    github: '',       // Optional — add when ready
  },

  // ── Feature Flags ─────────────────────────────────────────────
  // Controls visibility of optional UI elements before they are production-ready
  features: {
    // "Book a Discovery Call" button in the Final CTA section
    // Set to true only when a scheduling link (Calendly / Cal.com) is configured
    enableBookingCTA: false,
  },
} as const

export type Site = typeof site
