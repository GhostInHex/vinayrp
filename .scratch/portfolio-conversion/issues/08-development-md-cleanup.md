# 08: Rewrite DEVELOPMENT.md

**What to build:** Replace upstream's `DEVELOPMENT.md` content (ncdai clone
URL, portless setup, `ncdai.localhost`, deleted `pnpm registry:*` scripts,
R2 screenshot-sync workflow) with instructions matching this repo: clone
`GhostInHex/vinayrp.in`, `.env.local` from `.env.example`, `pnpm dev`,
quality gates (`lint`, `format:check`, `check-types`, `test:run`, `build`).
README currently carries a minimal quickstart; this ticket makes the deeper
guide truthful again or folds it into README and deletes the file.

**Blocked by:** none (found during 07).

**Status:** ready-for-agent

- [ ] No ncdai/portless/registry/R2 references remain in dev docs
- [ ] Documented commands all exist in package.json scripts
