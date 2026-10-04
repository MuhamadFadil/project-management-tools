# Personal Project Management System

A modern personal project management app for IT workflows, built with Next.js, Tailwind CSS, and PostgreSQL-ready schema.

## Features
- Dashboard for project & task overview
- Project detail with timeline and task hierarchy
- Routine task management for PR and VM requests
- Issue and troubleshooting tracking
- Microsoft Graph integration API starter
- Vercel-ready structure

## Stack
- Next.js App Router
- Tailwind CSS
- Recharts
- Prisma + PostgreSQL
- Microsoft Graph API starter
- Vercel deployment ready

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Environment variables

```env
DATABASE_URL="postgresql://..."
MICROSOFT_TENANT_ID=""
MICROSOFT_CLIENT_ID=""
MICROSOFT_CLIENT_SECRET=""
```

## Deployment

1. Push project to GitHub.
2. Import repo into Vercel.
3. Add environment variables.
4. Deploy.

## Notes
This repo is intentionally structured as a clean starter, with modular components and API endpoints to continue building the full production-ready workflow management platform.
