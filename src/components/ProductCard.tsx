import { Link } from 'react-router-dom'
import type { Range } from '@/data/products'
import { ArrowIcon } from './icons'

export function ProductCard({ range }: { range: Range }) {
  return (
    <Link
      to={`/products/${range.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-marine-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-marine-200 hover:shadow-xl hover:shadow-marine-900/8"
    >
      <div className="aspect-4/3 overflow-hidden bg-marine-50">
        <img
          src={range.heroImage}
          alt={range.heroImageAlt}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow">
          {range.segment === 'both'
            ? 'Residential & Commercial'
            : range.segment === 'residential'
              ? 'Residential'
              : 'Commercial'}
        </p>

        <h3 className="mt-3 font-display text-2xl leading-tight tracking-tight text-marine-900">
          {range.name}
        </h3>

        <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-marine-600">
          {range.summary}
        </p>

        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-aqua-600">
          Explore the range
          <ArrowIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}
