/**
 * WhyUsSection — value differentiation.
 *
 * Objection answered: "Why you and not someone else?"
 * Section background: white (section-white)
 *
 * Layout: 4-column grid on desktop, 2 on tablet, 1 on mobile.
 * 8 feature cards — each one answers a specific client concern.
 *
 * Cards focus on business value — not technology features.
 * The tone is confident and calm, never self-congratulatory.
 *
 * Server Component — pure display.
 */

import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { AnimationWrapper } from '@/components/common/AnimationWrapper'
import { StaggerWrapper } from '@/components/common/StaggerWrapper'
import { FeatureCard } from '@/components/cards/FeatureCard'
import { whyUsItems } from '@/constants/whyUs'

// ─── Component ────────────────────────────────────────────────

export function WhyUsSection() {
  return (
    <Section id="why-us" variant="white" labelledBy="why-us-heading">
      <Container>
        <div className="flex flex-col gap-12">
          {/* Header */}
          <AnimationWrapper variant="fadeUp">
            <SectionHeader
              label="Why Choose Us"
              headline="What every project we build delivers"
              subheadline="The same care and standard on every project — whether it is a landing page or a full business website."
              headingId="why-us-heading"
            />
          </AnimationWrapper>

          {/* Feature cards grid — 6 most impactful items (audit H7) */}
          <StaggerWrapper
            as="ul"
            speed="normal"
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {whyUsItems.slice(0, 6).map((item) => (
              <AnimationWrapper key={item.id} variant="scaleUp" as="li" className="h-full">
                <FeatureCard item={item} className="h-full" />
              </AnimationWrapper>
            ))}
          </StaggerWrapper>
        </div>
      </Container>
    </Section>
  )
}
