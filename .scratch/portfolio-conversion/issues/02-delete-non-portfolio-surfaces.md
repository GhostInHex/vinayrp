# 02: Delete non-portfolio surfaces

**What to build:** Everything that is not portfolio is gone: registry/blocks/docs/preview routes and features, sponsors, timeline page, testimonials, game route, ads/AdSense, Discord feedback webhook. Build stays green after deletion; deleted routes return 404.

**Scout first:** fan out scouts to enumerate every file/import/route/config/env-var referencing the surfaces being removed before deleting, so the strip is complete and the build stays green.

**Blocked by:** 01.

**Status:** ready-for-agent

- [ ] Registry, blocks, docs, preview routes/features fully removed
- [ ] Sponsors, timeline, testimonials pages removed; game route removed
- [ ] Ads/AdSense and Discord webhook wiring removed; .env.example pruned of orphaned vars
- [ ] Nav no longer references deleted pages (dead links acceptable until ticket 03 finalizes nav)
- [ ] `pnpm build` green; deleted routes 404
