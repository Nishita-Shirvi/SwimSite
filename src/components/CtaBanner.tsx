import { contact } from '@/data/site'
import { ButtonLink } from './Button'
import { Reveal } from './Reveal'
import { PhoneIcon } from './icons'

type Props = {
  title?: string
  body?: string
}

export function CtaBanner({
  title = 'Not sure which system your water needs?',
  body = 'Tell us your water hardness, household size and where you are — we will size the right system and quote it honestly. No obligation.',
}: Props) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-3xl bg-marine-900 px-8 py-14 sm:px-14 sm:py-20">
          <div
            aria-hidden
            className="absolute -bottom-24 -left-16 size-80 rounded-full bg-aqua-500/20 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -right-20 -top-24 size-80 rounded-full bg-marine-400/20 blur-3xl"
          />

          <div className="relative flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl leading-tight tracking-tight text-white sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-marine-200">{body}</p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <ButtonLink to="/contact" variant="secondary" size="lg">
                Request a quote
              </ButtonLink>
              <ButtonLink
                to={`tel:${contact.tollFree.replace(/\s/g, '')}`}
                variant="onDark"
                size="lg"
              >
                <PhoneIcon className="size-4" />
                {contact.tollFree}
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
