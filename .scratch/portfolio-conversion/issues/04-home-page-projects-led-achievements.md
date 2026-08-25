# 04: Home page: Projects-led + Achievements

**What to build:** The home page tells Vinay's story with no employment implied: hero (name, title, flip-sentences + about seeded from resume summary, Bengaluru), Projects section leading with NovusMail then Project Ghost (demo/source links), a visible Achievements section (8th ChaiCode nationwide, 4th HackBuzz, 14+ articles milestone). Upstream's jobs data shape repurposed for Projects rather than replaced with parallel structure.

**Parallel note:** depends only on 03 and touches disjoint files from ticket 05 — may run concurrently with 05 via separate git worktrees; merge sequentially after.

**Content source:** vinay-resume-2.pdf at repo root.

**Blocked by:** 03.

**Status:** ready-for-agent

- [ ] Hero renders Vinay's name/title/bio/location from data files
- [ ] Projects section shows NovusMail and Project Ghost with live demo/source links
- [ ] Achievements section visible on home page with hackathon placements + writing milestone
- [ ] No employment/jobs framing anywhere on the home page
- [ ] `pnpm build` green
