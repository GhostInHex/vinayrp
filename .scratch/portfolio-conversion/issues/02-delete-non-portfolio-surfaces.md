# 02: Delete non-portfolio surfaces

**What to build:** Everything that is not portfolio is gone: registry/blocks/docs/preview routes and features, sponsors, timeline page, testimonials, game route, ads/AdSense, Discord feedback webhook. Build stays green after deletion; deleted routes return 404.

**Scout first:** fan out scouts to enumerate every file/import/route/config/env-var referencing the surfaces being removed before deleting, so the strip is complete and the build stays green.

**Blocked by:** 01.

**Status:** done

- [x] Registry, blocks, docs, preview routes/features fully removed
- [x] Sponsors, timeline, testimonials pages removed; game route removed
- [x] Ads/AdSense and Discord webhook wiring removed; .env.example pruned of orphaned vars
- [x] Nav no longer references deleted pages (dead links acceptable until ticket 03 finalizes nav)
- [x] `pnpm build` green; deleted routes 404

**Outcome:** Removed ~500 files (−44.7k lines): registry (`src/registry/`, `public/r/`, registry scripts/build tooling), route groups `(blocks)`/`(docs)/components`/`(preview)`, sponsors/timeline/testimonials/game pages, ads.txt route, legacy redirects/rewrites in next.config.ts. Kept components still used by portfolio pages were moved out of the registry into `src/components/`, `src/hooks/sound/`, `src/lib/`. Also cleaned: dead keyboard shortcuts to deleted routes, unused `SPONSORSHIP_URL`, orphaned `auto-type-table.ts` + `fumadocs-typescript` dep, dead `getComponentDocs()`, UTF-8 BOMs on moved files, package.json description. `.env.example` verified free of orphaned vars (OpenPanel/GTM kept dormant per spec). Daikanoid game component retained only as the 404-page easter egg — `/game` route itself is gone. Verified: `pnpm check-types` clean, vitest 38/38, `pnpm build` green (35 routes, no deleted surfaces present).

