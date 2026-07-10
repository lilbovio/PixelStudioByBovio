/**
 * HeroSection — first impression, above the fold.
 *
 * Design direction:
 *   - Maximum whitespace, editorial composition
 *   - Large, tight headline with negative letter-spacing
 *   - Ambient top glow (hero-glow class) for subtle depth
 *   - Abstract browser mockup on the right — premium, not generic
 *   - Floating glass stat cards for social proof without fake testimonials
 *
 * Layout:
 *   Mobile:  text → visual stacked, text always first
 *   Desktop: 2-column, 52/48 split — text left, visual right
 */

'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { WhatsAppCTA } from '@/components/common/WhatsAppCTA'
import { Button } from '@/components/ui/Button'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import {
  heroHeadline,
  heroParagraph,
  heroPrimaryBtn,
  heroSecondaryBtn,
  heroVisual,
} from '@/lib/motion'
import type { Variants } from 'framer-motion'

// ─── Static variants for reduced motion ───────────────────────
const staticVisible: Variants = {
  hidden:  { opacity: 1, y: 0, filter: 'blur(0px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

// ─── Hero Visual ──────────────────────────────────────────────
// Premium browser mockup communicating "polished digital product"
// without relying on real client assets.

function HeroVisual() {
  return (
    <div className="relative w-full max-w-[540px] mx-auto lg:mx-0">

      {/* Ambient glow behind the visual */}
      <div
        className="absolute -inset-12 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(29,78,216,0.07) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Browser chrome — main mockup */}
      <div
        className="relative rounded-2xl overflow-hidden border border-border bg-surface"
        style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.6)' }}
      >

        {/* Browser toolbar */}
        <div className="flex items-center gap-1.5 px-4 py-3 bg-bg-secondary border-b border-border">
          {/* Traffic lights */}
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" aria-hidden="true" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" aria-hidden="true" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" aria-hidden="true" />

          {/* URL bar */}
          <div className="flex-1 ml-3 h-6 rounded-md bg-bg-tertiary border border-border flex items-center px-3 gap-2">
            <div className="w-2 h-2 rounded-full bg-success opacity-60" aria-hidden="true" />
            <span className="type-body-sm text-text-disabled select-none">pixelstudiobybovio.lat</span>
          </div>
        </div>

        {/* Simulated page content */}
        <div className="px-6 pt-5 pb-6 bg-bg space-y-5">

          {/* Nav bar */}
          <div className="flex items-center justify-between mb-2">
            <div className="h-2.5 w-20 rounded-sm bg-text-primary/70" />
            <div className="flex gap-3">
              <div className="h-2 w-10 rounded-sm bg-bg-tertiary" />
              <div className="h-2 w-10 rounded-sm bg-bg-tertiary" />
              <div className="h-2 w-10 rounded-sm bg-bg-tertiary" />
              <div className="h-6 w-16 rounded-md bg-btn-primary/85" />
            </div>
          </div>

          {/* Hero block */}
          <div className="space-y-3 pt-4">
            <div className="h-5 w-4/5 rounded-md bg-text-primary/12" />
            <div className="h-5 w-3/5 rounded-md bg-text-primary/12" />
            <div className="h-5 w-2/5 rounded-md bg-text-primary/08" />
          </div>

          {/* Subtext */}
          <div className="space-y-1.5">
            <div className="h-2 w-full rounded-sm bg-bg-tertiary" />
            <div className="h-2 w-11/12 rounded-sm bg-bg-tertiary" />
            <div className="h-2 w-3/4 rounded-sm bg-bg-tertiary" />
          </div>

          {/* CTA row */}
          <div className="flex gap-3 pt-1">
            <div className="h-9 w-28 rounded-lg bg-btn-primary/85" />
            <div className="h-9 w-22 rounded-lg border border-border" />
          </div>

          {/* Cards row */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            {[1, 0.65, 0.40].map((opacity, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-surface p-3 space-y-2.5"
                style={{ opacity }}
                aria-hidden="true"
              >
                <div className="w-7 h-7 rounded-lg bg-accent-muted" />
                <div className="h-2 w-4/5 rounded-sm bg-bg-tertiary" />
                <div className="h-1.5 w-full rounded-sm bg-bg-tertiary" />
                <div className="h-1.5 w-2/3 rounded-sm bg-bg-tertiary" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating glass stat card — top right */}
      <div
        className="absolute -top-4 -right-4 lg:-right-8 flex items-center gap-3 pl-3 pr-4 py-3 rounded-xl border border-border/70 bg-surface shadow-elevated"
        aria-hidden="true"
        style={{ backdropFilter: 'blur(12px)' }}
      >
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-success/10">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 11L6.5 7.5L9 10L13 5" stroke="#059669" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <p className="type-body-sm font-medium text-text-primary leading-none mb-0.5">Conversion +42%</p>
          <p className="type-body-sm text-text-disabled leading-none">after redesign</p>
        </div>
      </div>

      {/* Floating glass badge — bottom left */}
      <div
        className="absolute -bottom-3 -left-3 lg:-left-6 flex items-center gap-2 px-3 py-2.5 rounded-xl border border-border/70 bg-surface shadow-elevated"
        aria-hidden="true"
        style={{ backdropFilter: 'blur(12px)' }}
      >
        <div className="flex -space-x-1.5">
          {['#111110', '#1d4ed8', '#6c6c68'].map((c, i) => (
            <div
              key={i}
              className="w-6 h-6 rounded-full border-2 border-surface flex items-center justify-center"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
        <p className="type-body-sm text-text-muted">
          <span className="text-text-primary font-medium">5 projects</span> launched
        </p>
      </div>
    </div>
  )
}

// ─── Section ──────────────────────────────────────────────────

export function HeroSection() {
  const shouldReduce = useReducedMotion()

  const vEyebrow   = shouldReduce ? staticVisible : heroParagraph
  const vHeadline  = shouldReduce ? staticVisible : heroHeadline
  const vParagraph = shouldReduce ? staticVisible : heroParagraph
  const vCTA       = shouldReduce ? staticVisible : heroPrimaryBtn
  const vMicro     = shouldReduce ? staticVisible : heroSecondaryBtn
  const vVisual    = shouldReduce ? staticVisible : heroVisual

  return (
    <Section
      id="hero"
      variant="white"
      padding="default"
      labelledBy="hero-heading"
      className="relative overflow-hidden"
    >
      {/* Ambient top-center glow */}
      <div
        className="absolute inset-0 hero-glow pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-[52%_48%] gap-12 lg:gap-8 items-center py-8 lg:py-16">

          {/* ── Left column — copy ──────────────────────────────── */}
          <div className="flex flex-col gap-7 order-1">

            {/* Eyebrow */}
            <motion.div
              variants={vEyebrow}
              initial="hidden"
              animate="visible"
              className="inline-flex"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface shadow-soft type-body-sm text-text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-success" aria-hidden="true" />
                <MapPin size={12} strokeWidth={1.75} aria-hidden="true" />
                Digital Design Studio · Guadalajara, Mexico
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              id="hero-heading"
              variants={vHeadline}
              initial="hidden"
              animate="visible"
              className="type-hero text-text-primary"
            >
              Design that
              <br />
              builds trust
            </motion.h1>

            {/* Supporting paragraph */}
            <motion.p
              variants={vParagraph}
              initial="hidden"
              animate="visible"
              className="type-body-lg text-text-muted max-w-[480px]"
            >
              We design and build modern websites that help businesses earn
              trust, attract customers and grow.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={vCTA}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-3 pt-1"
            >
              <WhatsAppCTA
                label="Start a Project"
                size="lg"
                message="Hello Pixel Studio by Bovio, I found your website and I'm interested in discussing a project. I would like to get a quote."
                icon={<ArrowRight size={16} aria-hidden="true" />}
                iconPosition="right"
              />
              <Button href="#work" variant="secondary" size="lg">
                See Our Work
              </Button>
            </motion.div>

            {/* Trust micro-copy */}
            <motion.p
              variants={vMicro}
              initial="hidden"
              animate="visible"
              className="type-body-sm text-text-disabled"
            >
              No commitment required · Free consultation · Response within 24h
            </motion.p>

          </div>

          {/* ── Right column — visual ───────────────────────────── */}
          <motion.div
            variants={vVisual}
            initial="hidden"
            animate="visible"
            className="order-2 flex justify-center lg:justify-end"
            aria-hidden="true"
          >
            <HeroVisual />
          </motion.div>

        </div>
      </Container>
    </Section>
  )
}
