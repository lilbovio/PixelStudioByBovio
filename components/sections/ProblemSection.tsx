/**
 * ProblemSection — surfaces the pain the prospect already feels.
 *
 * Visual upgrade:
 *   - Cards get a coloured left border + subtle tint for visual rhythm
 *   - Icon sits in a tinted container, not a plain gray box
 *   - Tighter headline tracking
 */

import { AlertCircle, TrendingDown, Clock } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { AnimationWrapper } from '@/components/common/AnimationWrapper'
import { StaggerWrapper } from '@/components/common/StaggerWrapper'
import { cn } from '@/lib/cn'

// ─── Pain points data ─────────────────────────────────────────

const painPoints = [
  {
    id: 'first-impression',
    icon: AlertCircle,
    headline: 'Your first impression might be costing you',
    body: 'Visitors decide in seconds whether to stay or leave. An outdated, slow or confusing website sends them straight to the competition — before they even read what you offer.',
  },
  {
    id: 'not-converting',
    icon: TrendingDown,
    headline: 'Traffic that never turns into customers',
    body: 'A website that does not clearly communicate your value does not generate leads. It just exists. The gap between a website that looks good and one that actually works is bigger than most businesses realize.',
  },
  {
    id: 'opportunity',
    icon: Clock,
    headline: 'Every day without the right website is a missed opportunity',
    body: 'Potential customers are searching for what you offer right now. If your online presence does not reflect the quality of your business, someone else is getting those customers.',
  },
] as const

// ─── Component ────────────────────────────────────────────────

export function ProblemSection() {
  return (
    <Section id="problem" variant="gray" labelledBy="problem-heading">
      <Container>
        <div className="flex flex-col gap-12">
          <AnimationWrapper variant="fadeUp">
            <SectionHeader
              label="The Reality"
              headline="Your website might be working against you"
              subheadline="Most business owners don't realise it until customers start going elsewhere."
              headingId="problem-heading"
            />
          </AnimationWrapper>

          <StaggerWrapper as="ul" speed="normal" className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {painPoints.map((point) => {
              const Icon = point.icon
              return (
                <AnimationWrapper key={point.id} variant="fadeUp" as="li">
                  <div
                    className={cn(
                      'flex h-full flex-col gap-4 p-6',
                      'rounded-xl border border-border bg-surface',
                      'shadow-soft',
                      // Left accent border
                      'border-l-2 border-l-border-strong'
                    )}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-bg-secondary">
                      <Icon
                        size={18}
                        strokeWidth={1.75}
                        aria-hidden="true"
                        className="text-text-muted"
                      />
                    </div>
                    <h3 className="type-heading-sm text-text-primary">{point.headline}</h3>
                    <p className="type-body leading-relaxed text-text-muted">{point.body}</p>
                  </div>
                </AnimationWrapper>
              )
            })}
          </StaggerWrapper>
        </div>
      </Container>
    </Section>
  )
}
