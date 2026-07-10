/**
 * ProcessSection — how the studio works, step by step.
 *
 * Visual upgrade:
 *   - Horizontal connector line replaced with a dashed gradient line
 *   - Step numbers are editorial outlined boxes
 *   - More gap between header and steps
 */

import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { AnimationWrapper } from '@/components/common/AnimationWrapper'
import { StaggerWrapper } from '@/components/common/StaggerWrapper'
import { ProcessStep } from '@/components/common/ProcessStep'
import { processSteps } from '@/constants/process'

export function ProcessSection() {
  return (
    <Section id="process" variant="gray" labelledBy="process-heading">
      <Container>
        <div className="flex flex-col gap-16">
          <AnimationWrapper variant="fadeUp">
            <SectionHeader
              label="How We Work"
              headline="A simple process with no surprises"
              subheadline="Four clear steps from the first conversation to a live website. You know exactly what to expect at every stage."
              headingId="process-heading"
            />
          </AnimationWrapper>

          {/* Steps */}
          <div className="relative">
            {/* Horizontal connector — gradient line on desktop */}
            <div
              className="absolute top-5 right-10 left-10 hidden h-px lg:block"
              style={{
                background:
                  'linear-gradient(90deg, transparent, var(--color-border) 10%, var(--color-border) 90%, transparent)',
              }}
              aria-hidden="true"
            />

            <StaggerWrapper
              as="ol"
              speed="slow"
              className="flex flex-col gap-0 lg:flex-row lg:gap-8"
            >
              {processSteps.map((step, index) => (
                <AnimationWrapper key={step.step} variant="fadeUp" as="li" className="flex-1">
                  <ProcessStep step={step} isLast={index === processSteps.length - 1} />
                </AnimationWrapper>
              ))}
            </StaggerWrapper>
          </div>
        </div>
      </Container>
    </Section>
  )
}
