/**
 * ServicesSection — catalog of what the studio offers.
 *
 * Objection answered: "What exactly do you do?"
 * Section background: gray (section-gray)
 *
 * Layout: 4-column grid on desktop, 2 on tablet, 1 on mobile.
 * Each card shows icon, name, description and business outcome.
 *
 * The outcome line is the most important element — it answers
 * "what do I get?" before the prospect even reads the description.
 *
 * Server Component wrapper — ServiceCard and AnimationWrapper
 * are the interactive leaf nodes.
 */

import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { AnimationWrapper } from '@/components/common/AnimationWrapper'
import { StaggerWrapper } from '@/components/common/StaggerWrapper'
import { ServiceCard } from '@/components/cards/ServiceCard'
import { services } from '@/constants/services'

// ─── Component ────────────────────────────────────────────────

export function ServicesSection() {
  return (
    <Section
      id="services"
      variant="gray"
      labelledBy="services-heading"
    >
      <Container>
        <div className="flex flex-col gap-12">

          {/* Header */}
          <AnimationWrapper variant="fadeUp">
            <SectionHeader
              label="What We Do"
              headline="Services designed around your business goals"
              subheadline="From a focused landing page to a full website — everything we build is intentional and conversion-focused."
              headingId="services-heading"
            />
          </AnimationWrapper>

          {/* Services grid */}
          <StaggerWrapper
            as="ul"
            speed="normal"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {services.map((service) => (
              <AnimationWrapper key={service.id} variant="scaleUp" as="li" className="h-full">
                <ServiceCard service={service} className="h-full" />
              </AnimationWrapper>
            ))}
          </StaggerWrapper>

        </div>
      </Container>
    </Section>
  )
}
