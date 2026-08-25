# Vercel-only deployment now; portable code so Cloudflare Pages stays open

The site deploys to Vercel today because Next.js works there zero-config and the upstream repo has Vercel-specific touches. The owner wants Cloudflare Pages as a cheaper option eventually. Rather than configuring dual deployments now (real ongoing complexity for a personal site), we deploy Vercel-only but keep application code platform-portable: avoid Vercel-proprietary APIs where reasonable, isolate any that slip in. If we switch later, the `@opennextjs/cloudflare` adapter is the migration path — some edge features (e.g. OG image rendering) may need rework at that point.

## Consequences

- No Cloudflare-specific config exists yet; expect a real (bounded) migration effort if/when switching.
- Any PR reaching for a Vercel-only feature should note it, so portability doesn't silently erode.
