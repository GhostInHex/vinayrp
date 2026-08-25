# Development

Deeper setup guide for working on this repo. For a minimal quickstart and the
deployment runbook, see [README.md](README.md).

## Prerequisites

- [Node.js](https://nodejs.org/) ≥ 22 (see [.nvmrc](.nvmrc) for the exact
  version used in development)
- [pnpm](https://pnpm.io/) ≥ 9
- [Git](https://git-scm.com/)

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/GhostInHex/vinayrp.in.git
cd vinayrp.in
```

### 2. Install dependencies

```bash
pnpm i
```

### 3. Configure environment variables

Create a `.env.local` file based on `.env.example`:

```bash
cp .env.example .env.local
```

What each variable does:

| Variable                                         | Required | Purpose                                                                                                                        |
| ------------------------------------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `NEXT_PUBLIC_APP_URL`                            | Yes      | Canonical site URL. Baked into JSON-LD, sitemap, and OG URLs at build time. Locally, `http://localhost:3000` works fine.       |
| `VERCEL_ENV`, `VERCEL_GIT_COMMIT_SHA`            | No       | Auto-injected by Vercel on deployments; only feed the footer build-info block. Leave unset locally — it renders "unavailable". |
| `GITHUB_API_TOKEN`                               | No       | Raises the GitHub API rate limit for repo star count. No scopes needed.                                                        |
| `NEXT_PUBLIC_GITHUB_CONTRIBUTIONS_API_URL`       | No       | Contributions-graph API; has a working public default.                                                                         |
| `NEXT_PUBLIC_DMCA_URL`                           | No       | DMCA protection badge endpoint.                                                                                                |
| `NEXT_PUBLIC_OPENPANEL_CLIENT_ID`, `OPENPANEL_*` | No       | OpenPanel analytics. Dormant at launch — no account needed.                                                                    |
| `NEXT_PUBLIC_GTM_ID`                             | No       | Google Tag Manager analytics. Dormant at launch.                                                                               |

Only `NEXT_PUBLIC_APP_URL` is required to run the site locally.

### 4. Run the development server

```bash
pnpm dev
```

The application is available at http://localhost:3000.

## Building for production

```bash
pnpm build
pnpm start
```

`pnpm preview` combines both steps (build, then serve).

## Testing

Tests use [Vitest](https://vitest.dev) and cover externally observable
behavior (rendered output, data invariants):

```bash
pnpm test        # watch mode
pnpm test:run    # single CI-style run
```

## Before pushing

CI runs these on every push and PR. Run them locally first:

```bash
pnpm lint
pnpm format:check
pnpm check-types
pnpm test:run
pnpm build
```

To auto-fix lint and formatting issues:

```bash
pnpm lint:fix
pnpm format:write
```

## Where content lives

Site content is isolated in dedicated data files so copy tweaks are one-file
edits:

- `src/features/portfolio/data/user.ts` — name, bio, avatar, location
- `src/features/portfolio/data/projects.tsx` — flagship projects
- `src/features/portfolio/data/awards.tsx` — achievements
- `src/features/portfolio/data/external-posts.ts` — Hashnode writing links
- `src/features/portfolio/data/social-links.ts` — GitHub / LinkedIn / X

## Deployment

Deploys to Vercel with no platform-specific code. The runbook lives in
[README.md](README.md); the portability rationale is in
[ADR-0002](docs/adr/0002-vercel-now-portable-for-cloudflare-later.md).
