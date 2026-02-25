# Portfolio (Next.js + Bun)

## Local development

```bash
bun install
bun dev
```

Open `http://localhost:3000`.

## Production check

```bash
bun run build
bun run start
```

## Vercel deployment (Bun-ready)

This repository is configured for Vercel with Bun:

- `bun.lock` is committed.
- `vercel.json` sets:
  - `installCommand: bun install --frozen-lockfile`
  - `buildCommand: bun run build`
- `package.json` defines:
  - `packageManager: bun@1.3.9`
  - Node/Bun engines.

### Deploy steps

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Import the repo in Vercel.
3. If you use environment variables, add them in Vercel Project Settings before deploy.
4. Deploy.
