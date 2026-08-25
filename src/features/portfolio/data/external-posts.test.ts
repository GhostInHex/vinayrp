import { describe, expect, it } from "vitest"

import {
  EXTERNAL_POSTS,
  HASHNODE_URL,
} from "@/features/portfolio/data/external-posts"

describe("external posts", () => {
  it("curates Vinay's published Hashnode articles", () => {
    expect(EXTERNAL_POSTS.length).toBeGreaterThanOrEqual(14)
  })

  it("links every post out to vinayrp-dev.hashnode.dev", () => {
    for (const post of EXTERNAL_POSTS) {
      expect(new URL(post.url).hostname).toBe("vinayrp-dev.hashnode.dev")
      expect(post.url.startsWith(`${HASHNODE_URL}/`)).toBe(true)
    }
  })

  it("includes the flagship deep dives", () => {
    const urls = EXTERNAL_POSTS.map((post) => post.url)
    expect(urls).toContain(`${HASHNODE_URL}/javascript-promises-explained`)
    expect(urls).toContain(`${HASHNODE_URL}/how-a-browser-works`)
    expect(urls).toContain(`${HASHNODE_URL}/tcp-3-way-handshake`)
    expect(urls).toContain(
      `${HASHNODE_URL}/how-dns-resolution-works-a-deep-dive-with-dig`
    )
  })

  it("is sorted newest first", () => {
    for (let i = 1; i < EXTERNAL_POSTS.length; i++) {
      const previous = new Date(EXTERNAL_POSTS[i - 1].createdAt).getTime()
      const current = new Date(EXTERNAL_POSTS[i].createdAt).getTime()
      expect(previous).toBeGreaterThanOrEqual(current)
    }
  })

  it("uses unique stable ids", () => {
    const ids = EXTERNAL_POSTS.map((post) => post.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it("builds each url from the canonical slug", () => {
    for (const post of EXTERNAL_POSTS) {
      expect(post.url).toBe(`${HASHNODE_URL}/${post.id}`)
    }
  })
})
