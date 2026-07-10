/**
 * /about — About page
 *
 * PRD §About:
 *   - Not a personal biography.
 *   - Pixel Studio by Bovio is presented as an independent design studio.
 *   - Language emphasizes craftsmanship over company size.
 *   - Do not mention that the studio currently consists of one person.
 *   - Focus on quality over quantity.
 *   - Goal: build lasting relationships with businesses that value design.
 *
 * Structure:
 *   PageHero     — studio positioning
 *   Studio story — two-column layout: copy left, values right
 *   Why Us       — proof of the story told above
 *   Final CTA    — conversion close
 *
 * Server Component.
 */

import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/metadata'
import { PageHero } from '@/components/layout/PageHero'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { AnimationWrapper } from '@/components/common/AnimationWrapper'
import { StaggerWrapper } from '@/components/common/StaggerWrapper'
import { WhyUsSection } from '@/components/sections/WhyUsSection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'

// ─── Brand values list ────────────────────────────────────────

const brandValues = [
  {
    title: 'Attention to detail',
    body: 'Every spacing decision, font weight and interaction is deliberate. The difference between good and exceptional lives in the details.',
  },
  {
    title: 'Quality over quantity',
    body: 'We take on a focused number of projects at a time. This means every client gets the attention their business deserves.',
  },
  {
    title: 'Honest communication',
    body: 'Clear timelines, transparent pricing and direct updates throughout. No surprises — only the information you need.',
  },
  {
    title: 'Long-term thinking',
    body: 'The relationship does not end at launch. We are here for maintenance, improvements and whatever your business needs next.',
  },
] as const

// ─── Metadata ─────────────────────────────────────────────────

export const metadata: Metadata = buildPageMetadata({
  title: 'Sobre Nosotros',
  description:
    'Pixel Studio by Bovio es un estudio de diseño digital en Guadalajara enfocado en crear sitios web que combinan diseño cuidadoso, tecnología moderna y una experiencia excepcional.',
  path: '/about',
})

// ─── Page ─────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        headline="Craftsmanship over shortcuts."
        subheadline="Pixel Studio by Bovio is a digital design studio focused on creating websites that combine thoughtful design, modern technology and exceptional user experience."
        headingId="about-page-heading"
      />

      {/* Studio story */}
      <Section variant="white" labelledBy="about-story-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Copy */}
            <AnimationWrapper variant="fadeUp">
              <div className="flex flex-col gap-6">
                <h2
                  id="about-story-heading"
                  className="type-heading-xl text-text-primary"
                >
                  A studio built on a simple belief.
                </h2>

                <div className="flex flex-col gap-4 type-body-lg text-text-muted leading-relaxed">
                  <p>
                    Every business deserves a website that works as hard as the people behind it.
                    Not a template. Not an afterthought. A carefully built digital presence
                    that earns trust before a word is spoken.
                  </p>
                  <p>
                    Every project is approached with the same level of care — from the first
                    discovery conversation to the final launch. Design decisions are intentional.
                    Code is clean. Communication is direct.
                  </p>
                  <p>
                    The goal is not to produce as many websites as possible.
                    The goal is to produce websites that make a difference for the businesses
                    they represent.
                  </p>
                </div>
              </div>
            </AnimationWrapper>

            {/* Brand values */}
            <StaggerWrapper as="ul" speed="normal" className="flex flex-col gap-5">
              {brandValues.map((value) => (
                <AnimationWrapper key={value.title} variant="fadeUp" as="li">
                  <div className="flex flex-col gap-2 p-5 rounded-xl bg-bg-secondary border border-border">
                    <h3 className="type-heading-sm text-text-primary">{value.title}</h3>
                    <p className="type-body text-text-muted leading-relaxed">{value.body}</p>
                  </div>
                </AnimationWrapper>
              ))}
            </StaggerWrapper>

          </div>
        </Container>
      </Section>

      {/* Studio approach — additional context below the fold */}
      <Section variant="gray" labelledBy="about-approach-heading">
        <Container narrow>
          <AnimationWrapper variant="fadeUp">
            <div className="flex flex-col gap-8">
              <h2
                id="about-approach-heading"
                className="type-heading-xl text-text-primary"
              >
                How we think about design.
              </h2>

              <div className="flex flex-col gap-5 type-body-lg text-text-muted leading-relaxed">
                <p>
                  A website is not a piece of art. It is a business tool.
                  Beautiful design matters — but only when it serves the visitor and moves
                  them toward a decision.
                </p>
                <p>
                  Every element on a page either earns its place or gets removed.
                  Every section answers a question the visitor is silently asking.
                  Every CTA reduces friction rather than creating it.
                </p>
                <p>
                  This is what we mean by design that builds trust.
                  Not visual decoration — strategic clarity.
                </p>
              </div>
            </div>
          </AnimationWrapper>
        </Container>
      </Section>

      {/* Why us — proof section */}
      <WhyUsSection />

      {/* Conversion close */}
      <FinalCTASection />
    </>
  )
}
