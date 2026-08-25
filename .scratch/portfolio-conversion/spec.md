# Spec: Convert chanhdai.com into Vinay's portfolio (vinayrp.in)

Status: ready-for-agent

## Problem Statement

Vinay is a student full-stack developer (AI applications focus) who needs a personal portfolio at vinayrp.in to show recruiters, hackathon judges, and peers who he is and what he can build. He has no work experience, so his two projects (NovusMail, Project Ghost), hackathon placements, and 14+ published articles must carry the whole story — and building that site from scratch would take weeks he'd rather spend building projects.

## Solution

Fork the MIT-licensed ncdai/chanhdai.com (pixel-perfect dev portfolio, Next.js 16 + Tailwind v4 + shadcn/ui), strip it down to portfolio-only scope, delete everything that tells *his* story or serves *his* side businesses, rebrand it end-to-end as Vinay Reddy Patil at vinayrp.in, seed all content from Vinay's resume, and deploy to Vercel. The design stays pixel-faithful to the original; only identity, content, and scope change.

## User Stories

1. As a recruiter, I want to immediately see Vinay's name, title ("Full-Stack Developer — AI Applications"), and photo placeholder on the home page, so that I know whose site this is within seconds.
2. As a recruiter, I want Vinay's two flagship projects (NovusMail, Project Ghost) front-and-center with descriptions and live demo/source links, so that I can assess his practical skill without any employment history.
3. As a recruiter, I want to see Vinay's hackathon placements (8th nationwide ChaiCode, 4th HackBuzz) in an Achievements section, so that external validation of his work is visible, not buried.
4. As a visitor, I want a Writing section linking to Vinay's Hashnode articles, so that I can gauge his depth (JS promises, browser internals, TCP) from his published work.
5. As a visitor, I want working light/dark theme toggle, so that reading is comfortable in my environment.
6. As a visitor, I want links to Vinay's GitHub (GhostInHex), LinkedIn (vinay-263b933a6), and X (vinayrp_dev), so that I can connect or review code.
7. As a contact, I want Vinay's email (vinayrpdev@gmail.com) reachable via the site's protected email display, so that I can reach him without it being trivially scraped.
8. As someone met in person, I want to download a vCard from the site, so that Vinay's details land in my phone contacts correctly attributed to him.
9. As a link-sharer, I want dynamic OG images generated for shared pages, so that links to vinayrp.in preview attractively with Vinay's branding.
10. As a feed reader user, I want an RSS feed available, so that I can follow new content.
11. As a mobile visitor, I want the site installable as a PWA, so that I can pin it like an app.
12. As a search engine, I want correct JSON-LD structured data, sitemap, and robots.txt naming Vinay Reddy Patil and vinayrp.in, so that the right identity ranks for his name.
13. As an AI assistant user, I want /llms.txt endpoints serving accurate info about Vinay, so that AI tools describe him correctly.
14. As Vinay, I want the shadcn registry/blocks/docs routes completely removed, so that the repo builds simple and contains nothing I don't understand.
15. As Vinay, I want testimonials, sponsors, timeline, and game pages deleted, so that no page implies experience or content I don't have.
16. As Vinay, I want zero references to "Ncdai"/"chanhdai" anywhere in visible UI or built output, so that the site reads as fully mine (upstream LICENSE attribution excepted).
17. As Vinay, I want my personal data isolated in dedicated data/config files matching upstream's structure, so that future copy tweaks are one-file edits.
18. As Vinay, I want a placeholder avatar wired into the data layer, so that dropping in a real image later is a file swap.
19. As Vinay, I want the blog system retained but pointing outward at Hashnode, so that launching doesn't require migrating articles first.
20. As Vinay, I want the MDX self-hosted blog capability left intact in the codebase, so that phase-2 migration of my best posts requires adding content, not rebuilding plumbing.
21. As Vinay, I want deployment on Vercel with only NEXT_PUBLIC_APP_URL-style required env vars, so that setup is minimal.
22. As future-Vinay, I want application code kept free of Vercel-proprietary APIs, so that moving to Cloudflare Pages (via OpenNext adapter) later stays bounded.
23. As a visitor on slow connections, I want inherited performance optimizations intact, so that the site remains fast after our deletions.

## Implementation Decisions

- **Strategy**: fork-and-strip per ADR-0001. Clone upstream at current main; do not preserve its git history as ours' primary line beyond initial import.
- **Scope of deletion**: registry (`src/registry/`), blocks + docs + preview route groups, blocks/doc features, sponsors feature, timeline page, game route, testimonials, ads.txt/AdSense, Discord feedback webhook. Registry-related env vars dropped from `.env.example`.
- **Branding surface**: personal data lives in upstream's portfolio data files (name, bio, jobs list → repurposed to projects, social handles) plus site config (site name/URL/description, nav). Nav reduced to: Home, Writing, Contact (exact labels finalized during implementation). JSON-LD config updated to Vinay's identity.
- **Home page composition**: hero (name, title, flip-sentences seeded from resume summary), Projects section leading with NovusMail then Project Ghost, Achievements section (hackathon placements + 14+ articles milestone), Writing links, About block seeded from resume summary, location Bengaluru.

- **Blog**: retain upstream's MDX infrastructure untouched for phase 2; at launch the Writing section renders External Post links to Hashnode. No posts migrated in this spec.
- **Jobs→Projects**: upstream's home renders an employment list from user data; repurpose that data shape to render Projects instead of inventing a parallel structure.
- **Timeline/testimonials/sponsors/game**: routes removed outright, not hidden.
- **Deployment**: Vercel; required env limited to app URL. No Vercel-proprietary APIs introduced (ADR-0002). Cloudflare support explicitly deferred.
- **Analytics**: OpenPanel/GTM wiring may remain dormant in code but unconfigured; no analytics account needed at launch.
- **Assets**: placeholder avatar image until Vinay supplies a real one; OG image templates rebranded with name/title.
- **License/attribution**: keep upstream MIT LICENSE text; add visible credit where reasonable (footer or README) without cluttering UI.

## Testing Decisions

- Test externally observable behavior only: what the built site renders and serves, not internal function shapes.
- Inherit upstream's Vitest setup; prefer extending existing test patterns over introducing new ones.
- Verification seams (confirmed with owner):
  1. `pnpm build` passes after each strip/rebrand slice
  2. Rendered pages contain Vinay's identity (name, title, links, projects) sourced from the personal-data files
  3. Built output and visible UI contain zero "Ncdai"/"chanhdai" strings (LICENSE/README attribution excepted)
  4. Deleted routes (/components, /blocks, /docs, /sponsors, /timeline, /game) return 404
  5. Kept features function: theme toggle, vCard download, RSS, OG generation, PWA manifest, sitemap/robots/JSON-LD, /llms.txt

## Out of Scope

- Migrating any Hashnode article into self-hosted MDX posts (phase 2)
- Real avatar/photo (placeholder ships)
- Analytics configuration, AdSense, sponsor monetization
- Cloudflare Pages deployment configuration (deferred; portability preserved)
- Visual redesign/retheme beyond branding swap (incremental post-launch)
- Copy polish beyond resume-seeded defaults (owner iterates post-launch)

## Further Notes

- Upstream license: MIT, excluding author's name/logo (trademark). All personal info must be and is being replaced — tracked by verification seam 3.
- Content source of truth: vinay-resume-2.pdf (repo root) — NovusMail and Project Ghost descriptions, achievements, skills, summary line.
- Domain vocabulary lives in CONTEXT.md; decisions in docs/adr/0001 (fork origin) and 0002 (deployment posture).
