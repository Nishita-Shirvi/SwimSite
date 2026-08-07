import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navigation } from '@/data/site'
import { contact } from '@/data/site'
import { ButtonLink } from './Button'
import { ChevronIcon, CloseIcon, MenuIcon, PhoneIcon } from './icons'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the drawer whenever the route changes.
  useEffect(() => {
    setMobileOpen(false)
    setOpenGroup(null)
  }, [pathname])

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-marine-900 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      {/* Utility bar — hidden on small screens where the CTA button carries it. */}
      <div className="hidden bg-marine-950 py-2 text-sm text-marine-200 lg:block">
        <div className="container-page flex items-center justify-between">
          <p className="tracking-wide">Every Drop Is Important</p>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${contact.tollFree.replace(/\s/g, '')}`}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <PhoneIcon className="size-4" />
              {contact.tollFree}
              <span className="text-marine-400">(Toll-Free)</span>
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="transition-colors hover:text-white"
            >
              {contact.email}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-marine-100 bg-white/85 backdrop-blur-lg'
            : 'border-b border-transparent bg-white'
        }`}
      >
        <div className="container-page flex h-18 items-center justify-between gap-8">
          <Link to="/" className="flex shrink-0 items-center gap-3" aria-label="Sofpour home">
            <img
              src="/img/brand/logo.webp"
              alt=""
              className="h-9 w-auto"
              width={140}
              height={36}
            />
            <span className="sr-only">Sofpour</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-aqua-600'
                          : 'text-marine-700 hover:bg-marine-50 hover:text-marine-900'
                      }`
                    }
                  >
                    {item.label}
                    <ChevronIcon className="size-3.5 transition-transform group-hover:rotate-180" />
                  </NavLink>

                  <div className="invisible absolute left-0 top-full w-80 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="overflow-hidden rounded-2xl border border-marine-100 bg-white p-2 shadow-xl shadow-marine-900/10">
                      {item.children.map((child) => (
                        <Link
                          key={child.to + child.label}
                          to={child.to}
                          className="block rounded-xl px-4 py-3 transition-colors hover:bg-marine-50"
                        >
                          <span className="block text-sm font-semibold text-marine-900">
                            {child.label}
                          </span>
                          {child.description && (
                            <span className="mt-0.5 block text-xs text-marine-600">
                              {child.description}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-aqua-600'
                        : 'text-marine-700 hover:bg-marine-50 hover:text-marine-900'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <ButtonLink to="/contact" variant="secondary" className="hidden sm:inline-flex">
              Book a consultation
            </ButtonLink>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="rounded-full p-2.5 text-marine-800 transition-colors hover:bg-marine-50 lg:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-60 lg:hidden ${mobileOpen ? '' : 'pointer-events-none'}`}
        aria-hidden={!mobileOpen}
      >
        <div
          className={`absolute inset-0 bg-marine-950/40 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />

        <div
          className={`absolute right-0 top-0 flex h-full w-[min(22rem,88vw)] flex-col bg-white shadow-2xl transition-transform duration-300 ease-[var(--ease-out-soft)] ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-marine-100 px-6 py-5">
            <img src="/img/brand/logo.webp" alt="Sofpour" className="h-8 w-auto" />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="rounded-full p-2 text-marine-700 transition-colors hover:bg-marine-50"
              aria-label="Close menu"
            >
              <CloseIcon className="size-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-5" aria-label="Mobile">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.label} className="border-b border-marine-50 last:border-0">
                  <button
                    type="button"
                    onClick={() => setOpenGroup((g) => (g === item.label ? null : item.label))}
                    className="flex w-full items-center justify-between px-3 py-3.5 text-left text-base font-medium text-marine-900"
                    aria-expanded={openGroup === item.label}
                  >
                    {item.label}
                    <ChevronIcon
                      className={`size-4 transition-transform ${
                        openGroup === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      openGroup === item.label
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-3 pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.to + child.label}
                            to={child.to}
                            className="block rounded-lg px-3 py-2.5 text-sm text-marine-700 transition-colors hover:bg-marine-50"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `block border-b border-marine-50 px-3 py-3.5 text-base font-medium last:border-0 ${
                      isActive ? 'text-aqua-600' : 'text-marine-900'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="space-y-3 border-t border-marine-100 px-6 py-5">
            <ButtonLink to="/contact" variant="secondary" size="lg" className="w-full">
              Book a consultation
            </ButtonLink>
            <a
              href={`tel:${contact.tollFree.replace(/\s/g, '')}`}
              className="flex items-center justify-center gap-2 text-sm font-medium text-marine-700"
            >
              <PhoneIcon className="size-4" />
              {contact.tollFree}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
