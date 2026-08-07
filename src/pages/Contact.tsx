import { useState } from 'react'
import { Button } from '@/components/Button'
import { PageHero } from '@/components/PageHero'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from '@/components/icons'
import { contact, offices, socials } from '@/data/site'
import { ranges } from '@/data/products'
import { usePageMeta } from '@/hooks/usePageMeta'

type Fields = {
  name: string
  phone: string
  email: string
  location: string
  interest: string
  message: string
}

const empty: Fields = {
  name: '',
  phone: '',
  email: '',
  location: '',
  interest: '',
  message: '',
}

const label = 'block text-sm font-medium text-marine-800'
const field =
  'mt-2 w-full rounded-xl border border-marine-200 bg-white px-4 py-3 text-marine-900 placeholder:text-marine-400 transition-colors focus:border-aqua-500 focus:outline-none'

export default function ContactPage() {
  usePageMeta(
    'Contact',
    'Talk to Sofpour about water softening, heat pump water heating, industrial purification or pressure boosting. Toll-free 1800 270 3701.',
  )

  const [values, setValues] = useState<Fields>(empty)
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({})
  const [sent, setSent] = useState(false)

  const set = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues((v) => ({ ...v, [key]: e.target.value }))
    setErrors((err) => ({ ...err, [key]: undefined }))
  }

  const validate = () => {
    const next: Partial<Record<keyof Fields, string>> = {}
    if (!values.name.trim()) next.name = 'Please tell us your name.'
    if (!/^[\d\s+()-]{8,}$/.test(values.phone.trim()))
      next.phone = 'Please enter a phone number we can reach you on.'
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = 'That email address does not look right.'
    if (!values.message.trim()) next.message = 'A short description helps us size the system.'
    return next
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) return

    // NOTE: no backend is wired up yet. Point this at your form handler
    // (Formspree, a serverless function, or the CRM endpoint) before launch.
    setSent(true)
  }

  const branches = offices.filter((o) => o.kind !== 'experience')
  const centres = offices.filter((o) => o.kind === 'experience')

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us about your water"
        lead="Hardness figure, household size or daily demand, and where you are. That is usually enough for us to point you at the right system."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr]">
          {/* ---------------------------------------------------------- Form */}
          <Reveal>
            <div className="rounded-2xl border border-marine-100 bg-marine-50 p-8 sm:p-10">
              {sent ? (
                <div className="py-10 text-center">
                  <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-aqua-500 text-marine-950">
                    <MailIcon className="size-7" />
                  </div>
                  <h2 className="mt-6 font-display text-2xl tracking-tight text-marine-900">
                    Thanks — we have your details
                  </h2>
                  <p className="mt-3 text-marine-700">
                    Someone from the team will be in touch shortly. If it is urgent, the toll-free
                    line is the fastest route.
                  </p>
                  <Button
                    variant="ghost"
                    className="mt-8"
                    onClick={() => {
                      setValues(empty)
                      setSent(false)
                    }}
                  >
                    Send another enquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate>
                  <h2 className="font-display text-2xl tracking-tight text-marine-900">
                    Request a callback
                  </h2>

                  <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className={label} htmlFor="name">
                        Name <span className="text-aqua-600">*</span>
                      </label>
                      <input
                        id="name"
                        className={field}
                        value={values.name}
                        onChange={set('name')}
                        placeholder="Your full name"
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && <p className="mt-1.5 text-sm text-red-600">{errors.name}</p>}
                    </div>

                    <div>
                      <label className={label} htmlFor="phone">
                        Phone number <span className="text-aqua-600">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className={field}
                        value={values.phone}
                        onChange={set('phone')}
                        placeholder="10-digit mobile"
                        aria-invalid={!!errors.phone}
                      />
                      {errors.phone && (
                        <p className="mt-1.5 text-sm text-red-600">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className={label} htmlFor="email">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className={field}
                        value={values.email}
                        onChange={set('email')}
                        placeholder="you@example.com"
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className={label} htmlFor="location">
                        Location
                      </label>
                      <input
                        id="location"
                        className={field}
                        value={values.location}
                        onChange={set('location')}
                        placeholder="City or area"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className={label} htmlFor="interest">
                        What are you looking for?
                      </label>
                      <select
                        id="interest"
                        className={field}
                        value={values.interest}
                        onChange={set('interest')}
                      >
                        <option value="">Select a system</option>
                        {ranges.map((r) => (
                          <option key={r.slug} value={r.name}>
                            {r.name}
                          </option>
                        ))}
                        <option value="Not sure yet">Not sure yet</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label className={label} htmlFor="message">
                        Message <span className="text-aqua-600">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className={`${field} resize-y`}
                        value={values.message}
                        onChange={set('message')}
                        placeholder="Household size, water hardness if you know it, or the problem you are trying to solve."
                        aria-invalid={!!errors.message}
                      />
                      {errors.message && (
                        <p className="mt-1.5 text-sm text-red-600">{errors.message}</p>
                      )}
                    </div>
                  </div>

                  <Button type="submit" variant="secondary" size="lg" className="mt-8 w-full sm:w-auto">
                    Send enquiry
                  </Button>
                </form>
              )}
            </div>
          </Reveal>

          {/* ------------------------------------------------------- Direct */}
          <Reveal delay={120}>
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl tracking-tight text-marine-900">
                  Reach us directly
                </h2>

                <ul className="mt-6 space-y-4">
                  <li>
                    <a
                      href={`tel:${contact.tollFree.replace(/\s/g, '')}`}
                      className="flex items-start gap-4 rounded-xl border border-marine-100 p-5 transition-colors hover:border-marine-300"
                    >
                      <PhoneIcon className="mt-0.5 size-5 shrink-0 text-aqua-500" />
                      <span>
                        <span className="block font-semibold text-marine-900">
                          {contact.tollFree}
                        </span>
                        <span className="text-sm text-marine-600">Toll-free</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${contact.mobile.replace(/\s/g, '')}`}
                      className="flex items-start gap-4 rounded-xl border border-marine-100 p-5 transition-colors hover:border-marine-300"
                    >
                      <PhoneIcon className="mt-0.5 size-5 shrink-0 text-aqua-500" />
                      <span>
                        <span className="block font-semibold text-marine-900">
                          {contact.mobile}
                        </span>
                        <span className="text-sm text-marine-600">Mobile</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${contact.email}`}
                      className="flex items-start gap-4 rounded-xl border border-marine-100 p-5 transition-colors hover:border-marine-300"
                    >
                      <MailIcon className="mt-0.5 size-5 shrink-0 text-aqua-500" />
                      <span className="font-semibold text-marine-900">{contact.email}</span>
                    </a>
                  </li>
                  <li className="flex items-start gap-4 rounded-xl border border-marine-100 p-5">
                    <ClockIcon className="mt-0.5 size-5 shrink-0 text-aqua-500" />
                    <span className="font-semibold text-marine-900">{contact.hours}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-marine-500">
                  Follow us
                </h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="rounded-full border border-marine-200 px-5 py-2 text-sm font-medium text-marine-700 transition-colors hover:border-aqua-500 hover:text-aqua-600"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tint eyebrow="Where we are" title="Offices and experience centres">
        <div className="grid gap-6 sm:grid-cols-2">
          {branches.map((o, i) => (
            <Reveal key={o.label} delay={i * 70}>
              <div className="h-full rounded-2xl border border-marine-100 bg-white p-7">
                <p className="text-sm font-semibold uppercase tracking-wider text-aqua-600">
                  {o.label}
                </p>
                <p className="mt-3 leading-relaxed text-marine-800">{o.address}</p>
                <p className="text-marine-600">{o.city}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <h3 className="mt-14 font-display text-2xl tracking-tight text-marine-900">
          Experience centres
        </h3>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {centres.map((o, i) => (
            <Reveal key={o.label} delay={i * 70}>
              <div className="h-full rounded-2xl border border-marine-100 bg-white p-7">
                <PinIcon className="size-5 text-aqua-500" />
                <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-marine-500">
                  {o.label}
                </p>
                <p className="mt-2 leading-relaxed text-marine-800">{o.address}</p>
                <p className="text-marine-600">{o.city}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  )
}
