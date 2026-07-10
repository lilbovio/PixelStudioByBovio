/**
 * /contact — Contact page
 *
 * PRD: WhatsApp is the primary conversion channel.
 * "Never require unnecessary forms before allowing users to contact the studio."
 *
 * This page is intentionally simple:
 *   - No form to fill out
 *   - No email to compose
 *   - One clear action: open WhatsApp
 *
 * Structure:
 *   PageHero     — context + reassurance
 *   Contact body — WhatsApp CTA + what to expect + FAQ
 *   Final CTA    — dark section close
 *
 * Server Component.
 */

import type { Metadata } from 'next'
import { ArrowRight, Clock, MessageCircle, MapPin } from 'lucide-react'
import { buildPageMetadata } from '@/lib/metadata'
import { PageHero } from '@/components/layout/PageHero'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { AnimationWrapper } from '@/components/common/AnimationWrapper'
import { StaggerWrapper } from '@/components/common/StaggerWrapper'
import { WhatsAppCTA } from '@/components/common/WhatsAppCTA'
import { FAQSection } from '@/components/sections/FAQSection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'
import { site } from '@/constants/site'

// ─── What happens next items ──────────────────────────────────

const nextSteps = [
  {
    icon: MessageCircle,
    title: 'Send us a message',
    body: 'Tell us a little about your business and what you need. No commitment required — just a conversation.',
  },
  {
    icon: Clock,
    title: 'We respond within 24 hours',
    body: 'Usually faster. We will confirm receipt and let you know when to expect our response.',
  },
  {
    icon: ArrowRight,
    title: 'We put together a proposal',
    body: 'After a short discovery call, we send you a clear proposal with scope, timeline and pricing.',
  },
] as const

// ─── Metadata ─────────────────────────────────────────────────

export const metadata: Metadata = buildPageMetadata({
  title: 'Contacto',
  description:
    'Inicia tu proyecto hoy. Escríbenos por WhatsApp y hablemos sobre lo que tu negocio necesita. Sin formularios, sin compromiso.',
  path: '/contact',
})

// ─── Page ─────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        headline="Let's talk about your project."
        subheadline="No forms to fill. No emails to compose. One message on WhatsApp and we can start a conversation about what your business needs."
        headingId="contact-page-heading"
      />

      {/* Primary contact action */}
      <Section variant="white" labelledBy="contact-action-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left — CTA block */}
            <AnimationWrapper variant="fadeUp">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <h2
                    id="contact-action-heading"
                    className="type-heading-xl text-text-primary"
                  >
                    Start on WhatsApp.
                  </h2>
                  <p className="type-body-lg text-text-muted leading-relaxed max-w-[480px]">
                    The fastest and most direct way to reach us.
                    A prefilled message is ready — just tap send.
                  </p>
                </div>

                <WhatsAppCTA
                  label="Start on WhatsApp"
                  size="lg"
                  message="Hello Pixel Studio by Bovio, I found your website and I'm interested in discussing a project for my business. I would like to receive more information."
                  icon={<ArrowRight size={18} aria-hidden="true" />}
                  iconPosition="right"
                />

                {/* Location + response time */}
                <div className="flex flex-col gap-3 pt-2 border-t border-border">
                  <div className="flex items-center gap-2 type-body-sm text-text-muted">
                    <MapPin size={14} strokeWidth={1.75} aria-hidden="true" />
                    {site.location}
                  </div>
                  <div className="flex items-center gap-2 type-body-sm text-text-muted">
                    <Clock size={14} strokeWidth={1.75} aria-hidden="true" />
                    Response within 24 hours — usually faster
                  </div>
                  {site.email && (
                    <div className="flex items-center gap-2 type-body-sm text-text-muted">
                      <MessageCircle size={14} strokeWidth={1.75} aria-hidden="true" />
                      <a
                        href={`mailto:${site.email}`}
                        className="hover:text-text-primary transition-colors duration-fast"
                      >
                        {site.email}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </AnimationWrapper>

            {/* Right — what happens next */}
            <div className="flex flex-col gap-6">
              <AnimationWrapper variant="fadeUp">
                <h2 className="type-heading-sm text-text-muted uppercase tracking-wider">
                  What happens next
                </h2>
              </AnimationWrapper>

              <StaggerWrapper as="ol" speed="normal" className="flex flex-col gap-4">
                {nextSteps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <AnimationWrapper key={step.title} variant="fadeUp" as="li">
                      <div className="flex items-start gap-4 p-5 rounded-xl bg-bg-secondary border border-border">
                        {/* Step number */}
                        <div
                          className="flex items-center justify-center w-8 h-8 rounded-full bg-btn-primary text-text-inverse type-body-sm font-bold shrink-0"
                          aria-hidden="true"
                        >
                          {index + 1}
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <div className="flex items-center gap-2">
                            <Icon size={15} strokeWidth={1.75} className="text-text-muted shrink-0" aria-hidden="true" />
                            <h3 className="type-heading-sm text-text-primary">{step.title}</h3>
                          </div>
                          <p className="type-body text-text-muted leading-relaxed">{step.body}</p>
                        </div>
                      </div>
                    </AnimationWrapper>
                  )
                })}
              </StaggerWrapper>
            </div>

          </div>
        </Container>
      </Section>

      {/* FAQ — friction reducer */}
      <FAQSection />

      {/* Final CTA — dark section close */}
      <FinalCTASection />
    </>
  )
}
