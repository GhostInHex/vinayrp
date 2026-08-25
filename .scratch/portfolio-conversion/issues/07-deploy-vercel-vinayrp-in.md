# 07: Deploy to Vercel @ vinayrp.in

**What to build:** The site is live at https://vinayrp.in via Vercel, with a production smoke-check against all five verification seams. Portability preserved for Cloudflare (ADR-0002): no Vercel-proprietary APIs introduced during deploy setup.

**Human-in-the-loop checklist** (agent cannot click through dashboards):
1. Create/import the project in Vercel (owner account)
2. Set required env var(s): app URL → https://vinayrp.in
3. Point vinayrp.in DNS at Vercel (registrar-side)

**Blocked by:** 06.

**Status:** ready-for-human

- [ ] Production deployment succeeds on Vercel
- [ ] vinayrp.in serves the site over HTTPS
- [ ] Production smoke-check against https://vinayrp.in once live (local prod-build smoke-check already passed — see comments)
- [x] No Vercel-proprietary API usage added (portability note recorded)

## Comments

### Agent prep pass (pre-deploy)

All four pre-deploy gates green on `master` @ 6659daf + this change:
`pnpm lint`, `pnpm check-types`, `pnpm test:run` (58 tests), `pnpm build`
(20 routes). Local production smoke-check (`next build` + `next start`,
request-level):

- `/` renders "Vinay Reddy Patil" + "Full-Stack Developer" ✓
- Deleted routes `/components /blocks /docs /sponsors /timeline /game` → all 404 ✓
- Kept features 200: `/vcard`, `/manifest.webmanifest`, `/robots.txt`,
  `/sitemap.xml`, `/llms.txt`, `/blog/rss`, and `/og/simple` (image/png) ✓
- ncdai/chanhdai traces in home HTML limited to spec-exempted attribution:
  footer MIT LICENSE link and the footer "Inspired by" credit entry
  (`site-footer-cad.tsx`, commented as intentional) ✓

Portability audit (ADR-0002): zero `@vercel/*` imports or Vercel-only APIs in
`src/`. Only coupling is reading auto-injected `VERCEL_ENV` /
`VERCEL_GIT_COMMIT_SHA` env vars in `src/lib/build-info.ts`, which fall back
gracefully when unset; OG images use standard `next/og` (`ImageResponse`).
No `vercel.json` needed. Portability note also recorded in README.

README rewritten from upstream's chanhdai.com marketing page to a vinayrp.in
readme — it now carries the Vercel deployment runbook (import project, set
`NEXT_PUBLIC_APP_URL=https://vinayrp.in`, point DNS via dashboard records)
plus License & Credits attribution. The old README pointed "Live site" at
chanhdai.com, which would be publicly wrong once the repo is deployed.

**Remaining human steps** (dashboard/registrar, cannot be done by agent):
1. Import `GhostInHex/vinayrp.in` in Vercel; set `NEXT_PUBLIC_APP_URL=https://vinayrp.in`
2. Point vinayrp.in DNS at Vercel per the project's Domains tab
3. Re-run the smoke-check above against https://vinayrp.in

Follow-up noticed, not blocking deploy: `DEVELOPMENT.md` is still upstream's
text (ncdai clone URL, portless setup, `pnpm registry:*` scripts that were
deleted in ticket 02). README now has a correct minimal dev quickstart;
DEVELOPMENT.md should be rewritten in a later cleanup ticket.
→ Tracked as `issues/08-development-md-cleanup.md`.

### Review followup (code-review, two-axis)

Both axes clean of hard violations; findings addressed before commit:

- Stray smoke-test logs removed; not committed.
- Seam-3 sweep widened from home-only to **all five built HTML pages**
  (index, blog, about/awards/projects md routes render non-HTML): remaining
  ncdai/chanhdai hits are footer attribution only on every page.
- Seam-5 gaps closed with built-output evidence: JSON-LD present (4 blocks,
  Person blocks name "Vinay Reddy Patil", social sameAs = vinay handles),
  theme-toggle markup (`aria-label="Toggle mode"`) in served HTML.
- **Deploy-day check to add:** JSON-LD `"url"` is baked at build time from
  `NEXT_PUBLIC_APP_URL`; local build shows `http://localhost:3000`. After
  Vercel import, verify the live page's JSON-LD reads `https://vinayrp.in`.
- Judgement calls accepted, no change: portability note appears in both the
  ticket comment (record of work) and README (user-facing doc) by design;
  README "Live site" link becomes accurate the moment DNS step completes,
  which is the same release that publishes this README.
