/**
 * not-found.tsx — Custom 404 page.
 *
 * Shown when any URL does not match a known route.
 * Keeps the premium feel — minimal, calm, useful.
 * Two CTAs: go home or start a project on WhatsApp.
 *
 * Server Component.
 */

import { ArrowLeft } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { AnimationWrapper } from '@/components/common/AnimationWrapper'
import { WhatsAppCTA } from '@/components/common/WhatsAppCTA'
import { Button } from '@/components/ui/Button'

// ─── Page ─────────────────────────────────────────────────────

export default function NotFound() {
  return (
    <Section
      variant="white"
      padding="default"
      labelledBy="not-found-heading"
      className="min-h-[calc(100svh-64px)] flex items-center"
    >
      <Container>
        <AnimationWrapper variant="blurUp">
          <div className="flex flex-col gap-8 max-w-[520px]">

            {/* 404 label */}
            <span className="type-display font-extrabold text-border select-none" aria-hidden="true">
              404
            </span>

            {/* Heading */}
            <div className="flex flex-col gap-3">
              <h1
                id="not-found-heading"
                className="type-heading-xl text-text-primary"
              >
                This page does not exist.
              </h1>
              <p className="type-body-lg text-text-muted leading-relaxed">
                The page you are looking for may have moved or never existed.
                Let&apos;s get you back on track.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/" variant="primary" size="md">
                <ArrowLeft size={16} aria-hidden="true" />
                Go home
              </Button>
              <WhatsAppCTA
                label="Contact us"
                variant="secondary"
                size="md"
                message="Hello Pixel Studio by Bovio, I was browsing your website and reached a 404 page. Can you help me find what I need?"
              />
            </div>

          </div>
        </AnimationWrapper>
      </Container>
    </Section>
  )
}
