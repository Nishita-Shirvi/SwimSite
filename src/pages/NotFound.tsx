import { ButtonLink } from '@/components/Button'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function NotFound() {
  usePageMeta('Page not found')

  return (
    <section className="bg-marine-950 py-32 text-white sm:py-44">
      <div className="container-page text-center">
        <p className="eyebrow text-aqua-400">404</p>
        <h1 className="mt-5 font-display text-5xl tracking-tight sm:text-6xl">
          This page has drained away
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg text-marine-300">
          The link you followed does not lead anywhere. Try the product ranges or get in touch
          and we will point you in the right direction.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ButtonLink to="/" variant="secondary" size="lg">
            Back to home
          </ButtonLink>
          <ButtonLink to="/contact" variant="onDark" size="lg">
            Contact us
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
