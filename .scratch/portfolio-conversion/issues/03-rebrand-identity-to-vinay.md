# 03: Rebrand identity to Vinay

**What to build:** The site is unmistakably Vinay Reddy Patil's: name, title ("Full-Stack Developer — AI Applications"), email (vinayrpdev@gmail.com), socials (GitHub GhostInHex, LinkedIn vinay-263b933a6, X vinayrp_dev), domain vinayrp.in, placeholder avatar, and reduced nav (Home, Writing, Contact). All driven through the personal-data/config files matching upstream's structure.

**Scout first:** fan out scouts to enumerate every branding touchpoint (site config, portfolio data files, JSON-LD, layout metadata, OG templates, manifest) before editing, so nothing is missed.

**Blocked by:** 02 (nav must already reference only surviving pages).

**Status:** done

- [x] Personal data files carry Vinay's identity end-to-end
- [x] Site config: name/description/URL = vinayrp.in; nav = Home, Writing, Contact
- [x] Placeholder avatar wired via data layer (swappable later)
- [x] Built output contains zero "Ncdai"/"chanhdai" strings (LICENSE/README attribution excepted)
- [x] `pnpm build` green; rendered pages show Vinay's identity

## Outcome notes

- Identity now flows from `user.ts` / `social-links.ts` / `site.ts` through
  JSON-LD, layout metadata, manifest, OG routes, vCard, and llms endpoints.
- Nav: Home `/`, Writing `/blog` (relabeled until ticket 05 reshapes it),
  Contact `mailto:vinayrpdev@gmail.com`.
- New brand primitives: `site-mark.tsx`, `site-wordmark.tsx`,
  `site-mark-isometric.tsx`; local placeholder assets in `public/`
  (favicon SVGs, icon.svg, generated PNGs via sharp, avatar.svg).
- Content data files (projects/experiences/education/certifications/awards/
  bookmarks/tech-stack) emptied into typed stubs so Dai's story no longer
  leaks via llms endpoints or home sections — tickets 04/05 seed them.
- Upstream blog MDX posts deleted (plumbing intact per ticket 05).
- Removed the Daikanoid easter egg from the 404 page and the
  "Open in GitHub" hardcode; footer logotype rebranded; prose-ncdai CSS
  utility renamed to prose-rich.
- Built-output sweep: only remaining hits are the LICENSE URL and the footer
  "Inspired by: chanhdai.com" credit — both intentional attribution.

