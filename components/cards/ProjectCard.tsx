/**
 * ProjectCard — displays a project with image, tags, title and description.
 *
 * Used in FeaturedWorkSection (homepage) and /work page.
 *
 * When the user clicks the card, it opens ProjectModal (managed by FeaturedWorkSection).
 * Client Component — manages onClick and image error state.
 *
 * Image: Next.js <Image> with fill layout inside an aspect-ratio container.
 * Falls back to a styled gradient placeholder if:
 *   - no coverImage is provided
 *   - the image file is not found (404 — e.g., concept projects with no assets yet)
 *
 * The gradient uses the project's first palette color when available.
 */

'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/cn'
import type { Project } from '@/constants/projects'

// ─── Types ────────────────────────────────────────────────────

interface ProjectCardProps {
  project:    Project
  /** Called when the card is activated. Receives the project and the card DOM node (for focus restoration). */
  onOpen:     (project: Project, trigger: HTMLElement) => void
  className?: string
}

// ─── Image placeholder ────────────────────────────────────────

function ImagePlaceholder({ project }: { project: Project }) {
  // Use the first palette color as the gradient seed, falling back to tokens
  const baseColor = project.palette?.[0] ?? '#f3f4f6'
  const midColor  = project.palette?.[1] ?? '#e5e7eb'
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center gap-2"
      style={{ background: `linear-gradient(135deg, ${baseColor}22 0%, ${midColor}44 100%)` }}
    >
      <span className="type-body-sm text-text-muted font-medium">{project.industry}</span>
      <span className="type-body-sm text-text-disabled">Preview coming soon</span>
    </div>
  )
}

// ─── Component ────────────────────────────────────────────────

export function ProjectCard({ project, onOpen, className }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false)
  const showImage = !!project.coverImage && !imgError

  return (
    <article
      className={cn(
        'group flex flex-col overflow-hidden rounded-xl',
        'bg-surface border border-border shadow-soft',
        'transition-all duration-normal ease-smooth',
        'hover:-translate-y-1 hover:shadow-elevated hover:border-border-strong',
        'cursor-pointer',
        className
      )}
      onClick={(e) => onOpen(project, e.currentTarget)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onOpen(project, e.currentTarget)
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View ${project.title} project details`}
    >
      {/* ── Image / preview ───────────────────────────────────── */}
      <div className="relative aspect-video overflow-hidden bg-bg-tertiary">
        {showImage ? (
          <Image
            src={project.coverImage}
            alt={`${project.title} preview`}
            fill
            className="object-cover transition-transform duration-slow ease-out-expo group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setImgError(true)}
          />
        ) : (
          <ImagePlaceholder project={project} />
        )}

        {/* Design Concept badge */}
        {project.isConceptProject && (
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-surface/90 backdrop-blur-sm border border-border type-body-sm text-text-muted">
              Design Concept
            </span>
          </div>
        )}
      </div>

      {/* ── Card body ─────────────────────────────────────────── */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        {/* Tags */}
        {project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.tags.filter(t => t !== 'Design Concept').map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full bg-bg-secondary type-body-sm text-text-muted border border-border"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Industry */}
        <span className="type-body-sm text-text-muted">{project.industry}</span>

        {/* Title */}
        <h3 className="type-heading-sm text-text-primary group-hover:text-accent transition-colors duration-normal">
          {project.title}
        </h3>

        {/* Description */}
        <p className="type-body text-text-muted leading-relaxed line-clamp-2 flex-1">
          {project.description}
        </p>

        {/* CTA hint */}
        <span className="type-body-sm text-text-disabled group-hover:text-text-secondary transition-colors duration-fast">
          View details →
        </span>
      </div>
    </article>
  )
}
