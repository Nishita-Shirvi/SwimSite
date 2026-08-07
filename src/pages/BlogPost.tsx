import { Link, Navigate, useParams } from 'react-router-dom'
import { CtaBanner } from '@/components/CtaBanner'
import { PageHero } from '@/components/PageHero'
import { Reveal } from '@/components/Reveal'
import { ArrowIcon } from '@/components/icons'
import { getPost, posts } from '@/data/posts'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPost(slug) : undefined

  usePageMeta(post?.title ?? 'Article', post?.excerpt)

  if (!post) return <Navigate to="/404" replace />

  const others = posts.filter((p) => p.slug !== post.slug)

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Blog', to: '/blog' },
          { label: post.category },
        ]}
      />

      <article className="bg-white py-20 sm:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl">
            <Reveal>
              <p className="border-l-2 border-aqua-500 pl-6 font-display text-xl leading-relaxed text-marine-800">
                {post.excerpt}
              </p>
            </Reveal>

            <div className="mt-12 space-y-6">
              {post.body.map((para, i) => (
                <Reveal key={i} delay={Math.min(i * 40, 200)}>
                  <p className="text-lg leading-[1.75] text-marine-700">{para}</p>
                </Reveal>
              ))}
            </div>
          </div>

          {others.length > 0 && (
            <div className="mx-auto mt-20 max-w-2xl border-t border-marine-100 pt-12">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-marine-500">
                Keep reading
              </h2>
              <div className="mt-6 space-y-4">
                {others.map((other) => (
                  <Link
                    key={other.slug}
                    to={`/blog/${other.slug}`}
                    className="group flex items-start justify-between gap-6 rounded-xl border border-marine-100 p-6 transition-colors hover:border-marine-300"
                  >
                    <span>
                      <span className="eyebrow">{other.category}</span>
                      <span className="mt-2 block font-display text-lg leading-snug tracking-tight text-marine-900">
                        {other.title}
                      </span>
                    </span>
                    <ArrowIcon className="mt-1 size-5 shrink-0 text-aqua-600 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <CtaBanner />
    </>
  )
}
