/**
 * FeaturedWorkSection — portfolio showcase.
 *
 * Objection answered: "Can I see examples of your work?"
 * Section background: white (section-white)
 *
 * Zero-state: When projects array is empty (at launch), shows an honest
 * empty state message — no fake projects, no placeholders.
 * The empty state communicates "actively building" rather than "nothing to show".
 *
 * When projects exist:
 *   - Grid of ProjectCards
 *   - Clicking a card opens ProjectModal with full detail
 *   - Client Component (manages modal open/close state)
 *
 * Server Component outer wrapper, Client Component for modal state.
 */

'use client'

import { useState, useRef } from 'react'
import { Clock } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { AnimationWrapper } from '@/components/common/AnimationWrapper'
import { StaggerWrapper } from '@/components/common/StaggerWrapper'
import { ProjectCard } from '@/components/cards/ProjectCard'
import { ProjectModal } from '@/components/common/ProjectModal'
import { WhatsAppCTA } from '@/components/common/WhatsAppCTA'
import { projects } from '@/constants/projects'
import type { Project } from '@/constants/projects'

// ─── Empty State ──────────────────────────────────────────────

function EmptyState() {
  return (
    <AnimationWrapper variant="fadeUp">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-6 rounded-2xl border border-dashed border-border bg-bg-secondary px-8 py-16 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-surface text-text-muted">
          <Clock size={24} strokeWidth={1.5} aria-hidden="true" />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="type-heading-sm text-text-primary">Projects in progress</h3>
          <p className="type-body leading-relaxed text-text-muted">
            We are actively building client projects. Our portfolio will be published here as work
            is completed. In the meantime, we would love to hear about yours.
          </p>
        </div>
        <WhatsAppCTA
          label="Start Your Project"
          size="md"
          message="Hello Pixel Studio by Bovio, I'm interested in starting a project with you."
        />
      </div>
    </AnimationWrapper>
  )
}

// ─── Section ──────────────────────────────────────────────────

export function FeaturedWorkSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  // Ref to the card element that opened the modal — focus returns here on close
  const triggerRef = useRef<HTMLElement | null>(null)

  const hasProjects = projects.length > 0
  // Show max 6 on homepage
  const featured = projects.slice(0, 6)

  function handleOpen(project: Project, trigger: HTMLElement) {
    triggerRef.current = trigger
    setActiveProject(project)
  }

  return (
    <>
      <Section id="work" variant="white" labelledBy="work-heading">
        <Container>
          <div className="flex flex-col gap-12">
            {/* Header */}
            <AnimationWrapper variant="fadeUp">
              <SectionHeader
                label="Featured Work"
                headline={hasProjects ? 'Projects built for real businesses' : 'Design concepts'}
                subheadline={
                  hasProjects
                    ? 'A selection of projects built for real businesses with real goals.'
                    : 'A showcase of design concepts demonstrating what we build for our clients.'
                }
                headingId="work-heading"
              />
            </AnimationWrapper>

            {/* Content */}
            {hasProjects ? (
              <StaggerWrapper
                as="ul"
                speed="normal"
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {featured.map((project) => (
                  <AnimationWrapper key={project.slug} variant="scaleUp" as="li">
                    <ProjectCard project={project} onOpen={handleOpen} />
                  </AnimationWrapper>
                ))}
              </StaggerWrapper>
            ) : (
              <EmptyState />
            )}
          </div>
        </Container>
      </Section>

      {/* Project Modal — rendered outside Section to avoid z-index issues */}
      <ProjectModal
        project={activeProject}
        isOpen={activeProject !== null}
        onClose={() => setActiveProject(null)}
        triggerRef={triggerRef}
      />
    </>
  )
}
