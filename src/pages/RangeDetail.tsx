import { Navigate, useParams } from 'react-router-dom'
import { CtaBanner } from '@/components/CtaBanner'
import { PageHero } from '@/components/PageHero'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { ButtonLink } from '@/components/Button'
import { CheckIcon } from '@/components/icons'
import { getRange, softenerBenefits, softenerProcess } from '@/data/products'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function RangeDetail() {
  const { slug } = useParams<{ slug: string }>()
  const range = slug ? getRange(slug) : undefined

  usePageMeta(range?.name ?? 'Product', range?.summary)

  if (!range) return <Navigate to="/404" replace />

  const isSoftener = range.slug === 'water-softeners'

  return (
    <>
      <PageHero
        eyebrow={
          range.segment === 'both'
            ? 'Residential & Commercial'
            : range.segment === 'residential'
              ? 'Residential'
              : 'Commercial'
        }
        title={range.name}
        lead={range.summary}
        crumbs={[
          { label: 'Home', to: '/' },
          {
            label: range.segment === 'commercial' ? 'Commercial' : 'Residential',
            to: range.segment === 'commercial' ? '/commercial' : '/residential',
          },
          { label: range.name },
        ]}
        image={range.heroImage}
        imageAlt={range.heroImageAlt}
      >
        <ButtonLink to="/contact" variant="secondary" size="lg">
          Get a sizing recommendation
        </ButtonLink>
      </PageHero>

      <Section>
        <Reveal className="max-w-3xl">
          <p className="text-xl leading-relaxed text-marine-700">{range.description}</p>
        </Reveal>
      </Section>

      {/* -------------------------------------------------------------- Models */}
      <Section
        tint
        eyebrow="The line-up"
        title={isSoftener ? 'Four ranges, one for every household' : 'Models'}
        lead={
          range.specsPending
            ? 'Sizing guidance below is as published. Full technical specifications are issued with the quotation once we know your water hardness and daily demand.'
            : undefined
        }
      >
        <div className="grid gap-8 md:grid-cols-2">
          {range.models.map((model, i) => (
            <Reveal key={model.slug} delay={i * 80} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-marine-100 bg-white">
                <div className="aspect-16/10 overflow-hidden bg-marine-50">
                  <img
                    src={model.image}
                    alt={model.imageAlt}
                    loading="lazy"
                    className="size-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <h3 className="font-display text-2xl tracking-tight text-marine-900">
                    {model.name}
                  </h3>
                  <p className="mt-2 text-marine-600">{model.suits}</p>

                  {model.specs && (
                    <dl className="mt-6 space-y-0 border-t border-marine-100">
                      {model.specs.map((spec) => (
                        <div
                          key={spec.label}
                          className="flex items-baseline justify-between gap-4 border-b border-marine-100 py-3"
                        >
                          <dt className="text-sm font-medium text-marine-500">{spec.label}</dt>
                          <dd className="text-right text-sm font-semibold text-marine-900">
                            {spec.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  )}

                  <ButtonLink to="/contact" variant="ghost" className="mt-6 self-start">
                    Enquire about {model.name}
                  </ButtonLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Softener-specific sections — the source site only documents the process
          and benefits for this range. */}
      {isSoftener && (
        <>
          <Section
            eyebrow="How it works"
            title="Ion exchange, in four steps"
          >
            <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <Reveal>
                <img
                  src="/img/softeners/how-it-works.webp"
                  alt="Diagram of the ion exchange water softening process"
                  loading="lazy"
                  className="w-full rounded-2xl border border-marine-100"
                />
              </Reveal>

              <ol className="space-y-8">
                {softenerProcess.map((s, i) => (
                  <Reveal key={s.step} delay={i * 90}>
                    <li className="flex gap-5">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-marine-900 font-display text-lg text-white">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-marine-900">{s.step}</h3>
                        <p className="mt-1.5 leading-relaxed text-marine-600">{s.body}</p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </Section>

          <Section dark eyebrow="Benefits" title="What softened water actually changes">
            <div className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {softenerBenefits.map((b, i) => (
                <Reveal key={b} delay={i * 60}>
                  <div className="flex items-start gap-4 border-b border-white/10 pb-5">
                    <CheckIcon className="mt-0.5 size-5 shrink-0 text-aqua-400" />
                    <p className="text-marine-100">{b}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Section>
        </>
      )}

      <CtaBanner
        title={`Which ${range.name.toLowerCase()} fits your site?`}
        body="Send us your water hardness figure, daily requirement and location. We will come back with a sized recommendation and a price."
      />
    </>
  )
}
