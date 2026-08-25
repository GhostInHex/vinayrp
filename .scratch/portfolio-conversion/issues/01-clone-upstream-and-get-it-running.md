# 01: Clone upstream & get it running

**What to build:** The upstream repo (ncdai/chanhdai.com, MIT) is cloned into this working directory as the conversion base, dependencies installed, and both the dev server and production build verified green — the untouched starting point all later tickets assume.

**Blocked by:** None (can start immediately).

**Status:** ready-for-agent

- [ ] Upstream repo content present in the working directory (existing AGENTS.md / CONTEXT.md / docs / .scratch preserved)
- [ ] Dependencies installed with pnpm
- [ ] `pnpm build` completes successfully
- [ ] Dev server starts and serves the site locally
- [ ] Upstream MIT LICENSE retained; baseline commit made before any changes
