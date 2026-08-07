import type { ComponentProps, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'ghost' | 'onDark'
type Size = 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 ease-out disabled:opacity-50 disabled:pointer-events-none'

const variants: Record<Variant, string> = {
  primary:
    'bg-marine-900 text-white hover:bg-marine-800 hover:shadow-lg hover:shadow-marine-900/20 active:scale-[0.98]',
  secondary:
    'bg-aqua-500 text-marine-950 hover:bg-aqua-400 hover:shadow-lg hover:shadow-aqua-500/25 active:scale-[0.98]',
  ghost:
    'border border-marine-200 bg-white/60 text-marine-800 hover:border-marine-400 hover:bg-white active:scale-[0.98]',
  onDark:
    'border border-white/25 text-white hover:border-white/60 hover:bg-white/10 active:scale-[0.98]',
}

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

type CommonProps = {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...rest
}: CommonProps & ComponentProps<'button'>) {
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      {children}
    </button>
  )
}

export function ButtonLink({
  children,
  to,
  variant = 'primary',
  size = 'md',
  className = '',
  ...rest
}: CommonProps & { to: string } & Omit<ComponentProps<typeof Link>, 'to' | 'className'>) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  // Anything non-relative (tel:, mailto:, https:) needs a plain anchor.
  if (/^(https?:|tel:|mailto:|#)/.test(to)) {
    return (
      <a href={to} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <Link to={to} className={classes} {...rest}>
      {children}
    </Link>
  )
}
