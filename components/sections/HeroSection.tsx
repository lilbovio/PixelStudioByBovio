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

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  MapPin,
  TrendingUp,
  Zap,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
} from 'lucide-react'
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
  hidden: { opacity: 1, y: 0, filter: 'blur(0px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

// ─── Hero Visual ──────────────────────────────────────────────
// Premium browser mockup communicating "polished digital product"
// without relying on real client assets.

interface MockupData {
  id: string
  brandName: string
  brandIconLetter: string
  accentColorClass: string
  logoBgClass: string
  navLinks: string[]
  ctaButtonText: string
  heroTitle: string
  heroDesc: string
  primaryCtaText: string
  secondaryCtaText: string
  bottomType: 'saas' | 'ecommerce' | 'fintech' | 'portfolio' | 'ai'
  url: string
}

const mockups: MockupData[] = [
  {
    id: 'saas',
    brandName: 'APEX',
    brandIconLetter: 'A',
    accentColorClass: 'bg-accent text-white',
    logoBgClass: 'bg-accent',
    navLinks: ['Features', 'Pricing', 'Docs'],
    ctaButtonText: 'Sign Up',
    heroTitle: 'Scale your SaaS business without the complexity',
    heroDesc:
      'An all-in-one platform to analyze growth, automate customer workflows, and increase retention metrics.',
    primaryCtaText: 'Start Free Trial',
    secondaryCtaText: 'Book a Demo',
    bottomType: 'saas',
    url: 'apex.dev',
  },
  {
    id: 'ecommerce',
    brandName: 'OAK & CO.',
    brandIconLetter: 'O',
    accentColorClass: 'bg-emerald-700 text-white',
    logoBgClass: 'bg-emerald-700',
    navLinks: ['Shop', 'Story', 'Journal'],
    ctaButtonText: 'Cart (0)',
    heroTitle: 'Minimalist home goods for intentional living',
    heroDesc:
      'Curated home accessories crafted by independent global artisans and designed to last a lifetime.',
    primaryCtaText: 'Shop New Arrivals',
    secondaryCtaText: 'Our Story',
    bottomType: 'ecommerce',
    url: 'oakandco.com',
  },
  {
    id: 'fintech',
    brandName: 'payflow.',
    brandIconLetter: 'P',
    accentColorClass: 'bg-violet-600 text-white',
    logoBgClass: 'bg-violet-600',
    navLinks: ['Cards', 'Spend', 'APIs'],
    ctaButtonText: 'App',
    heroTitle: 'The smart way to manage company spend',
    heroDesc:
      'Issue physical & virtual cards. Track every dollar, automate expense reports, and close books faster.',
    primaryCtaText: 'Get Started',
    secondaryCtaText: 'Talk to Sales',
    bottomType: 'fintech',
    url: 'payflow.io',
  },
  {
    id: 'portfolio',
    brandName: 'canvas*',
    brandIconLetter: 'C',
    accentColorClass: 'bg-orange-500 text-white',
    logoBgClass: 'bg-orange-500',
    navLinks: ['Work', 'Studio', 'Contact'],
    ctaButtonText: 'Brief',
    heroTitle: 'Crafting digital experiences that move people',
    heroDesc:
      'An independent design partner built for ambitious tech startups, creators, and modern digital brands.',
    primaryCtaText: 'View Showcase',
    secondaryCtaText: 'Services',
    bottomType: 'portfolio',
    url: 'canvas.studio',
  },
  {
    id: 'ai',
    brandName: 'brainwave.ai',
    brandIconLetter: 'B',
    accentColorClass: 'bg-indigo-600 text-white',
    logoBgClass: 'bg-indigo-600',
    navLinks: ['Models', 'Docs', 'Pricing'],
    ctaButtonText: 'Console',
    heroTitle: 'Supercharge your content creation with AI',
    heroDesc:
      'Write clean landing page copy, marketing emails, and professional articles 10x faster with AI.',
    primaryCtaText: 'Write for Free',
    secondaryCtaText: 'Watch Demo',
    bottomType: 'ai',
    url: 'brainwave.ai',
  },
]

function MockupBottom({ type }: { type: MockupData['bottomType'] }) {
  if (type === 'saas') {
    return (
      <div className="grid grid-cols-3 gap-3 pt-2">
        {[
          {
            icon: <TrendingUp size={12} className="text-accent" />,
            title: 'Analytics',
            desc: 'Real-time statistics',
            opacity: 1,
          },
          {
            icon: <Zap size={12} className="text-amber-500" />,
            title: 'Speed',
            desc: 'Instant setups',
            opacity: 0.7,
          },
          {
            icon: <ShieldCheck size={12} className="text-emerald-500" />,
            title: 'Security',
            desc: 'Enterprise grade',
            opacity: 0.45,
          },
        ].map((card, i) => (
          <div
            key={i}
            className="flex flex-col gap-1 rounded-xl border border-border bg-surface p-2.5 transition-all duration-300"
            style={{ opacity: card.opacity }}
            aria-hidden="true"
          >
            <div className="flex h-5 w-5 items-center justify-center rounded bg-bg-secondary">
              {card.icon}
            </div>
            <div className="mt-1 text-[10px] leading-none font-semibold text-text-primary">
              {card.title}
            </div>
            <div className="text-[7.5px] leading-tight text-text-disabled">{card.desc}</div>
          </div>
        ))}
      </div>
    )
  }

  if (type === 'ecommerce') {
    return (
      <div className="grid grid-cols-3 gap-3 pt-2">
        {[
          {
            title: 'Ash Chair',
            price: '$240',
            bg: 'bg-amber-100/10',
            border: 'border-amber-500/10',
            icon: <ShoppingBag size={12} className="text-emerald-700" />,
          },
          {
            title: 'Clay Vase',
            price: '$85',
            bg: 'bg-emerald-100/10',
            border: 'border-emerald-500/10',
            icon: <ShoppingBag size={12} className="text-emerald-700 opacity-70" />,
          },
          {
            title: 'Desk Lamp',
            price: '$160',
            bg: 'bg-neutral-100/10',
            border: 'border-neutral-500/10',
            icon: <ShoppingBag size={12} className="text-emerald-700 opacity-40" />,
          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex flex-col gap-1 rounded-xl border border-border bg-surface p-2.5 transition-all duration-300"
            aria-hidden="true"
          >
            <div
              className={`flex h-12 w-full items-center justify-center rounded-lg border ${item.border} ${item.bg}`}
            >
              {item.icon}
            </div>
            <div className="mt-1 flex items-center justify-between text-[9px] leading-none font-semibold text-text-primary">
              <span>{item.title}</span>
              <span className="text-text-muted">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (type === 'fintech') {
    return (
      <div className="grid grid-cols-2 gap-3 pt-2">
        {/* Mini Credit Card */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-violet-600 to-indigo-700 p-3 text-white shadow-soft">
          <div className="flex items-start justify-between">
            <span className="text-[7px] font-bold tracking-widest opacity-80">PayFlow.</span>
            <div className="h-3 w-4 rounded-sm bg-white/20" />
          </div>
          <div className="mt-4">
            <div className="font-mono text-[9px] tracking-wider">**** 4892</div>
            <div className="mt-0.5 font-mono text-[6px] opacity-60">TEAM PLATINUM</div>
          </div>
        </div>
        {/* Transaction log */}
        <div className="flex flex-col justify-center gap-1.5 rounded-xl border border-border bg-surface p-2.5">
          <div className="flex justify-between text-[8px] leading-none text-text-primary">
            <span className="font-semibold">AWS Cloud</span>
            <span className="font-medium text-red-500">-$120.00</span>
          </div>
          <div className="h-px bg-border" />
          <div className="flex justify-between text-[8px] leading-none text-text-primary">
            <span className="font-semibold">Figma Pro</span>
            <span className="font-medium text-red-500">-$15.00</span>
          </div>
          <div className="h-px bg-border" />
          <div className="flex justify-between text-[8px] leading-none text-text-primary">
            <span className="font-semibold">Stripe Payout</span>
            <span className="font-medium text-emerald-500">+$2,450.00</span>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'portfolio') {
    return (
      <div className="grid grid-cols-2 gap-3 pt-2">
        {[
          {
            title: 'Velo Branding',
            category: 'Identity / 2026',
            gradient: 'from-orange-400 to-red-500',
          },
          {
            title: 'Zenith Platform',
            category: 'Product / 2026',
            gradient: 'from-blue-400 to-indigo-600',
          },
        ].map((item, i) => (
          <div
            key={i}
            className="group flex flex-col gap-1 rounded-xl border border-border bg-surface p-2.5"
            aria-hidden="true"
          >
            <div
              className={`h-14 w-full rounded-lg bg-gradient-to-br ${item.gradient} opacity-90`}
            />
            <div className="mt-1 text-[9px] leading-none font-semibold text-text-primary">
              {item.title}
            </div>
            <div className="text-[7px] text-text-disabled">{item.category}</div>
          </div>
        ))}
      </div>
    )
  }

  if (type === 'ai') {
    return (
      <div className="flex flex-col gap-2 rounded-xl border border-border bg-surface p-2.5 pt-2">
        {/* Chat input box */}
        <div className="flex items-center justify-between rounded-lg border border-border bg-bg-secondary px-2 py-1">
          <span className="text-[8px] text-text-muted">
            Write a marketing headline for a bakery...
          </span>
          <Sparkles size={8} className="animate-pulse text-indigo-600" />
        </div>
        {/* Chat response */}
        <div className="rounded-lg border border-indigo-500/10 bg-indigo-50/5 p-2">
          <div className="text-[8px] leading-relaxed text-text-primary">
            ✨ <span className="font-semibold text-indigo-400">Response:</span> "Handcrafted daily
            warmth, delivered fresh to your morning table."
          </div>
        </div>
      </div>
    )
  }

  return null
}

function HeroVisual() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mockups.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  const currentMockup = (mockups[currentIndex] || mockups[0]) as MockupData

  return (
    <div className="relative mx-auto w-full max-w-[540px] lg:mx-0">
      {/* Ambient glow behind the visual */}
      <div
        className="pointer-events-none absolute -inset-12"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(29,78,216,0.07) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Browser chrome — main mockup */}
      <div
        className="relative overflow-hidden rounded-2xl border border-border bg-surface"
        style={{
          boxShadow:
            '0 8px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.6)',
        }}
      >
        {/* Browser toolbar */}
        <div className="flex items-center gap-1.5 border-b border-border bg-bg-secondary px-4 py-3">
          {/* Traffic lights */}
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" aria-hidden="true" />

          {/* URL bar */}
          <div className="ml-3 flex h-6 flex-1 items-center gap-2 rounded-md border border-border bg-bg-tertiary px-3">
            <div className="h-2 w-2 rounded-full bg-success opacity-60" aria-hidden="true" />
            <span className="type-body-sm text-text-disabled select-none">{currentMockup.url}</span>
          </div>
        </div>

        {/* Simulated page content with transition */}
        <div className="relative h-[315px] overflow-hidden bg-bg">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMockup.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="absolute inset-0 flex flex-col justify-between px-6 pt-5 pb-6"
            >
              {/* Nav bar */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div
                    className={`flex h-4 w-4 items-center justify-center rounded-sm text-[8px] font-black text-white ${currentMockup.logoBgClass}`}
                  >
                    {currentMockup.brandIconLetter}
                  </div>
                  <span className="text-[10px] font-bold tracking-wider text-text-primary">
                    {currentMockup.brandName}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  {currentMockup.navLinks.map((link) => (
                    <span key={link} className="text-[9px] font-medium text-text-muted">
                      {link}
                    </span>
                  ))}
                  <div
                    className={`rounded-md px-2.5 py-1 text-[8.5px] font-medium ${currentMockup.accentColorClass}`}
                  >
                    {currentMockup.ctaButtonText}
                  </div>
                </div>
              </div>

              {/* Hero block */}
              <div className="space-y-2 pt-2">
                <h2 className="text-xs leading-tight font-bold tracking-tight text-text-primary sm:text-[14px]">
                  {currentMockup.heroTitle}
                </h2>
                <p className="text-[9px] leading-normal text-text-muted">
                  {currentMockup.heroDesc}
                </p>
              </div>

              {/* CTA row */}
              <div className="flex gap-2.5 pt-0.5">
                <div
                  className={`rounded-lg px-3 py-1.5 text-[8.5px] font-medium shadow-soft ${currentMockup.accentColorClass}`}
                >
                  {currentMockup.primaryCtaText}
                </div>
                <div className="rounded-lg border border-border bg-surface px-3 py-1.5 text-[8.5px] font-medium text-text-primary">
                  {currentMockup.secondaryCtaText}
                </div>
              </div>

              {/* Bottom Content */}
              <MockupBottom type={currentMockup.bottomType} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Interactive Tabs / Indicators */}
      <div className="mt-4 flex flex-wrap justify-center gap-1 px-4">
        {mockups.map((mockup, index) => {
          const isActive = index === currentIndex
          return (
            <button
              key={mockup.id}
              onClick={() => setCurrentIndex(index)}
              className={`relative rounded-full px-2.5 py-1 text-[9px] font-semibold transition-colors duration-300 ${
                isActive ? 'text-text-primary' : 'text-text-disabled hover:text-text-muted'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="activeMockupTab"
                  className="absolute inset-0 rounded-full border border-border bg-surface shadow-soft"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{mockup.brandName}</span>
            </button>
          )
        })}
      </div>

      {/* Floating glass stat card — top right */}
      <div
        className="absolute -top-4 -right-4 flex items-center gap-3 rounded-xl border border-border/70 bg-surface py-3 pr-4 pl-3 shadow-elevated lg:-right-8"
        aria-hidden="true"
        style={{ backdropFilter: 'blur(12px)' }}
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-success/10">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M3 11L6.5 7.5L9 10L13 5"
              stroke="#059669"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <p className="type-body-sm mb-0.5 leading-none font-medium text-text-primary">
            Conversion +42%
          </p>
          <p className="type-body-sm leading-none text-text-disabled">after redesign</p>
        </div>
      </div>

      {/* 5 projects launched badge — moved below tabs to prevent overlap */}
      <div className="mt-6 flex justify-center">
        <div
          className="flex items-center gap-2 rounded-xl border border-border/70 bg-surface px-3 py-2.5 shadow-elevated"
          aria-hidden="true"
        >
          <div className="flex -space-x-1.5">
            {['#111110', '#1d4ed8', '#6c6c68'].map((c, i) => (
              <div
                key={i}
                className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-surface"
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
          <p className="type-body-sm text-text-muted">
            <span className="font-medium text-text-primary">5 projects</span> launched
          </p>
        </div>
      </div>
    </div>
  )
}

// ─── Section ──────────────────────────────────────────────────

export function HeroSection() {
  const shouldReduce = useReducedMotion()

  const vEyebrow = shouldReduce ? staticVisible : heroParagraph
  const vHeadline = shouldReduce ? staticVisible : heroHeadline
  const vParagraph = shouldReduce ? staticVisible : heroParagraph
  const vCTA = shouldReduce ? staticVisible : heroPrimaryBtn
  const vMicro = shouldReduce ? staticVisible : heroSecondaryBtn
  const vVisual = shouldReduce ? staticVisible : heroVisual

  return (
    <Section
      id="hero"
      variant="white"
      padding="default"
      labelledBy="hero-heading"
      className="relative overflow-hidden"
    >
      {/* Ambient top-center glow */}
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-12 py-8 lg:grid-cols-[52%_48%] lg:gap-8 lg:py-16">
          {/* ── Left column — copy ──────────────────────────────── */}
          <div className="order-1 flex flex-col gap-7">
            {/* Eyebrow */}
            <motion.div
              variants={vEyebrow}
              initial="hidden"
              animate="visible"
              className="inline-flex"
            >
              <span className="type-body-sm inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-text-muted shadow-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
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
              className="type-body-lg max-w-[480px] text-text-muted"
            >
              We design and build modern websites that help businesses earn trust, attract customers
              and grow.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={vCTA}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-3 pt-1 sm:flex-row"
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
