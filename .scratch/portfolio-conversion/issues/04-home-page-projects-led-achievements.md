# 04: Home page: Projects-led + Achievements

**What to build:** The home page tells Vinay's story with no employment implied: hero (name, title, flip-sentences + about seeded from resume summary, Bengaluru), Projects section leading with NovusMail then Project Ghost (demo/source links), a visible Achievements section (8th ChaiCode nationwide, 4th HackBuzz, 14+ articles milestone). Upstream's jobs data shape repurposed for Projects rather than replaced with parallel structure.

**Parallel note:** depends only on 03 and touches disjoint files from ticket 05 — may run concurrently with 05 via separate git worktrees; merge sequentially after.

**Content source:** vinay-resume-2.pdf at repo root.

**Blocked by:** 03.

**Status:** done

- [x] Hero renders Vinay's name/title/bio/location from data files
- [x] Projects section shows NovusMail and Project Ghost with live demo/source links
- [x] Achievements section visible on home page with hackathon placements + writing milestone
- [x] No employment/jobs framing anywhere on the home page
- [x] `pnpm build` green

## Outcome notes

- Seeded `PROJECTS` (NovusMail leads, Project Ghost second) using the upstream
  `Project` type as-is — no parallel structure invented. Demo URL is the
  structured `link`; Source Code link rides in the description markdown.
  URLs extracted from the resume PDF's link annotations.
- Seeded `AWARDS` with ChaiCode 8th nationwide, HackBuzz 4th (NCET Bengaluru),
  and the 14+ Hashnode articles milestone; panel relabeled "Achievements"
  (`#achievements`) per CONTEXT.md vocabulary.
- Home order is now projects-led: Hello → Projects → Achievements → Blog → …;
  the empty `<Experiences />` section was removed from the home page (no
  employment framing); `USER.jobs` stays typed but empty (vCard/JSON-LD safe).
- About block enriched with the resume summary line.
- **Follow-up:** the resume carries no dates for project periods or award
  dates — shipped values are best-guess placeholders marked `// TODO: verify`
  in `projects.tsx` / `awards.tsx`. Correct them once Vinay confirms.
- Code review flags accepted as-is: internal `awards/Award` naming retained
  (upstream shape kept deliberately), demo/source link duplication inside
  descriptions, data-level content tests (change-detector risk on copy edits).

