/**
 * SolutionSection — presents Pixel Studio as the clear answer.
 *
 * Visual upgrade:
 *   - Value pillars get a checkmark icon with accent tint background
 *   - Left column headline is larger and more authoritative
 *   - Pillar items use a flat list style — cleaner than bordered boxes
 */

import { CheckCircle2 } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { AnimationWrapper } from '@/components/common/AnimationWrapper'
import { StaggerWrapper } from '@/components/common/StaggerWrapper'
import { WhatsAppCTA } from '@/components/common/WhatsAppCTA'

// ─── Value pillars ────────────────────────────────────────────

const pillars = [
  'A website that accurately reflects the quality of your business',
  'Design that guides visitors toward becoming customers',
  'Fast, mobile-optimized and built with solid SEO foundations',
  'Clear communication and a process that respects your time',
  'A long-term partner — not just a vendor',
] as const

// ─── Component ────────────────────────────────────────────────

export function SolutionSection() {
  return (
    <Section id="solution" variant="white" labelledBy="solution-heading">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* ── Left — copy ──────────────────────────────────────── */}
          <div className="flex flex-col gap-8">
            <AnimationWrapper variant="fadeUp">
              <SectionHeader
                label="The Solution"
                headline="A website built for your business. Not just for looks."
                subheadline="Pixel Studio by Bovio designs and builds websites that earn trust, communicate value and turn visitors into customers."
                headingId="solution-heading"
              />
            </AnimationWrapper>

            <AnimationWrapper variant="fadeUp" delay={0.1}>
              <WhatsAppCTA
                label="Start a Conversation"
                variant="secondary"
                size="md"
                message="Hello Pixel Studio by Bovio, I'm interested in discussing a website project for my business."
              />
            </AnimationWrapper>
          </div>

          {/* ── Right — value pillars ─────────────────────────────── */}
          <StaggerWrapper as="ul" speed="normal" className="flex flex-col divide-y divide-border">
            {pillars.map((pillar, i) => (
              <AnimationWrapper key={i} variant="fadeUp" as="li">
                <div className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-success/10">
                    <CheckCircle2
                      size={14}
                      strokeWidth={2}
                      className="text-success"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="type-body leading-relaxed text-text-secondary">{pillar}</p>
                </div>
              </AnimationWrapper>
            ))}
          </StaggerWrapper>
        </div>
      </Container>
    </Section>
  )
}
