/**
 * PageHero — reusable inner-page hero banner.
 *
 * Every inner page (Services, Work, Process, About, Contact) opens
 * with this component: a white section with badge + large headline
 * + optional subheadline, with a consistent bottom border separator.
 *
 * It is deliberately simpler than the homepage hero — it orients
 * the visitor without competing with the page's main content.
 *
 * Server Component — no interactivity.
 */

import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { AnimationWrapper } from '@/components/common/AnimationWrapper'
import { Badge } from '@/components/ui/Badge'
import { Heading } from '@/components/ui/Heading'
import { cn } from '@/lib/cn'
import type { ReactNode } from 'react'

// ─── Types ────────────────────────────────────────────────────

interface PageHeroProps {
  /** Eyebrow badge above the headline */
  label:        string
  headline:     string
  subheadline?: string | ReactNode
  /** id for the h1 — used with Section labelledBy for accessibility */
  headingId:    string
  className?:   string
}

// ─── Component ────────────────────────────────────────────────

export function PageHero({
  label,
  headline,
  subheadline,
  headingId,
  className,
}: PageHeroProps) {
  return (
    <Section
      variant="white"
      padding="default"
      labelledBy={headingId}
      className={cn('border-b border-border', className)}
    >
      <Container>
        <AnimationWrapper variant="blurUp">
          <div className="flex flex-col gap-5 max-w-[720px]">
            <Badge variant="default" size="md">{label}</Badge>

            <Heading level={1} size="display" id={headingId}>
              {headline}
            </Heading>

            {subheadline && (
              <p className="type-body-lg text-text-muted leading-relaxed max-w-[600px]">
                {subheadline}
              </p>
            )}
          </div>
        </AnimationWrapper>
      </Container>
    </Section>
  )
}
