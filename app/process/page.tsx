/**
 * /process — Process page
 *
 * Expands on the homepage Process section.
 * Business owners who reach this page want reassurance about
 * what working with the studio will actually feel like.
 *
 * Structure:
 *   PageHero    — headline + context
 *   Process     — 4-step sequence (reuses ProcessSection)
 *   FAQ         — addresses process-specific questions
 *   Final CTA   — conversion close
 *
 * Server Component.
 */

import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/metadata'
import { PageHero } from '@/components/layout/PageHero'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'

// ─── Metadata ─────────────────────────────────────────────────

export const metadata: Metadata = buildPageMetadata({
  title: 'Proceso de Trabajo',
  description:
    'Conoce cómo trabajamos: cuatro pasos claros desde la primera conversación hasta el lanzamiento de tu sitio web. Sin sorpresas, con resultados.',
  path: '/process',
})

// ─── Page ─────────────────────────────────────────────────────

export default function ProcessPage() {
  return (
    <>
      <PageHero
        label="Process"
        headline="How we build websites."
        subheadline="Four clear steps from the first conversation to a live, optimized website. You know exactly what happens at every stage — and why."
        headingId="process-page-heading"
      />

      {/* Full process steps — same component used on homepage */}
      <ProcessSection />

      {/* FAQ addresses remaining process questions */}
      <FAQSection />

      {/* Conversion close */}
      <FinalCTASection />
    </>
  )
}
