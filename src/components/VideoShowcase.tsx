import { useState } from 'react'
import { BackgroundVideo } from './BackgroundVideo'
import { ButtonLink } from './Button'
import { ranges } from '@/data/products'

/**
 * Tabbed video wall for the four product ranges.
 *
 * Deliberately one clip at a time: the four source videos total ~21 MB, so
 * mounting them all would be an unreasonable page weight. Switching tabs swaps
 * the `key`, which remounts BackgroundVideo and drops the previous element.
 */
export function VideoShowcase() {
  const [active, setActive] = useState(0)
  const range = ranges[active]

  return (
    <section className="bg-marine-950 py-20 text-white sm:py-28">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4 text-aqua-400">Systems in motion</p>
          <h2 className="font-display text-4xl leading-[1.1] tracking-tight sm:text-5xl">
            See where the water actually goes
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-marine-200">
            Four product families, each doing a different job on the same supply. Pick one to see
            the system running.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Product ranges"
          className="mt-12 flex flex-wrap gap-2 border-b border-white/10 pb-1"
        >
          {ranges.map((r, i) => (
            <button
              key={r.slug}
              role="tab"
              type="button"
              id={`showcase-tab-${r.slug}`}
              aria-selected={i === active}
              aria-controls={`showcase-panel-${r.slug}`}
              onClick={() => setActive(i)}
              className={`rounded-t-lg px-5 py-3 text-sm font-semibold transition-colors duration-200 ${
                i === active
                  ? 'bg-white/10 text-aqua-400'
                  : 'text-marine-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              {r.name}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          id={`showcase-panel-${range.slug}`}
          aria-labelledby={`showcase-tab-${range.slug}`}
          className="relative mt-8 overflow-hidden rounded-3xl border border-white/10 bg-marine-900"
        >
          <div className="relative aspect-video w-full">
            <BackgroundVideo
              key={range.slug}
              src={range.video}
              poster={range.heroImage}
              className="absolute inset-0 size-full object-cover"
            />
            {/* Keeps the copy legible over whatever frame is on screen. */}
            <div className="absolute inset-0 bg-gradient-to-t from-marine-950 via-marine-950/50 to-transparent" />
          </div>

          <div className="absolute inset-x-0 bottom-0 p-8 sm:p-12">
            <h3 className="max-w-2xl font-display text-2xl leading-snug tracking-tight sm:text-3xl">
              {range.name}
            </h3>
            <p className="mt-3 max-w-2xl leading-relaxed text-marine-200">{range.summary}</p>
            <ButtonLink
              to={`/products/${range.slug}`}
              variant="onDark"
              className="mt-6"
            >
              Explore {range.name}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
