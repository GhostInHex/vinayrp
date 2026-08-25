# 06: Feature verification sweep

**What to build:** Every kept feature demonstrably works *for Vinay*: vCard downloads with his details, dynamic OG images show his branding, PWA manifest installs the site, sitemap/robots/JSON-LD name Vinay Reddy Patil at vinayrp.in, /llms.txt describes him accurately, theme toggle works. Full verification-seam sweep from the spec plus upstream test suite passing.

**Blocked by:** 04, 05.

**Status:** done

- [x] vCard download carries Vinay's details
- [x] OG image generation reflects Vinay branding
- [x] PWA manifest valid and installable
- [x] Sitemap, robots.txt, JSON-LD all reference vinayrp.in / Vinay identity
- [x] /llms.txt accurate
- [x] Light/dark toggle works across pages
- [x] Deleted routes (/components, /blocks, /docs, /sponsors, /timeline, /game) return 404
- [x] Zero "Ncdai"/"chanhdai" strings in built output (LICENSE/README excepted)
- [x] `pnpm build` green; vitest suite passes

## Outcome notes

Verification ran against the production build (`next build` + `next start`
+ request-level checks), not just code inspection. Sweep found and fixed:

- **Home page rendered `Projects` and `Awards` twice** — ticket 04 inserted
  its sections after Hello but never removed upstream's originals further
  down the page. Duplicates removed; verified exactly one `#projects` /
  `#achievements` panel in served HTML.
- **Empty-data panels showed bare headers** (Stack, Education,
  Certifications "(0)", Bookmarks "(0)"). Each component now returns `null`
  while its data array is empty — seeding the data file restores it
  (one-file edit, per spec story 17). Command-menu anchors for those
  sections are gated on data presence too; the dead `/#experience` anchor
  (section deleted in ticket 04) is gone.
- **`/og/domain` deleted** — upstream's domain-*sale* OG template (a
  chanhdai side-business artifact), unreferenced anywhere.
- **llms surface made accurate**: `/llms.txt` no longer advertises
  Experience/Education/Certifications/Bookmarks pages backed by empty
  arrays, drops career language ("key roles I've taken on"), and lists all
  14 Hashnode articles newest-first under Writing. `/blog.md` points at
  Hashnode while zero posts are self-hosted; experience/education/
  certifications/bookmarks md routes serve graceful empty-state text;
  about.md's Tech Stack section renders only when seeded. Builders
  extracted to `src/lib/llms-content.ts` with tests
  (`llms-content.test.ts`, 5 cases).

Verified working for Vinay: vCard serves N/FN/ADR/EMAIL/URL + embedded
JPEG photo (vinayrp-vcard.vcf); `/og/simple` renders 200 image/png with
name/title from `USER.ogImage`; manifest names Vinay with valid icon set;
robots/sitemap/JSON-LD Person all derive from vinayrp.in config; theme
toggle markup present via shared header on every (app) page; deleted
routes (plus /og/domain) all 404. Built-output sweep: only remaining
"ncdai"/"chanhdai" hits are the footer MIT License attribution link
(intentional per spec). `pnpm lint`, `pnpm test:run` (58), `pnpm build`,
`pnpm check-types` all green.

- Review-followup polish (same ticket): empty-panel gating moved from
  inside each component up to the home page, so each optional section now
  brings its own *leading* separator and hides its divider with it — no
  stacked dividers whether zero, some, or all panels are seeded.
  Command-menu per-section const arrays collapsed into one
  `optionalSectionLinks()` helper; llms builders' triplicated
  sort/map/join extracted to `externalPostLines()`; Hashnode-URL counting
  in the test switched to `split` (no regex escaping). Two-axis code
  review found one real defect (trailing-separator layout could stack two
  dividers when only some sections were seeded) — fixed before commit.

Deferred for owner input (pre-existing): project/award placeholder dates
(`// TODO: verify` in projects.tsx/awards.tsx), phone number B64 empty in
user.ts, TECH_STACK/EDUCATION content still unseeded.
