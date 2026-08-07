import { useEffect } from 'react'

/**
 * Minimal title/description management. This is a client-rendered SPA, so
 * crawlers that don't execute JS won't see these — if organic search matters,
 * prerender the routes at build time or move to an SSR framework.
 */
export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = `${title} | Sofpour`

    if (!description) return

    let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.name = 'description'
      document.head.appendChild(tag)
    }
    tag.content = description
  }, [title, description])
}
