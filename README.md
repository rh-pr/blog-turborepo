# Blog Turborepo

A monorepo for a blog application built with a NestJS GraphQL API (Prisma + PostgreSQL) and a Next.js frontend. This repo uses a Turborepo-style layout with `apps/api` and `apps/frontend`.

## Table of contents
- Project overview
- Tech stack
- Repo structure
- Prerequisites
- Quick start (development)
- Database & Prisma
- Environment variables
- Scripts
- Testing
- Linting & formatting
- Deployment notes
- Contributing
- License

## Project overview
This repository contains a sample blog application split into two main apps:
- `apps/api`: NestJS GraphQL server with Prisma for database access.
- `apps/frontend`: Next.js frontend (React) consuming the GraphQL API.

The API supports posts, comments, likes, tags, and authentication (Google + JWT). The frontend includes pages/components for browsing and interacting with posts.

## Tech stack
- Backend: NestJS, GraphQL, Prisma, PostgreSQL
- Frontend: Next.js (App Router), React, TypeScript
- Monorepo tooling: Turborepo
- Package manager: pnpm (assumed; npm/yarn alternatives provided)
- Testing: Jest (backend e2e present), React testing tools may be used for frontend
- Linting/Formatting: ESLint, Prettier (project contains ESLint configs)

Note: This README assumes `pnpm` is used (common with Turborepo). If you use `npm` or `yarn`, substitute commands as shown below.

## Repo structure (relevant)
- `apps/`
  - `api/` — NestJS backend, Prisma schema at `apps/api/prisma/schema.prisma`
  - `frontend/` — Next.js frontend in `apps/frontend`
- `package.json` — root scripts and workspace settings
- `turbo.json` — turborepo configuration

(There are additional project files for testing, prisma migrations, etc.)

## Prerequisites
- Node.js 18+ (or version used by project)
- pnpm (recommended) — install via:
```powershell
npm install -g pnpm
```
- PostgreSQL (or another database; configured via `DATABASE_URL`)

If you prefer npm:
```powershell
npm install
```
Or yarn:
```powershell
yarn install
```

## Quick start (development)
From the repository root (examples use PowerShell):

1. Install dependencies (pnpm recommended)
```powershell
pnpm install
```
Or with npm:
```powershell
npm install
```

2. Set up environment variables (see next section).

3. Run the development servers:
- If repo uses a turborepo dev command:
```powershell
pnpm turbo run dev --parallel
```
- Or run API and frontend individually:
```powershell
# In separate terminals:
cd apps/api
pnpm run dev

cd apps/frontend
pnpm run dev
```

By default:
- Backend GraphQL endpoint: http://localhost:3000/graphql (or configured port)
- Frontend: http://localhost:3001 (or configured Next.js port)

Adjust ports to match `apps/*/src/main.ts` or Next.js `next.config` if changed.

## Database & Prisma
Prisma is used for DB schema and migrations. Typical workflow:

1. Generate Prisma client (from project root or `apps/api` depending on setup):
```powershell
pnpm --filter ./apps/api prisma generate
```

2. Run migrations:
```powershell
pnpm --filter ./apps/api prisma migrate deploy
# or for development
pnpm --filter ./apps/api prisma migrate dev --name init
```

3. Seed the database (if a seed script exists):
```powershell
pnpm --filter ./apps/api prisma db seed
# or run the seed script directly:
pnpm --filter ./apps/api ts-node prisma/seed.ts
```

Note: Replace `--filter ./apps/api` with your workspace selector or run commands from `apps/api` directory.

## Environment variables
Create a `.env` file in `apps/api` (or at repo root if centralized). Typical vars:
- DATABASE_URL="postgresql://user:password@host:port/dbname?schema=public"
- JWT_SECRET=your_jwt_secret
- GOOGLE_CLIENT_ID=...
- GOOGLE_CLIENT_SECRET=...
- NEXTAUTH_URL=http://localhost:3001 (if using NextAuth or similar on frontend)
- FRONTEND_URL=http://localhost:3001

Check `apps/api/src` and `apps/frontend/src` for exact variable names referenced in code.

## Scripts (examples)
Root and workspace scripts may exist in `package.json`. Common scripts you may find or add:

From repo root:
- pnpm dev (starts both apps in dev using turborepo)
- pnpm build (runs builds)
- pnpm test (runs tests)

From `apps/api`:
- pnpm run dev — run NestJS in watch mode
- pnpm run build — build the API
- pnpm run start:prod — run built API
- pnpm run prisma:generate — generate Prisma client

From `apps/frontend`:
- pnpm run dev — Next.js dev server
- pnpm run build — Next.js build
- pnpm run start — Next.js start (production)

Adjust script names based on your root and package.json contents.

## Testing
- Backend e2e tests are available in `apps/api/test` (Jest).
Run:
```powershell
pnpm --filter ./apps/api test
```
Or run from the `apps/api` folder:
```powershell
pnpm run test:e2e
```

Add frontend tests as needed (Jest/React Testing Library or Playwright for E2E).

## Linting & Formatting
Project contains ESLint config files. Use:
```powershell
pnpm lint
pnpm format
```
if scripts are provided in package.json. Otherwise run ESLint directly in each package.

## Deployment notes
- Build both apps for production:
```powershell
pnpm build
```
- Ensure production environment variables are set (database, secrets).
- For Docker/containers, create Dockerfiles per app and use your preferred deployment (Vercel for frontend, Dockerized API on hosting provider).

## Contributing
- Fork the repo and open PRs.
- Follow existing code style and run lint/tests before opening PR.
- Add migration files with Prisma when changing DB schema.

## Troubleshooting
- If Prisma client errors appear, run `prisma generate`.
- If migrations fail, double-check `DATABASE_URL` and DB connectivity.
- For port conflicts, update ports in `apps/*` run configs.

## Next steps I can help with
- Create `README.md` at the repo root with this content.
- Tailor the README to exact scripts and ports by reading `package.json` and `apps/*/package.json`.
- Add quick-start scripts to `package.json` or a `Makefile` for convenience.
- Add CI examples (GitHub Actions) for tests and deployments.

---

If you want, I can now:
- create `README.md` in the repository root with this content, or
- refine any section (e.g., exact package manager, scripts, ports) after I inspect `package.json` files.

Which would you like me to do next?
