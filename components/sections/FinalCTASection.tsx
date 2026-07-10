/**
 * FinalCTASection — the closing conversion push.
 *
 * Visual upgrade:
 *   - Subtle ambient glow in the dark background
 *   - Inner content box adds separation without breaking the dark mood
 *   - Micro-copy refined
 *   - CTA buttons pair more elegantly
 */

import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { AnimationWrapper } from '@/components/common/AnimationWrapper'
import { WhatsAppCTA } from '@/components/common/WhatsAppCTA'
import { site } from '@/constants/site'

export function FinalCTASection() {
  return (
    <Section
      id="contact"
      variant="dark"
      labelledBy="cta-heading"
      className="relative overflow-hidden"
    >
      {/* Ambient glow — very subtle, centered, deep blue */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(29,78,216,0.10) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="mx-auto flex max-w-[680px] flex-col items-center gap-10 text-center">
          {/* Eyebrow */}
          <AnimationWrapper variant="fadeIn">
            <span className="type-label inline-flex items-center gap-2 text-white/35">
              <span className="h-1.5 w-1.5 rounded-full bg-white/25" aria-hidden="true" />
              Let&apos;s work together
            </span>
          </AnimationWrapper>

          {/* Headline */}
          <AnimationWrapper variant="blurUp">
            <h2 id="cta-heading" className="type-display text-text-inverse">
              Your next customer is already searching online.
            </h2>
          </AnimationWrapper>

          {/* Subheadline */}
          <AnimationWrapper variant="fadeUp" delay={0.1}>
            <p className="type-body-lg max-w-[520px] text-white/50">
              Whether you are launching a new business or improving an existing one, we are ready to
              build a website that represents your brand with clarity and quality.
            </p>
          </AnimationWrapper>

          {/* CTAs */}
          <AnimationWrapper variant="fadeUp" delay={0.2}>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <WhatsAppCTA
                label="Start on WhatsApp"
                size="lg"
                message="Hello Pixel Studio by Bovio, I'm ready to get started. I'd like to discuss a project for my business."
                icon={<ArrowRight size={16} aria-hidden="true" />}
                iconPosition="right"
              />

              {site.features.enableBookingCTA && (
                <WhatsAppCTA
                  label="Book a Discovery Call"
                  variant="secondary"
                  size="lg"
                  message="Hello Pixel Studio by Bovio, I'd like to schedule a discovery call to discuss my project."
                />
              )}
            </div>
          </AnimationWrapper>

          {/* Trust micro-copy */}
          <AnimationWrapper variant="fadeIn" delay={0.3}>
            <p className="type-body-sm text-white/25">
              Free consultation · No commitment · Based in Guadalajara, Mexico
            </p>
          </AnimationWrapper>
        </div>
      </Container>
    </Section>
  )
}
