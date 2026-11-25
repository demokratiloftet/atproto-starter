// Dev entry: starts the API server next to Vite's dev server.
// Vite handles the frontend; this handles API routes.
import { createApp } from "./app.ts";

const port = Number(process.env.API_PORT ?? 3000);
const host = process.env.HOST ?? "127.0.0.1";

const server = createApp({
  pdsUrl: process.env.PDS_URL,
  appName: process.env.APP_NAME,
});

server.listen(port, host, () =>
  console.log(`API dev server on http://${host}:${port}`),
);
