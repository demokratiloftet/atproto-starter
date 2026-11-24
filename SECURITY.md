# Security and maintenance

This starter is a template for new AT Protocol apps. Tests use synthetic data. A passing audit is not a guarantee of security.

Do not commit secrets, credentials, personal data or production configuration.

## Reporting a vulnerability

Report suspected vulnerabilities privately to a repository maintainer. Do not include tokens, passwords, private keys or personal information in an issue or pull request.

## Keeping the repository safe

- Keep environment files, signing keys and databases out of Git and Docker build contexts.
- Run the README checks before merging. CI tests changes and scans the full Git history for secrets. Dependencies and GitHub Actions are checked weekly by Dependabot.
- Starter template apps should not be deployed to production without first being configured and reviewed. Replace defaults before deploying.

See the README for how to configure and run this starter.
