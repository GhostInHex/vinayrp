# 05: Writing section → Hashnode links

**What to build:** A Writing experience made of External Posts: links out to Vinay's Hashnode articles (vinayrp-dev.hashnode.dev) — JS promises, browser internals, TCP deep-dive, etc. Upstream's MDX blog machinery stays intact but unused for phase 2 self-hosted migration.

**Parallel note:** depends only on 03 and touches disjoint files from ticket 04 — may run concurrently with 04 via separate git worktrees; merge sequentially after.

**Blocked by:** 03.

**Status:** done

- [x] Writing page/nav entry renders curated External Post links to Hashnode
- [x] Links open Vinay's real articles correctly
- [x] MDX infrastructure left intact (no removal of blog plumbing)
- [x] RSS route still functional (empty feed acceptable until phase 2)
- [x] `pnpm build` green

## Comments

**Outcome:** `/blog` reworked as the Writing page rendering all 14 curated
External Posts from `src/features/portfolio/data/external-posts.ts` (seeded
against the live Hashnode archive/sitemap: JS promises, browser internals,
TCP deep-dive, DNS, Git, etc.). Home Writing panel (`#blog`) shows the latest
6 with an "All posts" link. New `ExternalPostItem` renders external links
(target=_blank) styled after upstream `PostItem`; JSON-LD BlogPosting nodes
now reference the real Hashnode URLs instead of non-existent local
`/blog/{slug}` pages. MDX plumbing (`src/features/doc/**`,
`(docs)/blog/[slug]`, post-list/search components) and the RSS route are
untouched — RSS serves an empty feed until phase 2 as allowed.
Verified: `check-types` clean, vitest 53/53 (new `external-posts.test.ts`
covers curation, host invariant, slug/url derivation, ordering), eslint clean,
`pnpm build` green with `/blog`, `/blog/rss`, `/blog/[slug]` all prerendered.
