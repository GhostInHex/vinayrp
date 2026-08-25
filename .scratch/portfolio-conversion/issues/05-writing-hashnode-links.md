# 05: Writing section → Hashnode links

**What to build:** A Writing experience made of External Posts: links out to Vinay's Hashnode articles (vinayrp-dev.hashnode.dev) — JS promises, browser internals, TCP deep-dive, etc. Upstream's MDX blog machinery stays intact but unused for phase 2 self-hosted migration.

**Parallel note:** depends only on 03 and touches disjoint files from ticket 04 — may run concurrently with 04 via separate git worktrees; merge sequentially after.

**Blocked by:** 03.

**Status:** ready-for-agent

- [ ] Writing page/nav entry renders curated External Post links to Hashnode
- [ ] Links open Vinay's real articles correctly
- [ ] MDX infrastructure left intact (no removal of blog plumbing)
- [ ] RSS route still functional (empty feed acceptable until phase 2)
- [ ] `pnpm build` green
