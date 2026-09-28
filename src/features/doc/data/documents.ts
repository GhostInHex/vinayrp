import fs from "fs"
import path from "path"
import { cache } from "react"
import matter from "gray-matter"

import type { Doc, DocMetadata } from "@/features/doc/types/document"

function parseFrontmatter(fileContent: string) {
  const file = matter(fileContent)

  return {
    metadata: file.data as DocMetadata,
    content: file.content,
  }
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx")
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8")
  return parseFrontmatter(rawContent)
}

/**
 * Reads MDX docs from `dir`, grouping them by their immediate subfolder.
 * The subfolder name is the doc's category (e.g. `content/components/*.mdx`
 * yields docs with `category: "components"`), so category is derived from the
 * file location rather than declared in frontmatter. Files placed directly in
 * `dir` (e.g. shared `props.ts`) are ignored — only category folders are read.
 */
function getMDXData(dir: string) {
  // Content folders may be absent in fresh clones/deploys: ticket 03 deleted
  // all upstream MDX posts, and git never commits empty dirs. Return [] so
  // the blog/llms routes render their empty states instead of crashing build.
  let entries: import("fs").Dirent[]
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch (error) {
    if ((error as NodeJS.ErrnoException)?.code === "ENOENT") return []
    throw error
  }
  const categoryDirs = entries.filter((entry) => entry.isDirectory())

  return categoryDirs.flatMap((categoryDir) => {
    const category = categoryDir.name
    const categoryPath = path.join(dir, category)

    return getMDXFiles(categoryPath).map<Doc>((file) => {
      const { metadata, content } = readMDXFile(path.join(categoryPath, file))

      const slug = path.basename(file, path.extname(file))

      return {
        metadata: { ...metadata, category },
        slug,
        content,
      }
    })
  })
}

export const getAllDocs = cache(() => {
  return getMDXData(path.join(process.cwd(), "src/features/doc/content")).sort(
    (a, b) => {
      if (a.metadata.pinned && !b.metadata.pinned) return -1
      if (!a.metadata.pinned && b.metadata.pinned) return 1

      return (
        new Date(b.metadata.createdAt).getTime() -
        new Date(a.metadata.createdAt).getTime()
      )
    }
  )
})

export function getDocBySlug(slug: string) {
  return getAllDocs().find((doc) => doc.slug === slug)
}

export function getDocsByCategory(category: string) {
  return getAllDocs().filter((doc) => doc.metadata?.category === category)
}

export const BLOG_CATEGORY = "blog"

/** Blog posts — docs under the `blog/` content folder. */
export function getBlogPosts() {
  return getDocsByCategory(BLOG_CATEGORY)
}

export function findNeighbour(docs: Doc[], slug: string) {
  const len = docs.length

  for (let i = 0; i < len; ++i) {
    if (docs[i].slug === slug) {
      return {
        previous: i > 0 ? docs[i - 1] : null,
        next: i < len - 1 ? docs[i + 1] : null,
      }
    }
  }

  return { previous: null, next: null }
}
