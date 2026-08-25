/**
 * An article published on Hashnode (`vinayrp-dev.hashnode.dev`); the site
 * links to it but does not host it. See CONTEXT.md — "External Post".
 */
export type ExternalPost = {
  /** Stable unique identifier (used as list key). Matches the URL slug. */
  id: string
  title: string
  /** Absolute URL to the article on Hashnode. */
  url: string
  /** Optional one-line subtitle/deck shown under the title. */
  description?: string
  /** Publish date in ISO `yyyy-MM-dd` format. */
  createdAt: string
}
