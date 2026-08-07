import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type Props = {
  children: ReactNode
  id?: string
  eyebrow?: string
  title?: ReactNode
  lead?: ReactNode
  /** Centres the heading block and constrains its width. */
  centered?: boolean
  dark?: boolean
  tint?: boolean
  className?: string
}

export function Section({
  children,
  id,
  eyebrow,
  title,
  lead,
  centered = false,
  dark = false,
  tint = false,
  className = '',
}: Props) {
  const surface = dark ? 'bg-marine-950 text-white' : tint ? 'bg-marine-50' : 'bg-white'

  return (
    <section id={id} className={`${surface} py-20 sm:py-28 ${className}`}>
      <div className="container-page">
        {(eyebrow || title || lead) && (
          <Reveal className={`mb-12 sm:mb-16 ${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}`}>
            {eyebrow && (
              <p className={`eyebrow mb-4 ${dark ? 'text-aqua-400' : ''}`}>{eyebrow}</p>
            )}
            {title && (
              <h2
                className={`font-display text-4xl leading-[1.1] tracking-tight sm:text-5xl ${
                  dark ? 'text-white' : 'text-marine-900'
                }`}
              >
                {title}
              </h2>
            )}
            {lead && (
              <p
                className={`mt-5 text-lg leading-relaxed ${
                  dark ? 'text-marine-200' : 'text-marine-700'
                }`}
              >
                {lead}
              </p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  )
}
