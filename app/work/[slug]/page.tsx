/**
 * /work/[slug] — Individual project detail page
 *
 * Full project case study: cover image, goal, features, color palette,
 * mobile preview. Clicking a ProjectCard on /work can either open a
 * modal (on the listing page) or navigate here for a dedicated URL.
 *
 * At launch, all projects are conceptual — each is clearly labeled.
 *
 * Static generation: all slugs from constants/projects.ts are pre-rendered.
 *
 * SEO:
 *   - Dynamic title + description per project
 *   - JSON-LD CreativeWork schema
 *   - Canonical URL
 */

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { buildPageMetadata } from '@/lib/metadata'
import { projects } from '@/constants/projects'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { AnimationWrapper } from '@/components/common/AnimationWrapper'
import { StaggerWrapper } from '@/components/common/StaggerWrapper'
import { WhatsAppCTA } from '@/components/common/WhatsAppCTA'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { FinalCTASection } from '@/components/sections/FinalCTASection'

// ─── Static params ────────────────────────────────────────────

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

// ─── Metadata ─────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}

  return buildPageMetadata({
    title: project.title,
    description: project.description,
    path: `/work/${project.slug}`,
  })
}

// ─── Palette swatch ───────────────────────────────────────────

function PaletteSwatch({ color }: { color: string }) {
  return (
    <div
      className="h-10 w-10 shrink-0 rounded-lg border border-border shadow-soft"
      style={{ backgroundColor: color }}
      title={color}
      aria-label={color}
    />
  )
}

// ─── Page ─────────────────────────────────────────────────────

