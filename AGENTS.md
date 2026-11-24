# atproto-starter

Instructions for AI agents and human contributors working in this repository.

## Scope

- This is a minimal starter template for new AT Protocol apps.
- Keep it generic. Do not add code or dependencies specific to a particular app, domain or organisation.
- Do not pre-wire specific toolkit libraries. Users who want them should add them in their own app.
- The starter demonstrates: working dev setup, production build, Docker, and basic PDS reachability.

## Git and release

- Use the configured user Git identity. No co-author trailers, no push unless requested.
- Never force-push. Never skip hooks.

## Code style

- TypeScript, strict mode.
- ES modules.
- Prettier for format.
- Keep the generated starter small so users can read it top to bottom.

## Testing

- Unit tests with `node --test`.
- Synthetic fixtures only. No real credentials.
- Tests should pass out of the box without any external services.

## Security

- Never commit secrets, credentials, private keys or personal data.
- CI runs `.github/scripts/scan-secrets.sh` on every push.
- Keep local services on loopback. Public exposure is explicit, not a side effect.
- Report suspected vulnerabilities per [SECURITY.md](SECURITY.md).

## When in doubt

- Minimal change. One concern per PR.
- If something is app-specific, it does not belong here — users should add it in their own app.
