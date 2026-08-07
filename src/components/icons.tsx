/**
 * Inline icon set. Small enough that a dependency isn't worth it, and it keeps
 * stroke weight consistent with the rest of the type.
 */
import type { SVGProps } from 'react'

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 24 24',
}

type P = SVGProps<SVGSVGElement>

export const DropIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 2.7c3.2 3.6 6 7 6 10.3a6 6 0 0 1-12 0c0-3.3 2.8-6.7 6-10.3Z" />
  </svg>
)

export const FlameIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 21a6 6 0 0 0 6-6c0-4-3-5.5-3-9-2 1.5-3 3.5-3 5.5-1-1-1.5-2-1.5-3.5C8.5 9.5 6 12 6 15a6 6 0 0 0 6 6Z" />
  </svg>
)

export const FactoryIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3 21h18M4 21V10l5 3.5V10l5 3.5V7l5 3.5V21" />
    <path d="M8 17h1.5M13 17h1.5M18 17h.5" />
  </svg>
)

export const GaugeIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 18a8 8 0 1 1 16 0" />
    <path d="M12 18l4.2-5" />
    <circle cx="12" cy="18" r="1.2" />
  </svg>
)

export const CheckIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
)

export const ArrowIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
)

export const PhoneIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z" />
  </svg>
)

export const MailIcon = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="5.5" width="18" height="13" rx="2" />
    <path d="m3.8 7 8.2 6 8.2-6" />
  </svg>
)

export const PinIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
)

export const ClockIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 1.8" />
  </svg>
)

export const MenuIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const CloseIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
)

export const ChevronIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
)
