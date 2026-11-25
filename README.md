# atproto-starter

A minimal starter for building an AT Protocol app with Node and React.

This is a clean slate. It gives you a working dev setup, production build, Docker, and a basic PDS reachability check. Everything beyond that is yours to add.

## Quick start

Requires Node.js 24.17.x and pnpm 11.8.0.

```sh
git clone <this-repo> my-app
cd my-app
pnpm install
pnpm dev
```

Open http://localhost:5173. You should see the app running.

## Scripts

```sh
pnpm dev           # dev server (Vite + API)
pnpm build         # production build
pnpm start         # run the production build
pnpm test          # run tests
pnpm typecheck     # type check
pnpm lint          # lint
pnpm format        # format
pnpm format:check  # check formatting without changing files
```

## Connecting to a PDS

Copy `.env.example` to `.env` and set `PDS_URL` to the Personal Data Server you want to use. Without one, the app still runs — it just reports PDS as not configured.

For local development, run a PDS using `atproto-sandbox` and point `PDS_URL` at it.

## Project layout

```
.
├── src/              # React frontend
├── server/           # Node HTTP server (serves API and static files)
├── index.html        # Vite entry
├── Dockerfile        # Container build
├── compose.yaml      # Docker Compose config
└── docs/DEPLOY.md    # Deployment guide
```

## Deploying

See [docs/DEPLOY.md](docs/DEPLOY.md).

## License

MIT — see [LICENSE](LICENSE).
