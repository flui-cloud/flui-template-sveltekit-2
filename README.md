# Flui Template — SvelteKit 2

A minimal demo application built with **SvelteKit 2** (Svelte 5) and ready to deploy on [Flui](https://flui.cloud).

This template includes:

- ⚡ SvelteKit 2 with Svelte 5
- 🩺 `/api/health` endpoint
- 📦 In-memory item store with CRUD (`/api/items`)
- 📖 OpenAPI 3.1 spec at `/api/openapi`
- 📚 Swagger UI at `/docs`
- 🐳 Multi-stage Dockerfile (`#flui-managed`)
- 🚀 Node adapter for production

## Local development

```bash
npm install
npm run dev
```

App runs on http://localhost:5173

## Build with Docker

```bash
docker build -t flui-demo-sveltekit .
docker run -p 3000:3000 flui-demo-sveltekit
```

## Environment variables

| Variable | Default | Description |
|----------|---------|-------------|
| `APP_NAME` | `Flui Demo SvelteKit` | App name |
| `APP_VERSION` | `1.0.0` | App version |
| `PORT` | `3000` | HTTP port |
| `HOST` | `0.0.0.0` | Bind address |

## Deploy with Flui

1. Click **Use this template** on GitHub
2. Connect the repository to Flui
3. Click **Deploy**

## License

MIT
