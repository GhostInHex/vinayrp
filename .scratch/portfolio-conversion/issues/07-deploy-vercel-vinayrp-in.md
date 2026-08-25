# 07: Deploy to Vercel @ vinayrp.in

**What to build:** The site is live at https://vinayrp.in via Vercel, with a production smoke-check against all five verification seams. Portability preserved for Cloudflare (ADR-0002): no Vercel-proprietary APIs introduced during deploy setup.

**Human-in-the-loop checklist** (agent cannot click through dashboards):
1. Create/import the project in Vercel (owner account)
2. Set required env var(s): app URL → https://vinayrp.in
3. Point vinayrp.in DNS at Vercel (registrar-side)

**Blocked by:** 06.

**Status:** ready-for-agent

- [ ] Production deployment succeeds on Vercel
- [ ] vinayrp.in serves the site over HTTPS
- [ ] Production smoke-check: identity renders, kept features work, deleted routes 404, zero Ncdai traces
- [ ] No Vercel-proprietary API usage added (portability note recorded)
