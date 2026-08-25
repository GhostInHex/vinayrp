# 08: Rewrite DEVELOPMENT.md

**What to build:** Replace upstream's `DEVELOPMENT.md` content (ncdai clone
URL, portless setup, `ncdai.localhost`, deleted `pnpm registry:*` scripts,
R2 screenshot-sync workflow) with instructions matching this repo: clone
`GhostInHex/vinayrp.in`, `.env.local` from `.env.example`, `pnpm dev`,
quality gates (`lint`, `format:check`, `check-types`, `test:run`, `build`).
README currently carries a minimal quickstart; this ticket makes the deeper
guide truthful again or folds it into README and deletes the file.

**Blocked by:** none (found during 07).

**Status:** done

- [x] No ncdai/portless/registry/R2 references remain in dev docs
- [x] Documented commands all exist in package.json scripts

## Comments

**Outcome:** `DEVELOPMENT.md` fully rewritten as this repo's deeper guide
(README keeps the minimal quickstart + deployment runbook; the two now link
to each other instead of duplicating). New structure: prerequisites (Node ≥22
per `.nvmrc`, pnpm ≥9), clone of `GhostInHex/vinayrp.in`, env-var walkthrough
table matching `.env.example` exactly (only `NEXT_PUBLIC_APP_URL` required;
OpenPanel/GTM documented as dormant per spec), `pnpm dev` on localhost:3000,
prod build/start/preview, Vitest testing section, quality gates
(`lint`, `format:check`, `check-types`, `test:run`, `build` — upstream's
`registry:validate` dropped, `test:run` added), auto-fix commands, a
"Where content lives" map into `src/features/portfolio/data/*`, and a pointer
to README/ADR-0002 for deployment.

Verified: zero portless/registry/R2/ncdai/chanhdai strings remain in
DEVELOPMENT.md (README's sole hit is the spec-exempted License & Credits
attribution); every documented command exists in `package.json` scripts;
prettier `--check` passes on the file. No code changes.
