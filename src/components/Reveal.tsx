import type { ElementType, ReactNode } from 'react'
import { useReveal } from '@/hooks/useReveal'

type Props = {
  children: ReactNode
  className?: string
  /** Stagger in milliseconds, for lists of sibling cards. */
  delay?: number
  as?: ElementType
}

export function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }: Props) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
