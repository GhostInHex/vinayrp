import { describe, expect, it } from "vitest"

import { buildBlogMarkdown, buildLlmsIndex } from "@/lib/llms-content"
import { BOOKMARKS } from "@/features/portfolio/data/bookmarks"
import { CERTIFICATIONS } from "@/features/portfolio/data/certifications"
import { EDUCATION } from "@/features/portfolio/data/education"
import { EXPERIENCES } from "@/features/portfolio/data/experiences"
import {
  EXTERNAL_POSTS,
  HASHNODE_URL,
} from "@/features/portfolio/data/external-posts"

describe("buildLlmsIndex", () => {
  const index = buildLlmsIndex()

  it("describes Vinay and the site", () => {
    expect(index).toContain("# Vinay Reddy Patil")
    expect(index).toContain("https://vinayrp.in")
    expect(index.toLowerCase()).not.toContain("chanhdai")
    expect(index.toLowerCase()).not.toContain("ncdai")
  })

  it("always offers the sections that have launch content", () => {
    expect(index).toContain("[About](https://vinayrp.in/about.md)")
    expect(index).toContain("[Projects](https://vinayrp.in/projects.md)")
    expect(index).toContain("[Awards](https://vinayrp.in/awards.md)")
  })

  it("omits entries for sections whose data is still empty", () => {
    // Guard the guard: if these gain data, flip the corresponding expectations.
    expect(EXPERIENCES).toHaveLength(0)
    expect(EDUCATION).toHaveLength(0)
    expect(CERTIFICATIONS).toHaveLength(0)
    expect(BOOKMARKS).toHaveLength(0)

    expect(index).not.toContain("experience.md")
    expect(index).not.toContain("education.md")
    expect(index).not.toContain("certifications.md")
    expect(index).not.toContain("bookmarks.md")
  })

  it("lists every Hashnode article under Writing, newest first", () => {
    expect(index).toContain(`[Hashnode](${HASHNODE_URL})`)
    expect(
      index.match(new RegExp(HASHNODE_URL, "g"))?.length
    ).toBeGreaterThanOrEqual(EXTERNAL_POSTS.length)

    const writingSection = index.slice(index.indexOf("## Writing"))
    for (const post of EXTERNAL_POSTS) {
      expect(writingSection).toContain(`[${post.title}](${post.url})`)
    }

    const dates = [...writingSection.matchAll(/\((\d{4}-\d{2}-\d{2})\)/g)].map(
      (match) => match[1]
    )
    expect(dates).toEqual([...dates].sort().reverse())
  })
})

describe("buildBlogMarkdown", () => {
  it("points at Hashnode while no posts are self-hosted", () => {
    const markdown = buildBlogMarkdown()

    expect(markdown).toContain(HASHNODE_URL)
    expect(markdown).toContain(`## Posts (${EXTERNAL_POSTS.length}`)
    // No self-hosted .mdx links can exist yet.
    expect(markdown).not.toContain("](https://vinayrp.in/blog/")
  })
})
