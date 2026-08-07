import { Link } from 'react-router-dom'
import { CtaBanner } from '@/components/CtaBanner'
import { PageHero } from '@/components/PageHero'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { ArrowIcon } from '@/components/icons'
import { posts } from '@/data/posts'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function Blog() {
  usePageMeta(
    'Blog',
    'Guides on water softening, purification and heat pump water heating from the Sofpour team.',
  )

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Water, explained plainly"
        lead="Short reads on what hard water actually does, how softening works, and where the purification market is going."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Blog' }]}
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 90} className="h-full">
              <Link
                to={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-marine-100 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-marine-200 hover:shadow-lg hover:shadow-marine-900/5"
              >
                <p className="eyebrow">{post.category}</p>
                <h2 className="mt-4 font-display text-2xl leading-snug tracking-tight text-marine-900">
                  {post.title}
                </h2>
                <p className="mt-4 flex-1 leading-relaxed text-marine-600">{post.excerpt}</p>
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
