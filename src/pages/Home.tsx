import { Link } from 'react-router-dom'
import { BackgroundVideo } from '@/components/BackgroundVideo'
import { ButtonLink } from '@/components/Button'
import { CtaBanner } from '@/components/CtaBanner'
import { VideoShowcase } from '@/components/VideoShowcase'
import { ProductCard } from '@/components/ProductCard'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { ArrowIcon, CheckIcon, DropIcon, FactoryIcon, FlameIcon, GaugeIcon } from '@/components/icons'
import { ranges, softenerBenefits, softenerProcess } from '@/data/products'
import { posts } from '@/data/posts'
import { brand, strengths } from '@/data/site'
import { usePageMeta } from '@/hooks/usePageMeta'

const pillars = [
  {
    icon: DropIcon,
    title: 'Water Softening',
    body: 'Fully automatic softeners that stop scale before it starts.',
    to: '/products/water-softeners',
  },
  {
    icon: FlameIcon,
    title: 'Heat Pump Heating',
    body: 'Hot water at a fraction of the running cost of a geyser.',
    to: '/products/heat-pump-water-heaters',
  },
  {
    icon: FactoryIcon,
    title: 'Industrial Purification',
    body: 'RO plants and bulk softening sized to your process.',
    to: '/products/industrial-water-purification',
  },
  {
    icon: GaugeIcon,
    title: 'Pressure Boosting',
    body: 'Constant, uniform pressure at every outlet in the building.',
    to: '/products/pressure-boosters',
  },
]

export default function Home() {
  usePageMeta(
    'Water Softeners, Heat Pumps & Water Management',
    "India's leading water management brand. Fully automatic water softeners, air source heat pump water heaters, industrial purification and hydro pneumatic systems.",
  )

  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden bg-marine-950 text-white">
        <BackgroundVideo
          src="/video/hero.mp4"
          poster="/img/brand/hero.webp"
          className="absolute inset-0 size-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-marine-950 via-marine-950/95 to-marine-900/70" />
        <div
          aria-hidden
          className="absolute -right-40 top-0 size-[32rem] rounded-full bg-aqua-500/15 blur-3xl"
        />

        <div className="container-page relative grid gap-16 py-24 sm:py-32 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:py-36">
          <div>
            <p className="eyebrow text-aqua-400">{brand.positioning}</p>

            <h1 className="mt-6 font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Every drop
              <br />
              is important.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-marine-200 sm:text-xl">
              Hard water costs you twice — once in scale, appliances and detergent, and again on
              every heating bill. Sofpour engineers the system that fixes it, sized for your home
              or your plant.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink to="/residential" variant="secondary" size="lg">
                For your home
              </ButtonLink>
              <ButtonLink to="/commercial" variant="onDark" size="lg">
                For your business
              </ButtonLink>
            </div>

            <p className="mt-10 text-sm text-marine-400">{brand.subTagline}</p>
          </div>

          {/* Pillar grid doubles as the primary product entry point. */}
          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <Link
                  to={p.to}
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-aqua-400/50 hover:bg-white/10"
                >
                  <p.icon className="size-8 text-aqua-400" />
                  <h2 className="mt-5 text-lg font-semibold text-white">{p.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-marine-300">{p.body}</p>
                  <ArrowIcon className="mt-4 size-4 text-aqua-400 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ Problem */}
      <Section
        eyebrow="The hard water problem"
        title="Scale is expensive long before you can see it"
        lead="Calcium and magnesium build up quietly inside pipes, geysers and washing machines. By the time it shows up on a tap, it has already been costing you money for years."
      >
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              stat: '15–20%',
              label: 'higher domestic water heating cost',
              body: 'Lime scale on boiler and tank surfaces insulates the element, so it burns more energy to reach the same temperature.',
            },
            {
              stat: 'Blocked',
              label: 'pipes and reduced flow',
              body: 'Scale deposits narrow the internal diameter of plumbing lines, cutting pressure and eventually forcing replacement.',
            },
            {
              stat: 'Shorter',
              label: 'appliance lifespan',
              body: 'Laundry machines, solar heating systems and air conditioning units all fail earlier on hard water.',
            },
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 100}>
              <div className="h-full rounded-2xl bg-sand-100 p-8">
                <p className="font-display text-4xl tracking-tight text-marine-900">{item.stat}</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-sand-500">
                  {item.label}
                </p>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-marine-700">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------------------ Products */}
      <Section
        tint
        eyebrow="What we build"
        title="Four systems, one water strategy"
        lead="Most sites need more than one. We size them together so they work as a system rather than four separate purchases."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ranges.map((range, i) => (
            <Reveal key={range.slug} delay={i * 80} className="h-full">
              <ProductCard range={range} />
            </Reveal>
          ))}
        </div>
      </Section>

      <VideoShowcase />

      {/* --------------------------------------------------------- How it works */}
      <Section
        eyebrow="How softening works"
        title="An ion swap, repeated on demand"
        lead="No chemicals dosed into your supply and nothing consumable but salt. The resin does the work, then recharges itself."
      >
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <img
              src="/img/softeners/how-it-works.webp"
              alt="Diagram of the ion exchange water softening process"
              loading="lazy"
              className="w-full rounded-2xl border border-marine-100 bg-white"
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

      {/* ------------------------------------------------------------ Benefits */}
      <Section
        dark
        eyebrow="What changes"
        title="You notice it on the first shower"
        lead="Softened water is not a specification you read on a datasheet — it is something the whole house feels within a day."
      >
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

      {/* ------------------------------------------------------------ Strengths */}
      <Section
        tint
        centered
        eyebrow="Why Sofpour"
        title="Built properly, sold honestly"
        lead="Water treatment is an industry where it is easy to oversell. We would rather size the smaller unit and have it still be right in ten years."
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

      {/* ---------------------------------------------------------------- Blog */}
      <Section
        eyebrow="From the blog"
        title="Worth reading before you buy"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 90} className="h-full">
              <Link
                to={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-marine-100 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-marine-200 hover:shadow-lg hover:shadow-marine-900/5"
              >
                <p className="eyebrow">{post.category}</p>
                <h3 className="mt-4 font-display text-xl leading-snug tracking-tight text-marine-900">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-marine-600">
                  {post.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-aqua-600">
                  Read article
                  <ArrowIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  )
}
