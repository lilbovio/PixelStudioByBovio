/**
 * DynamicIcon — renders a Lucide icon by name string.
 *
 * All services, process steps, and why-us items store icon names
 * as strings from the Lucide icon library. This component resolves
 * the name at runtime using dynamic import from lucide-react.
 *
 * Why not static imports?
 *   All icon names live in constants/ files. They may be added or changed
 *   without code changes. Dynamic resolution keeps the constants clean.
 *
 * Fallback: if the icon name is not found, renders nothing.
 *
 * This is a Client Component because lucide-react icons are runtime objects.
 * The component is a thin leaf — the overhead is minimal.
 *
 * Usage:
 *   <DynamicIcon name="layout-template" size={24} />
 *   <DynamicIcon name="shield-check" size={20} strokeWidth={1.5} />
 */

'use client'

import * as LucideIcons from 'lucide-react'
import type { LucideProps } from 'lucide-react'

// ─── Types ────────────────────────────────────────────────────

interface DynamicIconProps extends LucideProps {
  /** Lucide icon name in kebab-case, e.g. "layout-template" */
  name: string
}

// ─── Name → PascalCase conversion ─────────────────────────────

function toPascalCase(name: string): string {
  return name
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
}

// ─── Component ────────────────────────────────────────────────

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const pascalName = toPascalCase(name)
  // lucide-react exports icons as named exports — access via index
  // Double-cast through unknown to satisfy strict TS: LucideIcons' own types
  // don't match the generic ComponentType<LucideProps> index signature exactly.
  const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<LucideProps>>)[pascalName]

  if (!Icon) return null

  return <Icon {...props} />
}
