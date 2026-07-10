/**
 * TrustBadgesSection — technology stack trust signal.
 *
 * Visual upgrade:
 *   - Replaced border-y with a fade-edge gradient divider
 *   - More breathing room, slightly tighter logo opacity
 *   - Label gets the new type-label styling
 */

import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { AnimationWrapper } from '@/components/common/AnimationWrapper'
import { techBadges } from '@/constants/technologies'

export function TrustBadgesSection() {
  return (
    <div className="section-white py-12">
      {/* Fade-edge top separator */}
      <div className="divider mb-12 mx-auto max-w-container px-5 sm:px-8 lg:px-12" />

      <Container>
        <AnimationWrapper variant="fadeIn">
          <div className="flex flex-col items-center gap-8">

            <p className="type-label text-text-disabled text-center tracking-widest">
              Engineered with modern, reliable technology
            </p>

            <div
              className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6"
              role="list"
              aria-label="Technology stack"
            >
              {techBadges.map((badge) => (
                <div
                  key={badge.id}
                  role="listitem"
                  className="flex items-center gap-2 opacity-40 hover:opacity-70 transition-opacity duration-normal grayscale hover:grayscale-0"
                  title={badge.name}
                >
                  <Image
                    src={badge.imagePath}
                    alt={badge.name}
                    width={120}
                    height={32}
                    className="h-6 w-auto object-contain"
                    loading="eager"
                  />
                </div>
              ))}
            </div>

          </div>
        </AnimationWrapper>
      </Container>

      {/* Fade-edge bottom separator */}
      <div className="divider mt-12 mx-auto max-w-container px-5 sm:px-8 lg:px-12" />
    </div>
  )
}
