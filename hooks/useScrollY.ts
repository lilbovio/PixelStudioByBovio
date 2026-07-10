'use client'

import { useState, useEffect } from 'react'

/**
 * Returns the current scroll position (Y offset) of the window.
 * Updates on every scroll event. Throttled via requestAnimationFrame.
 *
 * Primarily used by FloatingNavbar to trigger the glass effect
 * once the user has scrolled past the initial viewport.
 *
 * Usage:
 *   const scrollY = useScrollY()
 *   const hasScrolled = scrollY > 20
 */
export function useScrollY(): number {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let rafId: number

    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        setScrollY(window.scrollY)
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return scrollY
}
