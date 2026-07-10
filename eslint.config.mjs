import next from 'eslint-config-next'
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'

/**
 * ESLint flat config for Pixel Studio by Bovio.
 * Uses Next.js 16 native flat config format (ESLint 9+).
 */
const eslintConfig = [
  // Global ignores — replaces .eslintignore (deprecated in ESLint 9)
  {
    ignores: ['node_modules/**', '.next/**', 'out/**'],
  },
  ...next,
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    rules: {
      // Disallow console in production code — use a logger instead
      'no-console': 'warn',
      // Enforce explicit types — no any
      '@typescript-eslint/no-explicit-any': 'error',
      // Catch unused variables before they become dead code
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      // Self-closing tags improve readability
      'react/self-closing-comp': 'warn',
    },
  },
]

export default eslintConfig
