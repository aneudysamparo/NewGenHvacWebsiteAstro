# Deploying to Dokploy

This is a **static Astro site**. The included `Dockerfile` builds it with Node 22 and
serves the output with nginx — Dokploy runs the Dockerfile directly.

## What's in the box

| File | Purpose |
|---|---|
| `Dockerfile` | Multi-stage: `npm ci && npm run build` → nginx serving `dist/` on port **80** |
| `docker/nginx.conf` | Directory-style URLs, custom `404`/`500`, gzip, long-cache for hashed assets |
| `.dockerignore` | Keeps the build context lean and secret-free (`.mcp.json`, `.stitch`, etc.) |
| `public/robots.txt` | Allows crawling (SEO-first) |

`astro.config.mjs` already sets `site: 'https://newgenhvac.com'` (canonical/OG URLs).

## Steps in Dokploy

1. **Push the repo** to a Git provider Dokploy can reach (GitHub/GitLab/Gitea).
2. Dokploy → **Create Project** → **Create Service → Application**.
3. **Provider:** connect the Git repo + branch (e.g. `main`).
4. **Build Type:** `Dockerfile` (path `./Dockerfile`).
5. **Port:** `80` (the container exposes 80; Dokploy's Traefik proxy terminates TLS).
6. **Domains:** add `newgenhvac.com` (and `www.newgenhvac.com`); enable HTTPS (Let's Encrypt).
   Point the domain's DNS A record at the Dokploy server first.
7. **Deploy.** Each push can auto-deploy (enable the deploy webhook / auto-deploy).

No environment variables are required — the site is fully static and has no backend yet.

## Quick local sanity check (optional, needs Docker)

```bash
docker build -t nghvac .
docker run --rm -p 8080:80 nghvac
# open http://localhost:8080  (try a bad URL to see the 404 page)
```

## Later (not needed for this launch)

- **Directus content:** when the CMS is wired, add build-time env (e.g. `DIRECTUS_URL`,
  token) in Dokploy, and trigger a **Dokploy deploy webhook from a Directus "content
  updated" webhook** so edits rebuild the site.
- **Forms:** currently hand off to WhatsApp (interim). Real Jobber/GoHighLevel wiring is a
  later stage — no deploy change needed for it.
- **Sitemap:** `npm i @astrojs/sitemap`, add it to `astro.config.mjs`, then uncomment the
  `Sitemap:` line in `public/robots.txt` and submit to Search Console.
- **Blog:** currently hidden (`src/pages/_blog`). To ship it, rename back to `src/pages/blog`
  and re-add the Blog nav/footer links.
