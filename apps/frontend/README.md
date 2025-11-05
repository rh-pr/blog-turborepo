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
