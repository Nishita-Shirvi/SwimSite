import { useMemo, useState } from 'react'
import { CtaBanner } from '@/components/CtaBanner'
import { PageHero } from '@/components/PageHero'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { CloseIcon } from '@/components/icons'
import { ranges } from '@/data/products'
import { usePageMeta } from '@/hooks/usePageMeta'

type Shot = { src: string; alt: string; category: string }

const categories = ['All', 'Water Softeners', 'Heat Pumps', 'Pressure Boosters'] as const

const categoryForRange: Record<string, string> = {
  'water-softeners': 'Water Softeners',
  'heat-pump-water-heaters': 'Heat Pumps',
  'pressure-boosters': 'Pressure Boosters',
  'industrial-water-purification': 'Water Softeners',
}

export default function Gallery() {
  usePageMeta(
    'Gallery',
    'Sofpour water softeners, heat pump water heaters and pressure boosting systems in the field.',
  )

  const [filter, setFilter] = useState<(typeof categories)[number]>('All')
  const [lightbox, setLightbox] = useState<Shot | null>(null)

  // Build the gallery from the catalogue so it never drifts out of sync.
  const shots = useMemo<Shot[]>(() => {
    const seen = new Set<string>()
    const out: Shot[] = []

    for (const range of ranges) {
      for (const model of range.models) {
        if (seen.has(model.image)) continue
        seen.add(model.image)
        out.push({
          src: model.image,
          alt: model.imageAlt,
          category: categoryForRange[range.slug] ?? 'Water Softeners',
        })
      }
    }
    return out
  }, [])

  const visible = filter === 'All' ? shots : shots.filter((s) => s.category === filter)

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Systems in the field"
        lead="Product photography and installations from across our residential and commercial range."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Gallery' }]}
      />

      <Section>
        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                filter === c
                  ? 'bg-marine-900 text-white'
                  : 'border border-marine-200 text-marine-700 hover:border-marine-400'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((shot, i) => (
            <Reveal key={shot.src} delay={(i % 3) * 80}>
              <button
                type="button"
                onClick={() => setLightbox(shot)}
                className="group block w-full overflow-hidden rounded-2xl border border-marine-100 bg-marine-50"
              >
                <div className="aspect-4/3 overflow-hidden">
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:scale-105"
                  />
                </div>
                <p className="px-5 py-4 text-left text-sm text-marine-700">{shot.alt}</p>
              </button>
            </Reveal>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="py-16 text-center text-marine-600">Nothing in this category yet.</p>
        )}
      </Section>

      {/* ------------------------------------------------------------ Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-marine-950/90 p-6 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute right-6 top-6 rounded-full border border-white/20 p-3 text-white transition-colors hover:bg-white/10"
            aria-label="Close image"
          >
            <CloseIcon className="size-5" />
          </button>

          <figure onClick={(e) => e.stopPropagation()} className="max-w-4xl">
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[75vh] w-auto rounded-xl object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-marine-300">
              {lightbox.alt}
            </figcaption>
          </figure>
        </div>
      )}

      <CtaBanner />
    </>
  )
}
