# 06: Feature verification sweep

**What to build:** Every kept feature demonstrably works *for Vinay*: vCard downloads with his details, dynamic OG images show his branding, PWA manifest installs the site, sitemap/robots/JSON-LD name Vinay Reddy Patil at vinayrp.in, /llms.txt describes him accurately, theme toggle works. Full verification-seam sweep from the spec plus upstream test suite passing.

**Blocked by:** 04, 05.

**Status:** ready-for-agent

- [ ] vCard download carries Vinay's details
- [ ] OG image generation reflects Vinay branding
- [ ] PWA manifest valid and installable
- [ ] Sitemap, robots.txt, JSON-LD all reference vinayrp.in / Vinay identity
- [ ] /llms.txt accurate
- [ ] Light/dark toggle works across pages
- [ ] Deleted routes (/components, /blocks, /docs, /sponsors, /timeline, /game) return 404
- [ ] Zero "Ncdai"/"chanhdai" strings in built output (LICENSE/README excepted)
- [ ] `pnpm build` green; vitest suite passes
