import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Crumb = { label: string; to?: string }

type Props = {
  eyebrow?: string
  title: ReactNode
  lead?: ReactNode
  crumbs?: Crumb[]
  image?: string
  imageAlt?: string
  children?: ReactNode
}

/** Compact hero used by every page except the home page. */
export function PageHero({ eyebrow, title, lead, crumbs, image, imageAlt, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-marine-950 text-white">
      {image && (
        <>
          <img
            src={image}
            alt={imageAlt ?? ''}
            className="absolute inset-0 size-full object-cover opacity-20"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-marine-950 via-marine-950/90 to-marine-950/50" />
        </>
      )}

      {/* Soft aqua bloom, kept behind the copy. */}
      <div
        aria-hidden
        className="absolute -right-32 -top-32 size-96 rounded-full bg-aqua-500/20 blur-3xl"
      />

      <div className="container-page relative py-20 sm:py-28">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-marine-300">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-2">
                  {c.to ? (
                    <Link to={c.to} className="transition-colors hover:text-aqua-400">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-marine-400">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && <span className="text-marine-600">/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {eyebrow && <p className="eyebrow mb-4 text-aqua-400">{eyebrow}</p>}

        <h1 className="max-w-4xl font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        {lead && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-marine-200">{lead}</p>
        )}

        {children && <div className="mt-9">{children}</div>}
      </div>
    </section>
  )
}
