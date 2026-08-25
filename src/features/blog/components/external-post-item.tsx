import { format } from "date-fns"
import { ArrowUpRightIcon } from "lucide-react"

import type { ExternalPost } from "@/features/portfolio/types/external-posts"

type HeadingTypes = "h2" | "h3" | "h4"

export function ExternalPostItem({
  post,
  headingAs,
}: {
  post: ExternalPost
  headingAs?: HeadingTypes
}) {
  const Heading = headingAs ?? "h2"
  const publishedAt = new Date(post.createdAt)

  return (
    <div className="group/post relative flex h-full flex-col gap-1 p-4 transition-[background-color] ease-out hover:bg-accent-muted">
      <Heading className="text-lg leading-snug font-medium text-balance">
        <a href={post.url} target="_blank" rel="noopener noreferrer">
          <span className="absolute inset-0" aria-hidden />
          {post.title}
          <ArrowUpRightIcon
            className="ml-1 inline size-4 -translate-y-px align-baseline text-muted-foreground opacity-0 transition-opacity group-hover/post:opacity-100"
            aria-hidden
          />
        </a>
      </Heading>

      {post.description && (
        <p className="text-sm text-muted-foreground">{post.description}</p>
      )}

      <dl className="mt-auto pt-1">
        <dt className="sr-only">Published on</dt>
        <dd className="text-sm text-muted-foreground">
          <time dateTime={publishedAt.toISOString()}>
            {format(publishedAt, "dd.MM.yyyy")}
          </time>
        </dd>
      </dl>
    </div>
  )
}
