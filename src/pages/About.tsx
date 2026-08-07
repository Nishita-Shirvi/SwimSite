import { CtaBanner } from '@/components/CtaBanner'
import { PageHero } from '@/components/PageHero'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { brand, offices, strengths } from '@/data/site'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function About() {
  usePageMeta(
    'About',
    "Sofpour is India's leading water management brand, built on international technology, transparent policies and best-in-class service.",
  )

  const experienceCentres = offices.filter((o) => o.kind === 'experience')

  return (
    <>
      <PageHero
        eyebrow="About Sofpour"
        title="A philosophy, not just a technique"
        lead={brand.philosophy}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
        image="/img/brand/hero.webp"
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-marine-100 bg-marine-50 p-10">
              <p className="eyebrow">Our mission</p>
              <p className="mt-5 font-display text-2xl leading-snug tracking-tight text-marine-900">
                {brand.mission}
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-2xl border border-marine-100 bg-marine-50 p-10">
              <p className="eyebrow">Our vision</p>
              <p className="mt-5 font-display text-2xl leading-snug tracking-tight text-marine-900">
                {brand.vision}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mx-auto mt-16 max-w-3xl">
          <p className="text-lg leading-relaxed text-marine-700">
            Sofpour is {brand.positioning.toLowerCase()}, offering world-class products and
            services across residential and commercial water management. We work on softening,
            heating, purification and pressure — the four places where water quality and water
            supply actually go wrong — and we treat them as one connected problem rather than four
            product categories.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-marine-700">
            That approach is what the name is meant to signal. {brand.philosophy} It shows up in
            how we size a unit, what we tell you it will and won't do, and how long it keeps
            working after the invoice is paid.
          </p>
        </Reveal>
      </Section>

      <Section
        tint
        centered
        eyebrow="What we stand on"
        title="Five things we will not compromise"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <div className="h-full rounded-2xl border border-marine-100 bg-white p-8">
                <h3 className="font-display text-xl tracking-tight text-marine-900">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-marine-600">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Leadership" title="Who runs Sofpour">
        <div className="grid gap-6 sm:max-w-2xl sm:grid-cols-2">
          {brand.owners.map((owner, i) => (
            <Reveal key={owner.name} delay={i * 100}>
              <div className="rounded-2xl border border-marine-100 p-8">
                <div className="flex size-14 items-center justify-center rounded-full bg-marine-900 font-display text-xl text-white">
                  {owner.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <h3 className="mt-5 font-display text-xl tracking-tight text-marine-900">
                  {owner.name}
                </h3>
                <p className="mt-1 text-sm font-medium uppercase tracking-wider text-aqua-600">
                  {owner.role}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        dark
        eyebrow="Come and see one running"
        title="Three experience centres"
        lead="Specifications only tell you so much. Our experience centres let you stand in front of a working system, feel the water and ask the awkward questions before you commit."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {experienceCentres.map((centre, i) => (
            <Reveal key={centre.label} delay={i * 90}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-aqua-400">
                  {centre.label}
                </p>
                <p className="mt-4 leading-relaxed text-marine-200">{centre.address}</p>
                <p className="mt-1 text-marine-400">{centre.city}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBanner
        title="Want to talk it through first?"
        body="Call the toll-free line or send us your water report. We will tell you what you actually need — including when the answer is nothing."
      />
    </>
  )
}
