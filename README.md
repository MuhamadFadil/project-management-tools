# Personal Project Management System

A modern personal project management app for IT workflows, built with Next.js, Tailwind CSS, and PostgreSQL-ready schema.

## Features
- Dashboard overview with KPI and charts
- Project portfolio and detail view with timeline
- Routine task workflow for PR and VM automation
- Issue & troubleshooting management
- Microsoft Graph integration starter
- Deploy-ready structure for Vercel

## Tech Stack
- Next.js App Router
- Tailwind CSS
- Recharts
- Prisma + PostgreSQL
- Microsoft Graph API
- Vercel deployment ready

## Local Development

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Environment Variables

```env
DATABASE_URL="postgresql://..."
MICROSOFT_TENANT_ID=""
MICROSOFT_CLIENT_ID=""
MICROSOFT_CLIENT_SECRET=""
TELEGRAM_BOT_TOKEN=""
TELEGRAM_CHAT_ID=""
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

## Deployment

1. Push repository to GitHub.
2. Import to Vercel.
3. Add environment variables.
4. Deploy production build.

## Notes
This starter includes the core architecture, dashboard UI, project detail timeline, routine tasks, and issue management modules to support the full workflow you described.
