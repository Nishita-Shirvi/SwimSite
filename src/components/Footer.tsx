import { Link } from 'react-router-dom'
import { brand, contact, offices, socials } from '@/data/site'
import { ranges } from '@/data/products'
import { MailIcon, PhoneIcon, PinIcon } from './icons'

const company = [
  { label: 'About Sofpour', to: '/about' },
  { label: 'Residential', to: '/residential' },
  { label: 'Commercial', to: '/commercial' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

export function Footer() {
  const headOffices = offices.filter((o) => o.kind === 'head')

  return (
    <footer className="bg-marine-950 text-marine-200">
      <div className="container-page py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <img
              src="/img/brand/logo.webp"
              alt="Sofpour"
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-marine-300">
              {brand.positioning}. {brand.subTagline}.
            </p>

            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full border border-white/15 px-4 py-1.5 text-xs font-medium text-marine-200 transition-colors hover:border-aqua-400 hover:text-white"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Products</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {ranges.map((r) => (
                <li key={r.slug}>
                  <Link
                    to={`/products/${r.slug}`}
                    className="text-marine-300 transition-colors hover:text-aqua-400"
                  >
                    {r.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {company.map((c) => (
                <li key={c.to}>
                  <Link
                    to={c.to}
                    className="text-marine-300 transition-colors hover:text-aqua-400"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Get in touch</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={`tel:${contact.tollFree.replace(/\s/g, '')}`}
                  className="flex items-start gap-3 text-marine-300 transition-colors hover:text-aqua-400"
                >
                  <PhoneIcon className="mt-0.5 size-4 shrink-0" />
                  <span>
                    {contact.tollFree}
                    <span className="block text-xs text-marine-500">Toll-free</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-start gap-3 text-marine-300 transition-colors hover:text-aqua-400"
                >
                  <MailIcon className="mt-0.5 size-4 shrink-0" />
                  {contact.email}
                </a>
              </li>
              {headOffices.map((o) => (
                <li key={o.label} className="flex items-start gap-3 text-marine-300">
                  <PinIcon className="mt-0.5 size-4 shrink-0" />
                  <span>
                    <span className="block text-xs font-medium uppercase tracking-wider text-marine-500">
                      {o.label}
                    </span>
                    {o.address}, {o.city}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-marine-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <p className="italic">{brand.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
