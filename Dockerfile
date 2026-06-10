# syntax=docker/dockerfile:1

# ---------- Stage 1: build the static Astro site ----------
FROM node:22-alpine AS build
WORKDIR /app

# Install dependencies from the lockfile (reproducible)
COPY package.json package-lock.json ./
RUN npm ci

# Build → produces /app/dist (static HTML/CSS/JS)
COPY . .
RUN npm run build

# ---------- Stage 2: serve with nginx ----------
FROM nginx:1.27-alpine AS runtime

# Static output
COPY --from=build /app/dist /usr/share/nginx/html
# Site config: directory-style URLs, custom 404/500, gzip, asset caching
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# Simple container health check (Dokploy/Docker can read this)
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null 2>&1 || exit 1

CMD ["nginx", "-g", "daemon off;"]
