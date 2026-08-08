import { useEffect, useRef } from 'react'

type Props = {
  /** Path to the MP4. Attached only once the element approaches the viewport. */
  src: string
  /** Painted immediately, and kept as the still frame when motion is reduced. */
  poster: string
  className?: string
}

/**
 * Muted, looping, decorative background video.
 *
 * The source clips run 3–11 MB, so nothing is fetched until the element nears
 * the viewport, and playback pauses again once it leaves. Anyone who prefers
 * reduced motion gets the poster frame and no video download at all.
 */
export function BackgroundVideo({ src, poster, className = '' }: Props) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return

    // Honour the OS-level motion preference: poster only, no fetch.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // Without IntersectionObserver, just load it up front.
    if (typeof IntersectionObserver === 'undefined') {
      video.src = src
      video.play().catch(() => {})
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!video.src) video.src = src
          // Autoplay can still be refused (low power mode, data saver); the
          // poster stays visible in that case, which is a fine fallback.
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { rootMargin: '200px' },
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [src])

  return (
    <video
      ref={ref}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden
      tabIndex={-1}
      className={className}
    />
  )
}
