import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * React Router keeps scroll position across navigations; for a content site the
 * expectation is a fresh page starts at the top. Hash links are left alone so
 * in-page anchors still work.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname, hash])

  return null
}
