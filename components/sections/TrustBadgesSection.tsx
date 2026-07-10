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
      <div className="divider mx-auto mb-12 max-w-container px-5 sm:px-8 lg:px-12" />

      <Container>
        <AnimationWrapper variant="fadeIn">
          <div className="flex flex-col items-center gap-8">
            <p className="text-center text-sm font-medium tracking-[0.2em] text-text-disabled uppercase md:text-base">
              Engineered with modern, reliable technology
            </p>

            <div
              className="flex flex-wrap items-center justify-center gap-x-12 gap-y-10 md:gap-x-20"
              role="list"
              aria-label="Technology stack"
            >
              {techBadges.map((badge) => (
                <div
                  key={badge.id}
                  role="listitem"
                  className="flex items-center gap-2 opacity-60 grayscale transition-all duration-300 hover:-translate-y-1 hover:opacity-100 hover:grayscale-0"
                  title={badge.name}
                >
                  <Image
                    src={badge.imagePath}
                    alt={badge.name}
                    width={180}
                    height={60}
                    className="h-10 w-auto object-contain md:h-13 lg:h-16"
                    loading="eager"
                  />
                </div>
              ))}
            </div>
          </div>
        </AnimationWrapper>
      </Container>

      {/* Fade-edge bottom separator */}
      <div className="divider mx-auto mt-12 max-w-container px-5 sm:px-8 lg:px-12" />
    </div>
  )
}