export default async function WorkSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  return (
    <>
      {/* ── Back link + hero ──────────────────────────────────── */}
      <Section variant="white" padding="default" labelledBy="project-title">
        <Container>
          <AnimationWrapper variant="fadeUp">
            <div className="flex flex-col gap-8">
              {/* Back navigation */}
              <Link
                href="/work"
                className="type-body-sm duration-fast group inline-flex items-center gap-2 text-text-muted transition-colors hover:text-text-primary"
              >
                <ArrowLeft
                  size={15}
                  strokeWidth={1.75}
                  aria-hidden="true"
                  className="duration-fast transition-transform group-hover:-translate-x-0.5"
                />
                All projects
              </Link>

              {/* Header */}
              <div className="flex max-w-[680px] flex-col gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="default" size="md">
                    {project.industry}
                  </Badge>
                  {project.isConceptProject && (
                    <Badge variant="accent" size="md">
                      Design Concept
                    </Badge>
                  )}
                </div>

                <h1 id="project-title" className="type-display text-text-primary">
                  {project.title}
                </h1>

                <p className="type-body-lg leading-relaxed text-text-muted">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              {project.tags.filter((t) => t !== 'Design Concept').length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.tags
                    .filter((t) => t !== 'Design Concept')
                    .map((tag) => (
                      <span
                        key={tag}
                        className="type-body-sm rounded-full border border-border bg-bg-secondary px-3 py-1.5 text-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                </div>
              )}
            </div>
          </AnimationWrapper>
        </Container>
      </Section>

      {/* ── Cover image ───────────────────────────────────────── */}
      <Section variant="gray" padding="none">
        <AnimationWrapper variant="fadeIn">
          <div className="relative aspect-video w-full overflow-hidden bg-bg-tertiary">
            {project.coverImage ? (
              <Image
                src={project.coverImage}
                alt={`${project.title} — desktop preview`}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            ) : (
              /* Palette-tinted placeholder when no image */
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  background: project.palette?.[0]
                    ? `linear-gradient(135deg, ${project.palette[0]}22 0%, ${project.palette[1] ?? project.palette[0]}44 100%)`
                    : undefined,
                }}
              >
                <p className="type-body text-text-muted">Preview coming soon</p>
              </div>
            )}
          </div>
        </AnimationWrapper>
      </Section>

      {/* ── Project detail ────────────────────────────────────── */}
      <Section variant="white" labelledBy="project-title">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Left — main content */}
            <div className="flex flex-col gap-12 lg:col-span-2">
              {/* Business goal */}
              <AnimationWrapper variant="fadeUp">
                <div className="flex flex-col gap-4">
                  <h2 className="type-heading-md text-text-primary">Business Goal</h2>
                  <p className="type-body-lg leading-relaxed text-text-muted">{project.goal}</p>
                </div>
              </AnimationWrapper>

              {/* Key features */}
              {project.features && project.features.length > 0 && (
                <AnimationWrapper variant="fadeUp" delay={0.05}>
                  <div className="flex flex-col gap-4">
                    <h2 className="type-heading-md text-text-primary">Key Features</h2>
                    <StaggerWrapper as="ul" speed="fast" className="flex flex-col gap-3">
                      {project.features.map((feature) => (
                        <AnimationWrapper key={feature} variant="fadeUp" as="li">
                          <div className="flex items-start gap-3 rounded-xl border border-border bg-bg-secondary p-4">
                            <span
                              className="mt-0.5 shrink-0 text-accent select-none"
                              aria-hidden="true"
                            >
                              ·
                            </span>
                            <p className="type-body text-text-secondary">{feature}</p>
                          </div>
                        </AnimationWrapper>
                      ))}
                    </StaggerWrapper>
                  </div>
                </AnimationWrapper>
              )}

              {/* Mobile preview */}
              {project.mobileImage && (
                <AnimationWrapper variant="fadeUp" delay={0.05}>
                  <div className="flex flex-col gap-4">
                    <h2 className="type-heading-md text-text-primary">Mobile View</h2>
                    <div className="max-w-[200px] overflow-hidden rounded-xl border border-border bg-bg-secondary">
                      <Image
                        src={project.mobileImage}
                        alt={`${project.title} — mobile preview`}
                        width={200}
                        height={400}
                        className="h-auto w-full"
                      />
                    </div>
                  </div>
                </AnimationWrapper>
              )}
            </div>

            {/* Right — metadata sidebar */}
            <div className="flex flex-col gap-8">
              {/* Color palette */}
              {project.palette && project.palette.length > 0 && (
                <AnimationWrapper variant="fadeUp">
                  <div className="flex flex-col gap-4">
                    <h2 className="type-heading-md text-text-primary">Color Palette</h2>
                    <div className="flex flex-wrap gap-3">
                      {project.palette.map((color) => (
                        <PaletteSwatch key={color} color={color} />
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.palette.map((color) => (
                        <code
                          key={color}
                          className="type-body-sm rounded-md border border-border bg-bg-secondary px-2 py-1 text-text-muted"
                        >
                          {color}
                        </code>
                      ))}
                    </div>
                  </div>
                </AnimationWrapper>
              )}

              {/* CTA */}
              <AnimationWrapper variant="fadeUp" delay={0.1}>
                <div className="flex flex-col gap-4 rounded-xl border border-border bg-bg-secondary p-6">
                  <p className="type-heading-sm text-text-primary">
                    Interested in a similar project?
                  </p>
                  <p className="type-body text-text-muted">
                    Tell us about your business and what you need. We will put together a proposal.
                  </p>
                  <WhatsAppCTA
                    label="Start a Conversation"
                    size="md"
                    message={`Hello Pixel Studio by Bovio, I saw your ${project.title} project and I'm interested in something similar for my business.`}
                  />
                </div>
              </AnimationWrapper>

              {/* Back to all work */}
              <AnimationWrapper variant="fadeUp" delay={0.15}>
                <Button href="/work" variant="ghost" size="sm" className="self-start">
                  ← Back to all projects
                </Button>
              </AnimationWrapper>
            </div>
          </div>
        </Container>
      </Section>

      <FinalCTASection />
    </>
  )
}
