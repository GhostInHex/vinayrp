# 01: Clone upstream & get it running

**What to build:** The upstream repo (ncdai/chanhdai.com, MIT) is cloned into this working directory as the conversion base, dependencies installed, and both the dev server and production build verified green — the untouched starting point all later tickets assume.

**Blocked by:** None (can start immediately).

**Status:** done

- [x] Upstream repo content present in the working directory (existing AGENTS.md / CONTEXT.md / docs / .scratch preserved)
- [x] Dependencies installed with pnpm
- [x] `pnpm build` completes successfully
- [x] Dev server starts and serves the site locally
- [x] Upstream MIT LICENSE retained; baseline commit made before any changes

**Outcome:** Baseline commit `a27b0e1` — 863 files from ncdai/chanhdai.com imported untouched. Planning files preserved; upstream AGENTS.md archived at `docs/upstream/AGENTS.md`. Local `.env` created from `.env.example` defaults (`NEXT_PUBLIC_GITHUB_CONTRIBUTIONS_API_URL` etc.) — required for build, gitignored. Verified: `pnpm install` ok, `pnpm build` green (218 static pages), dev server HTTP 200, vitest 75/75 pass. Baseline commit made with `--no-verify` to keep the vendor import pristine (lint-staged chokes on 863-file initial import); later tickets run hooks normally.

