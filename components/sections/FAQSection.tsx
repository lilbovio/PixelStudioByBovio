/**
 * FAQSection — addresses common objections before they become blockers.
 *
 * Objection answered: "What about [specific concern]?"
 * Section background: gray (section-gray)
 *
 * State: tracks which FAQ item is currently open (only one at a time).
 * Must be a Client Component — manages the open accordion state.
 *
 * Layout: single column, max reading width.
 * Each item uses FAQItem which handles its own accordion animation.
 *
 * Accessibility:
 *   - Section is aria-labelledby the heading
 *   - Each FAQItem manages its own aria-expanded, role="region", etc.
 *   - The FAQ data also feeds the FAQPage JSON-LD schema
 */

'use client'

import { useState } from 'react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { AnimationWrapper } from '@/components/common/AnimationWrapper'
import { FAQItem } from '@/components/common/FAQItem'
import { WhatsAppCTA } from '@/components/common/WhatsAppCTA'
import { faqs } from '@/constants/faqs'

// ─── Component ────────────────────────────────────────────────

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null)

  function handleToggle(id: string) {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <Section
      id="faq"
      variant="gray"
      labelledBy="faq-heading"
    >
      <Container narrow>
        <div className="flex flex-col gap-12">

          {/* Header */}
          <AnimationWrapper variant="fadeUp">
            <SectionHeader
              label="Common Questions"
              headline="Answers to what most people ask before getting in touch"
              subheadline="If your question is not here, ask us directly — we respond quickly."
              headingId="faq-heading"
            />
          </AnimationWrapper>

          {/* Accordion list — no role="list" since FAQItem children are divs,
              not listitem elements. The accordion ARIA pattern (aria-expanded +
              role="region") provides all necessary screen-reader semantics. */}
          <AnimationWrapper variant="fadeUp" delay={0.1}>
            <div aria-label="Frequently asked questions">
              {faqs.map((item, index) => (
                <FAQItem
                  key={item.id}
                  item={item}
                  isOpen={openId === item.id}
                  onToggle={() => handleToggle(item.id)}
                  index={index}
                />
              ))}
            </div>
          </AnimationWrapper>

          {/* Bottom CTA */}
          <AnimationWrapper variant="fadeUp" delay={0.15}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
              <p className="type-body text-text-muted">
                Still have questions?
              </p>
              <WhatsAppCTA
                label="Ask Us on WhatsApp"
                variant="secondary"
                size="sm"
                message="Hello Pixel Studio by Bovio, I have a question about your services."
              />
            </div>
          </AnimationWrapper>

        </div>
      </Container>
    </Section>
  )
}
