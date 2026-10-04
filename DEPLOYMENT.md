# Personal Project Management System - Deployment Guide

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js 18+
- PostgreSQL (local or cloud)
- Git

### 1. Clone and Install

```bash
git clone https://github.com/MuhamadFadil/project-management-tools.git
cd project-management-tools
npm install
```

### 2. Setup Database

**Option A: Supabase (Recommended)**
1. Go to [supabase.com](https://supabase.com)
2. Create new project
3. Copy connection string
4. Paste into `.env.local` as `DATABASE_URL`

**Option B: Vercel Postgres**
1. Link project to Vercel
2. Add Postgres database
3. Copy connection string to `.env.local`

**Option C: Local PostgreSQL**
```bash
# Install PostgreSQL
# Mac: brew install postgresql
# Ubuntu: sudo apt-get install postgresql

# Start service
# Mac: brew services start postgresql
# Ubuntu: sudo service postgresql start

# Create database
createdb project_management

# Update .env.local
DATABASE_URL="postgresql://localhost:5432/project_management"
```

### 3. Setup Environment

```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
DATABASE_URL="your-database-url"
JWT_SECRET="generate-a-random-string-min-32-chars"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

To generate JWT_SECRET:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 4. Setup Database Schema

```bash
# Generate Prisma client
npm run prisma:generate

# Create tables (run migrations)
npm run prisma:migrate initial

# Optional: Open Prisma Studio (GUI)
npm run prisma:studio
```

### 5. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 6. Test Authentication

1. Click "Sign Up"
2. Create account with:
   - Name: Muhamad Fadil
   - Email: test@example.com
   - Password: TestPassword123
3. Login with credentials
4. Explore dashboard, projects, tasks, issues

---

## 🚀 Deploy to Vercel (Production)

### Prerequisites
- GitHub account with repo pushed
- Supabase or Vercel Postgres database

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Ready for production deployment"
git push origin main
```

### Step 2: Import to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select "Import Git Repository"
4. Choose your GitHub repo
5. Select "Next.js" framework
6. Click "Deploy"

### Step 3: Add Environment Variables

In Vercel Dashboard → Settings → Environment Variables:

```
DATABASE_URL = postgresql://...
JWT_SECRET = (generate random string)
MICROSOFT_TENANT_ID = (if using Outlook)
MICROSOFT_CLIENT_ID = (if using Outlook)
MICROSOFT_CLIENT_SECRET = (if using Outlook)
TELEGRAM_BOT_TOKEN = (if using Telegram)
TELEGRAM_CHAT_ID = (if using Telegram)
NEXT_PUBLIC_APP_URL = https://your-domain.vercel.app
```

### Step 4: Run Prisma Migrations

```bash
# In Vercel CLI or local terminal
vercel env pull
npx prisma migrate deploy
```

Or run migrations automatically:
1. Add `prisma migrate deploy` to build script
2. Edit `package.json`:
```json
{
  "scripts": {
    "build": "prisma migrate deploy && next build"
  }
}
```

### Step 5: Setup Cron Jobs (Optional - for Daily Reminders)

Create `vercel.json` in root:
```json
{
  "crons": [
    {
      "path": "/api/cron/daily-reminder",
      "schedule": "0 7 * * *"
    }
  ]
}
```

Or in Vercel Dashboard:
1. Settings → Crons
2. Add path: `/api/cron/daily-reminder`
3. Set schedule: `0 7 * * *` (7 AM daily)

### Step 6: Verify Deployment

1. Open deployed URL
2. Click "Sign Up"
3. Create test account
4. Verify login works
5. Test creating projects and tasks

---

## 🔧 Setup Telegram Bot (Optional)

### 1. Create Bot

1. Chat with [@BotFather](https://t.me/botfather) on Telegram
2. Send `/newbot`
3. Follow instructions
4. Copy token to `TELEGRAM_BOT_TOKEN`

### 2. Get Chat ID

1. Send message to your bot
2. Visit: `https://api.telegram.org/bot<YOUR_TOKEN>/getUpdates`
3. Find `chat_id` in response
4. Copy to `TELEGRAM_CHAT_ID`

### 3. Test

```bash
curl -X POST http://localhost:3000/api/notifications/telegram \
  -H "Content-Type: application/json" \
  -d '{"message": "Test message"}'
```

---

## 🔐 Setup Microsoft Graph (Outlook Integration - Optional)

### 1. Register Azure App

1. Go to [Azure Portal](https://portal.azure.com)
2. Azure Active Directory → App registrations → New registration
3. Set name: "Project Manager"
4. Register

### 2. Get Credentials

1. Go to app overview
2. Copy "Application (client) ID" → `MICROSOFT_CLIENT_ID`
3. Copy "Directory (tenant) ID" → `MICROSOFT_TENANT_ID`
4. Go to Certificates & secrets → New client secret
5. Copy value → `MICROSOFT_CLIENT_SECRET`

### 3. Set Permissions

1. API permissions → Add a permission
2. Select Microsoft Graph → Delegated permissions
3. Add: `Mail.Read`
4. Click "Grant admin consent"

### 4. Test Sync

```bash
curl http://localhost:3000/api/microsoft/sync
```

---

## 📊 Database Management

### Prisma Studio (GUI)

```bash
npm run prisma:studio
```

Opens at [http://localhost:5555](http://localhost:5555)

### View Logs

```bash
# Vercel
vercel logs

# Local
npm run dev  # Check terminal
```

### Backup Database

**Supabase:**
1. Go to project settings
2. Backups section
3. Download backup

**Vercel Postgres:**
1. Dashboard → Postgres database
2. Backups section

---

## 🐛 Troubleshooting

### "Database connection error"
- Check DATABASE_URL is valid
- Verify database is running
- Check network access (firewall rules)

### "JWT verification failed"
- Regenerate JWT_SECRET
- Clear localStorage in browser
- Try logging in again

### "Prisma migration fails"
```bash
# Reset database (WARNING: deletes data)
prisma migrate reset

# Or manually fix:
prisma migrate resolve --rolled-back "initial"
npm run prisma:migrate initial
```

### "Vercel build fails"
```bash
# Check build locally
npm run build

# View logs
vercel logs
```

---

## 📝 API Endpoints

### Authentication
- `POST /api/auth/register` - Create account
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - Logout

### Projects
- `GET /api/projects` - List projects (auth required)
- `POST /api/projects` - Create project (auth required)
- `GET /api/projects/[id]` - Get project detail
- `PUT /api/projects/[id]` - Update project
- `DELETE /api/projects/[id]` - Delete project

### Tasks
- `POST /api/tasks` - Create task (auth required)
- `GET /api/tasks/[id]` - Get task detail
- `PUT /api/tasks/[id]` - Update task
- `DELETE /api/tasks/[id]` - Delete task

### Issues
- `GET /api/issues` - List issues (auth required)
- `POST /api/issues` - Create issue (auth required)
- `GET /api/issues/[id]` - Get issue detail
- `PUT /api/issues/[id]` - Update issue
- `DELETE /api/issues/[id]` - Delete issue

### Routine Tasks
- `GET /api/routine-tasks` - List routine tasks (auth required)
- `POST /api/routine-tasks` - Create routine task (auth required)
- `GET /api/routine-tasks/[id]` - Get routine task detail
- `PUT /api/routine-tasks/[id]` - Update routine task
- `DELETE /api/routine-tasks/[id]` - Delete routine task

### Notifications
- `POST /api/notifications/telegram` - Send Telegram message
- `GET /api/cron/daily-reminder` - Daily task reminder
- `GET /api/microsoft/sync` - Sync Outlook emails
- `GET /api/health` - Health check

---

## 🔒 Security Best Practices

1. **Environment Variables**
   - Never commit `.env.local`
   - Use `.env.example` as template
   - Rotate secrets regularly

2. **Authentication**
   - Use strong JWT_SECRET (min 32 chars)
   - Implement rate limiting (future)
   - Add 2FA (future)

3. **Database**
   - Enable row-level security (Supabase)
   - Use SSL connections
   - Regular backups

4. **API**
   - Validate all inputs
   - Use HTTPS only
   - Add API rate limiting
   - Implement CORS properly

---

## 📚 Additional Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Prisma Docs](https://www.prisma.io/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

## 💡 Next Steps

1. **Add Authentication UI**
   - Login/Register pages ✅ (Done)
   - Password reset
   - Profile management

2. **Enhanced Features**
   - File upload (Vercel Blob/Supabase Storage)
   - Excel-like data grid
   - Advanced filtering
   - Team collaboration

3. **Integrations**
   - Microsoft Graph (Outlook)
   - Telegram Bot
   - Email notifications
   - Slack notifications

4. **Analytics**
   - Project completion dashboard
   - Burndown charts
   - Team performance metrics

---

**Built with ❤️ for IT operations and project management**
