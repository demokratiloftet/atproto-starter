# Deploying

This starter includes a `Dockerfile` and `compose.yaml` for containerised deploys. It does not include any specific host or platform configuration — adapt to your infrastructure.

## Build and run with Docker Compose

```sh
docker compose up -d --build
```

The app listens on `127.0.0.1:3000` by default.

## Environment variables

Required at runtime:

- `PORT` — port to bind (default `3000`)
- `HOST` — host to bind (default `127.0.0.1`)

Optional:

- `PDS_URL` — AT Protocol PDS endpoint for reachability check
- `APP_NAME` — label shown by health endpoint
- `APP_REVISION` — Git SHA or version tag for health endpoint

See `.env.example` for a starting point.

## Endpoints

- `GET /health` — liveness and build info (returns 200 when running)
- `GET /api/pds` — PDS reachability check

## Deploying to a server

How you deploy depends on your infrastructure. Common patterns:

- Push the built container to a registry and pull on your host
- Use `docker compose` with a reverse proxy (Traefik, Caddy, nginx) in front
- Run behind Tailscale for private access

Keep secrets out of Git. Configure them through your deployment platform.
