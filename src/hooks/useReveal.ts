import { useEffect, useRef } from 'react'

/**
 * Adds `reveal-visible` the first time an element scrolls into view.
 * Unobserves immediately after so the animation never replays.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Without IntersectionObserver, show the content rather than hide it.
    if (typeof IntersectionObserver === 'undefined') {
      node.classList.add('reveal-visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return ref
}
