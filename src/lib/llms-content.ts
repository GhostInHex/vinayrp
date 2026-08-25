import { format } from "date-fns"

import { SITE_INFO } from "@/config/site"
import { getBlogPosts } from "@/features/doc/data/documents"
import { AWARDS } from "@/features/portfolio/data/awards"
import { BOOKMARKS } from "@/features/portfolio/data/bookmarks"
import { CERTIFICATIONS } from "@/features/portfolio/data/certifications"
import { EDUCATION } from "@/features/portfolio/data/education"
import { EXPERIENCES } from "@/features/portfolio/data/experiences"
import {
  EXTERNAL_POSTS,
  HASHNODE_URL,
} from "@/features/portfolio/data/external-posts"

/**
 * Builders for the /llms* markdown surfaces (see `src/app/(llms)/`). Entries
 * describing a section are only emitted when that section actually has
 * content, so AI agents never read about pages that would render empty.
 */
export function buildLlmsIndex(): string {
  const indexEntries = [
    {
      title: "About",
      file: "about.md",
      description: "A quick intro to me, my tech stack, and how to connect.",
    },
    {
      title: "Experience",
      file: "experience.md",
      description: "Roles I've held and what I did in them.",
      enabled: EXPERIENCES.length > 0,
    },
    {
      title: "Education",
      file: "education.md",
      description: "Where I studied and what I focused on.",
      enabled: EDUCATION.length > 0,
    },
    {
      title: "Projects",
      file: "projects.md",
      description:
        "Selected projects — NovusMail and Project Ghost — with skills and links.",
    },
    {
      title: "Awards",
      file: "awards.md",
      description: "Hackathon placements and writing milestones.",
      enabled: AWARDS.length > 0,
    },
    {
      title: "Certifications",
      file: "certifications.md",
      description: "Certifications and credentials I've earned.",
      enabled: CERTIFICATIONS.length > 0,
    },
    {
      title: "Blog",
      file: "blog.md",
      description: "Every published article, newest first, with dates.",
    },
    {
      title: "Bookmarks",
      file: "bookmarks.md",
      description: "Articles, tools, and references I recommend.",
      enabled: BOOKMARKS.length > 0,
    },
  ].filter((entry) => entry.enabled !== false)

  const writingLines = [...EXTERNAL_POSTS]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .map((post) => `- [${post.title}](${post.url}) (${post.createdAt})`)
    .join("\n")

  return `# Vinay Reddy Patil

> Full-Stack Developer building AI applications. Portfolio at ${SITE_INFO.url}.

${indexEntries.map((entry) => `- [${entry.title}](${SITE_INFO.url}/${entry.file}): ${entry.description}`).join("\n")}

## Writing

Published on [Hashnode](${HASHNODE_URL}), newest first:

${writingLines}
`
}

/**
 * The self-hosted MDX blog is phase 2; until posts exist the Writing surface
 * is the Hashnode feed, so say so instead of listing an empty archive.
 */
export function buildBlogMarkdown(): string {
  const selfHostedPosts = [...getBlogPosts()].sort(
    (a, b) =>
      new Date(b.metadata.createdAt).getTime() -
      new Date(a.metadata.createdAt).getTime()
  )

  if (selfHostedPosts.length === 0) {
    return `# Blog

Vinay's articles are published on [Hashnode](${HASHNODE_URL}); none are self-hosted here yet.

## Posts (${EXTERNAL_POSTS.length}, newest first)

${[...EXTERNAL_POSTS]
  .sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )
  .map((post) => `- [${post.title}](${post.url}) (${post.createdAt})`)
  .join("\n")}
`
  }

  return `# Blog

Each link below returns the full post as Markdown. Drop the \`.mdx\` extension for the web page.

## Self-hosted posts (${selfHostedPosts.length})

${selfHostedPosts.map((item) => `- [${item.metadata.title}](${SITE_INFO.url}/blog/${item.slug}.mdx) (${format(new Date(item.metadata.createdAt), "yyyy-MM-dd")}): ${item.metadata.description}`).join("\n")}

More articles live on [Hashnode](${HASHNODE_URL}).
`
}
