# vinayrp.in

Personal portfolio of **Vinay Reddy Patil** — student full-stack developer focused on AI applications.

→ Live site: [vinayrp.in](https://vinayrp.in)

## Stack

- Next.js 16
- Tailwind CSS v4
- shadcn/ui

## Features

- Projects-led home page with achievements and Hashnode writing links
- Light/dark themes
- vCard download
- SEO: JSON-LD schema, sitemap, robots
- Dynamic OG images for rich link previews
- RSS feed
- AI-ready with [/llms.txt](https://llmstxt.org)
- Installable as PWA

## Development

Requires Node.js ≥ 22 and pnpm ≥ 9.

```bash
pnpm i
cp .env.example .env.local   # adjust as needed
pnpm dev
```

Quality gates (run before pushing):

```bash
pnpm lint
pnpm format:check
pnpm check-types
pnpm test:run
pnpm build
```

## Deployment

The site deploys to [Vercel](https://vercel.com) zero-config — no `vercel.json`
or platform adapter is required (see
[ADR-0002](docs/adr/0002-vercel-now-portable-for-cloudflare-later.md)).

1. Import the `GhostInHex/vinayrp.in` repository into Vercel (owner account).
   Framework preset: Next.js; build command and output are auto-detected.
2. Set the one required environment variable in the Vercel project settings:

   ```
   NEXT_PUBLIC_APP_URL=https://vinayrp.in
   ```

3. Point `vinayrp.in` at Vercel from the registrar — add the DNS records shown
   in the Vercel dashboard under the project's Domains tab, then assign the
   domain to the project.
4. Pushes to the production branch deploy to production; every PR gets a
   preview deployment. `VERCEL_ENV` / `VERCEL_GIT_COMMIT_SHA` are injected by
   Vercel automatically and only feed the footer build-info block.

### Portability

Application code stays platform-portable: no Vercel-proprietary APIs or SDKs
are used anywhere. The only Vercel coupling is reading auto-injected
`VERCEL_*` environment variables, which fall back gracefully when unset. If
Cloudflare Pages becomes preferable, [`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare)
is the migration path (OG image rendering may need rework — documented in
[ADR-0002](docs/adr/0002-vercel-now-portable-for-cloudflare-later.md)).

## License & Credits

Forked and stripped down from
[ncdai/chanhdai.com](https://github.com/ncdai/chanhdai.com) — design credit
for the original portfolio belongs to its author. Site content and personal
identity © Vinay Reddy Patil. Released under the MIT license (see
[LICENSE](LICENSE)).

