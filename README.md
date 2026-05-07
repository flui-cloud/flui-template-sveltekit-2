# Flui Template — SvelteKit 2

A minimal demo application built with **SvelteKit 2** (Svelte 5) and ready to deploy on [Flui](https://flui.cloud).

Includes:

- SvelteKit 2 on Svelte 5
- `/api/health` endpoint
- In-memory item store with CRUD on `/api/items`
- OpenAPI 3.1 spec at `/api/openapi`
- Swagger UI at `/docs`
- Multi-stage `#flui-managed` Dockerfile
- Node adapter for production

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

This repo ships with a [`flui.yaml`](./flui.yaml) manifest describing the build strategy, port, healthcheck and resource profile.

From the CLI, with `flui` installed and authenticated against your cluster:

```bash
flui deploy ./flui.yaml
```

The CLI reads the manifest, triggers a build via GitHub Actions and rolls out the workload.

From the UI:

1. Click **Use this template** on GitHub.
2. Connect the new repository to Flui.
3. Click **Deploy**.

Built for [Flui](https://github.com/flui-cloud/flui.api) — see the main repo for cluster setup and CLI installation.

## License

MIT
