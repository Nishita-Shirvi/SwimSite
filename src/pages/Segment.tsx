import { CtaBanner } from '@/components/CtaBanner'
import { PageHero } from '@/components/PageHero'
import { ProductCard } from '@/components/ProductCard'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { CheckIcon } from '@/components/icons'
import { rangesFor } from '@/data/products'
import { usePageMeta } from '@/hooks/usePageMeta'

type Props = { segment: 'residential' | 'commercial' }

const copy = {
  residential: {
    eyebrow: 'For your home',
    title: 'Water your house can live with',
    lead: 'Softening, heating and pressure for flats, villas and everything between — sized to how many people actually use the water, not to the biggest unit we can sell you.',
    meta: 'Residential water softeners, heat pump water heaters and pressure boosters for Indian homes.',
    points: [
      'Sized by household, from 2–3 members up to large families',
      'Compact units engineered specifically for flats',
      'Fully automatic regeneration — nothing to remember',
      'Corrosion-resistant FRP vessels and PVC fittings',
    ],
  },
  commercial: {
    eyebrow: 'For your business',
    title: 'Process water, at the quality your process needs',
    lead: 'Hotels, hospitals, resorts and manufacturing run on water that has to meet a specification. We design, size and install the plant that gets it there — and keeps it there.',
    meta: 'Industrial RO plants, bulk water softening, commercial heat pumps and hydro pneumatic systems.',
    points: [
      'RO plants and bulk softening sized to the process they feed',
      'Heat pump water heating for hotels, resorts and hospitals',
      'Pool heating from small residential up to Olympic size',
      'Hydro pneumatic systems for constant multi-floor pressure',
    ],
  },
} as const

export default function Segment({ segment }: Props) {
  const c = copy[segment]
  const items = rangesFor(segment)

  usePageMeta(segment === 'residential' ? 'Residential' : 'Commercial', c.meta)

  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.title}
        lead={c.lead}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: segment === 'residential' ? 'Residential' : 'Commercial' },
        ]}
        image={items[0]?.heroImage}
      />

      <Section
        eyebrow="The range"
        title={segment === 'residential' ? 'Systems for the home' : 'Systems for the site'}
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((range, i) => (
            <Reveal key={range.slug} delay={i * 80} className="h-full">
              <ProductCard range={range} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tint>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="font-display text-4xl leading-tight tracking-tight text-marine-900">
              What you get either way
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-marine-700">
              Whatever the scale, the engineering standard and the way we quote it stay the same.
            </p>
          </Reveal>

          <ul className="space-y-4">
            {c.points.map((p, i) => (
              <Reveal key={p} delay={i * 80}>
                <li className="flex items-start gap-4 rounded-xl border border-marine-100 bg-white p-5">
                  <CheckIcon className="mt-0.5 size-5 shrink-0 text-aqua-500" />
                  <span className="text-marine-800">{p}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      <CtaBanner />
    </>
  )
}
