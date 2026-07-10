/**
 * /services — Services page
 *
 * Presents all services in detail. Each card links mentally to the
 * studio's process and WhatsApp CTA, completing the conversion loop.
 *
 * Structure:
 *   PageHero    — headline + subheadline
 *   Services    — full 4-column grid (all 8 services)
 *   Why Us      — reuses homepage WhyUs section
 *   Final CTA   — dark conversion section
 *
 * Server Component — all interactivity in leaf nodes.
 */

import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/metadata'
import { PageHero } from '@/components/layout/PageHero'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { WhyUsSection } from '@/components/sections/WhyUsSection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'

// ─── Metadata ─────────────────────────────────────────────────

export const metadata: Metadata = buildPageMetadata({
  title: 'Servicios de Diseño Web',
  description:
    'Landing pages, sitios web empresariales, rediseños, SEO, mantenimiento e integración con WhatsApp. Soluciones de diseño web profesional en Guadalajara.',
  path: '/services',
})

// ─── Page ─────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        headline="Everything your business needs online."
        subheadline="From a focused landing page to a full multi-page website — each service is designed around a clear business outcome, not a technical feature list."
        headingId="services-page-heading"
      />

      {/* Full services grid — same component used on homepage */}
      <ServicesSection />

      {/* Why us — grounds the services in commitment quality */}
      <WhyUsSection />

      {/* Conversion close */}
      <FinalCTASection />
    </>
  )
}
