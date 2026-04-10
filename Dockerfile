# #flui-managed
# syntax=docker/dockerfile:1.6

# ─── Stage 1: builder ──────────────────────────────────────────────────────
FROM node:24-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --no-audit --no-fund
COPY . .
RUN npm run build && npm prune --omit=dev

# ─── Stage 2: runner ───────────────────────────────────────────────────────
FROM node:24-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

RUN addgroup --system --gid 1001 nodejs \
 && adduser --system --uid 1001 svelte

COPY --from=builder --chown=svelte:nodejs /app/build ./build
COPY --from=builder --chown=svelte:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=svelte:nodejs /app/package.json ./package.json

USER svelte

EXPOSE 3000

CMD ["node", "build"]
