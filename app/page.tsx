/**
 * Homepage — Pixel Studio by Bovio
 *
 * Section order (from PRD §4):
 *   1.  Hero          — above fold, primary CTA
 *   2.  Trust Badges  — technology credibility strip
 *   3.  Problem       — surfaces the pain the prospect feels
 *   4.  Solution      — positions the studio as the answer
 *   5.  Services      — what we offer
 *   6.  Featured Work — portfolio showcase (empty state at launch)
 *   7.  Process       — how we work
 *   8.  Why Us        — value differentiation
 *   9.  FAQ           — objection handling
 *   10. Final CTA     — closing conversion push
 *
 * Footer is rendered in app/layout.tsx — not imported here.
 *
 * SEO:
 *   - metadata export provides OG, Twitter, canonical, description
 *   - JSON-LD scripts: Organization + WebSite + FAQPage
 *
 * This is a Server Component — all client interactivity lives in
 * leaf components (HeroSection has motion, FAQSection has state, etc.)
 */

import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/metadata'
import { organizationSchema, websiteSchema, faqSchema } from '@/lib/structured-data'
import { faqs } from '@/constants/faqs'
import {
  HeroSection,
  TrustBadgesSection,
  ProblemSection,
  SolutionSection,
  ServicesSection,
  FeaturedWorkSection,
  ProcessSection,
  WhyUsSection,
  FAQSection,
  FinalCTASection,
} from '@/components/sections'

// ─── Metadata ─────────────────────────────────────────────────

export const metadata: Metadata = buildPageMetadata({
  title: 'Diseño Web Guadalajara — Pixel Studio by Bovio',
  description:
    'Diseño y desarrollo web profesional en Guadalajara, México. Creamos sitios web modernos que ayudan a tu negocio a ganar confianza, atraer clientes y crecer. Landing pages, sitios empresariales y rediseños.',
  path: '/',
})

// ─── Page ─────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── JSON-LD Structured Data ─────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      {/* ── Sections ────────────────────────────────────────── */}
      <HeroSection />
      <TrustBadgesSection />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <FeaturedWorkSection />
      <ProcessSection />
      <WhyUsSection />
      <FAQSection />
      <FinalCTASection />
    </>
  )
}
