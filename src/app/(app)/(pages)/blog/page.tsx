import type { Metadata } from "next"
import { ArrowUpRightIcon } from "lucide-react"
import type { Blog, WithContext } from "schema-dts"

import { JSON_LD_ID } from "@/config/json-ld"
import { X_HANDLE } from "@/config/site"
import { jsonLdBreadcrumbList, JsonLdScript } from "@/lib/json-ld"
import { absoluteUrl, cn } from "@/lib/utils"
import {
  PageHeading,
  PageHeadingTagline,
  PageHeadingTitle,
} from "@/components/page-heading"
import { ExternalPostItem } from "@/features/blog/components/external-post-item"
import {
  EXTERNAL_POSTS,
  HASHNODE_URL,
} from "@/features/portfolio/data/external-posts"

const title = "Writing"
const description =
  "Articles on JavaScript, browsers, networking, and Git — published on Hashnode."

const ogImage = `/og/simple?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    url: "/blog",
    type: "website",
    images: {
      url: ogImage,
      width: 1200,
      height: 630,
      alt: title,
    },
  },
  twitter: {
    card: "summary_large_image",
    site: X_HANDLE,
    creator: X_HANDLE,
    images: [ogImage],
  },
}

function getWritingJsonLd(): WithContext<Blog> {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": absoluteUrl("/blog"),
    name: title,
    description,
    url: absoluteUrl("/blog"),
    isPartOf: { "@id": JSON_LD_ID.website },
    blogPost: EXTERNAL_POSTS.map((post) => ({
      "@type": "BlogPosting",
      "@id": post.url,
      headline: post.title,
      url: post.url,
      datePublished: new Date(post.createdAt).toISOString(),
    })),
  }
}

export default function Page() {
  return (
    <>
      <JsonLdScript data={getWritingJsonLd()} />

      <JsonLdScript
        data={jsonLdBreadcrumbList([
          {
            name: "Home",
            href: "/",
          },
          {
            name: "Writing",
            href: "/blog",
          },
        ])}
      />

      <div className="min-h-svh">
        <PageHeading>
          <PageHeadingTagline>Writing</PageHeadingTagline>
          <PageHeadingTitle>
            Articles on JavaScript, browsers, networking, and Git.
          </PageHeadingTitle>
        </PageHeading>

        <div className="h-4" />

        <div className="screen-line-top screen-line-bottom p-2">
          <a
            className="group flex h-9 w-full items-center justify-between rounded-lg border border-input px-3 text-sm text-muted-foreground transition-[background-color] ease-out hover:bg-accent-muted dark:bg-input/30"
            href={HASHNODE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            All articles are published on Hashnode — read them there.
            <ArrowUpRightIcon className="size-4 shrink-0 transition-transform group-hover:translate-x-px group-hover:-translate-y-px" />
          </a>
        </div>

        <div className="relative pt-4">
          <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
            <div className="border-r border-line" />
            <div className="border-l border-line" />
          </div>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {EXTERNAL_POSTS.map((post) => (
              <li
                key={post.id}
                className={cn(
                  "max-sm:screen-line-top max-sm:screen-line-bottom",
                  "sm:nth-[2n+1]:screen-line-top sm:nth-[2n+1]:screen-line-bottom"
                )}
              >
                <ExternalPostItem post={post} />
              </li>
            ))}
          </ul>
        </div>

        <div className="h-4" />
      </div>
    </>
  )
}
