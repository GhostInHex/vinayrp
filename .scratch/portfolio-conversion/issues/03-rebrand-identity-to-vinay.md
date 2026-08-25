# 03: Rebrand identity to Vinay

**What to build:** The site is unmistakably Vinay Reddy Patil's: name, title ("Full-Stack Developer — AI Applications"), email (vinayrpdev@gmail.com), socials (GitHub GhostInHex, LinkedIn vinay-263b933a6, X vinayrp_dev), domain vinayrp.in, placeholder avatar, and reduced nav (Home, Writing, Contact). All driven through the personal-data/config files matching upstream's structure.

**Scout first:** fan out scouts to enumerate every branding touchpoint (site config, portfolio data files, JSON-LD, layout metadata, OG templates, manifest) before editing, so nothing is missed.

**Blocked by:** 02 (nav must already reference only surviving pages).

**Status:** ready-for-agent

- [ ] Personal data files carry Vinay's identity end-to-end
- [ ] Site config: name/description/URL = vinayrp.in; nav = Home, Writing, Contact
- [ ] Placeholder avatar wired via data layer (swappable later)
- [ ] Built output contains zero "Ncdai"/"chanhdai" strings (LICENSE/README attribution excepted)
- [ ] `pnpm build` green; rendered pages show Vinay's identity
