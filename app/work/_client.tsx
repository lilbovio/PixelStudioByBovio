/**
 * WorkClient — Client Component for the /work page.
 *
 * Owns the modal open/close state. Rendered by the Server Component
 * in page.tsx which handles metadata export.
 */

'use client'

import { useState, useRef } from 'react'
import { PageHero } from '@/components/layout/PageHero'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { AnimationWrapper } from '@/components/common/AnimationWrapper'
import { StaggerWrapper } from '@/components/common/StaggerWrapper'
import { ProjectCard } from '@/components/cards/ProjectCard'
import { ProjectModal } from '@/components/common/ProjectModal'
import { FinalCTASection } from '@/components/sections/FinalCTASection'
import { projects } from '@/constants/projects'
import type { Project } from '@/constants/projects'

// ─── Component ────────────────────────────────────────────────

export function WorkClient() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const triggerRef = useRef<HTMLElement | null>(null)

  function handleOpen(project: Project, trigger: HTMLElement) {
    triggerRef.current = trigger
    setActiveProject(project)
  }

  return (
    <>
      <PageHero
        label="Work"
        headline="Design concepts and client projects."
        subheadline="Each concept is built around a real business scenario — demonstrating how we approach different industries, audiences and goals."
        headingId="work-page-heading"
      />

      {/* Project grid */}
      <Section variant="white" labelledBy="work-page-heading">
        <Container>
          {projects.length > 0 ? (
            <StaggerWrapper
              as="ul"
              speed="normal"
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {projects.map((project) => (
                <AnimationWrapper key={project.slug} variant="scaleUp" as="li">
                  <ProjectCard project={project} onOpen={handleOpen} />
                </AnimationWrapper>
              ))}
            </StaggerWrapper>
          ) : (
            <AnimationWrapper variant="fadeUp">
              <div className="flex flex-col items-center gap-4 py-24 text-center">
                <p className="type-body-lg text-text-muted">
                  Projects will appear here as they are completed.
                </p>
              </div>
            </AnimationWrapper>
          )}
        </Container>
      </Section>

      {/* Modal */}
      <ProjectModal
        project={activeProject}
        isOpen={activeProject !== null}
        onClose={() => setActiveProject(null)}
        triggerRef={triggerRef}
      />

      <FinalCTASection />
    </>
  )
}
