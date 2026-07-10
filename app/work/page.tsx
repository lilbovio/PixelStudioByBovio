/**
 * /work — Work page (Server Component shell)
 *
 * This file exports metadata and delegates rendering to WorkClient
 * which owns the Client-side modal state. This split is required
 * because Next.js App Router does not allow metadata exports in
 * 'use client' files.
 */

import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/metadata'
import { WorkClient } from './_client'

// ─── Metadata ─────────────────────────────────────────────────

export const metadata: Metadata = buildPageMetadata({
  title: 'Portafolio de Proyectos',
  description:
    'Explora nuestros proyectos de diseño web: desde landing pages hasta sitios web empresariales completos. Conceptos de diseño y trabajo real.',
  path: '/work',
})

// ─── Page ─────────────────────────────────────────────────────

export default function WorkPage() {
  return <WorkClient />
}
