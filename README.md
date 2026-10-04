# Personal Project Management System

A modern, production-ready project management application for IT workflows. Built with Next.js, Tailwind CSS, PostgreSQL, and ready to deploy on Vercel.

## 🎯 Features

### Dashboard
- **KPI Monitoring**: Task overview with pie and bar charts
- **Quick Stats**: Active projects, open tasks, completed percentage
- **Alerts**: Deadline notifications and task overdue status

### Project Management
- **Project Portfolio**: List and manage all projects
- **Project Detail**: Full project timeline with Gantt chart visualization
- **Task Hierarchy**: Projects → Items → Sub-Items → Tasks
- **Progress Tracking**: Real-time progress percentage

### Routine Tasks
- **PR Management**: Purchase Request automation from Outlook
- **VM Requests**: Virtual Machine request tracking
- **Ad-hoc Tasks**: Quick task creation with priority and due date
- **Outlook Integration**: Auto-sync emails with flagged status

### Issue & Troubleshooting
- **Issue Tracking**: Create and manage technical issues
- **Solution Documentation**: Add solutions and mark as resolved
- **File Attachments**: Upload logs, screenshots, configurations
- **Severity Levels**: Critical, High, Medium, Low classification

### Notifications
- **Daily Reminders**: Telegram bot sends task summary at 7 AM
- **Deadline Alerts**: Notifications for due today and overdue tasks
- **Task Updates**: Real-time notifications on task status changes

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS, Recharts
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: (Setup ready for Clerk or NextAuth.js)
- **Storage**: Vercel Blob or Supabase Storage
- **Notifications**: Telegram Bot API
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js 18+
- PostgreSQL database (Supabase or Vercel Postgres recommended)
- Telegram Bot Token (for reminders)
- Microsoft Graph API credentials (optional, for Outlook sync)

## 🚀 Quick Start

### 1. Clone Repository
```bash
git clone https://github.com/MuhamadFadil/project-management-tools.git
cd project-management-tools
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:
```env
# Database
DATABASE_URL="postgresql://user:password@host:5432/dbname"

# Microsoft Graph (Optional)
MICROSOFT_TENANT_ID="your-tenant-id"
MICROSOFT_CLIENT_ID="your-client-id"
MICROSOFT_CLIENT_SECRET="your-client-secret"

# Telegram Bot
TELEGRAM_BOT_TOKEN="your-bot-token"
TELEGRAM_CHAT_ID="your-chat-id"

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 4. Setup Database
```bash
# Generate Prisma client
npm run prisma:generate

# Create database tables
npm run prisma:migrate initial
```

### 5. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 API Endpoints

### Projects
- `GET /api/projects` - List all projects
- `POST /api/projects` - Create project
- `GET /api/projects/[id]` - Get project detail
- `PUT /api/projects/[id]` - Update project
- `DELETE /api/projects/[id]` - Delete project

### Tasks
- `GET /api/tasks` - List tasks
- `POST /api/tasks` - Create task
- `GET /api/tasks/[id]` - Get task detail
- `PUT /api/tasks/[id]` - Update task
- `DELETE /api/tasks/[id]` - Delete task

### Issues
- `GET /api/issues` - List issues
- `POST /api/issues` - Create issue
- `GET /api/issues/[id]` - Get issue detail
- `PUT /api/issues/[id]` - Update issue
- `DELETE /api/issues/[id]` - Delete issue

### Routine Tasks
- `GET /api/routine-tasks` - List routine tasks
- `POST /api/routine-tasks` - Create routine task
- `GET /api/routine-tasks/[id]` - Get routine task detail
- `PUT /api/routine-tasks/[id]` - Update routine task
- `DELETE /api/routine-tasks/[id]` - Delete routine task

### Notifications
- `GET /api/cron/daily-reminder` - Daily task reminder (Vercel Cron)
- `POST /api/notifications/telegram` - Send Telegram message
- `GET /api/microsoft/sync` - Sync Outlook emails

## 🗄️ Database Schema

```prisma
User → Project → Item → SubItem → Task
       ↓
     Notification

RoutineTask (PR, VM, Ad-hoc)
Issue (Troubleshooting)
```

## 🚢 Deployment to Vercel

### 1. Push to GitHub
```bash
git add .
git commit -m "Initial deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/project-management-tools.git
git push -u origin main
```

### 2. Deploy to Vercel

1. Visit [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Select Next.js framework
5. Add Environment Variables:
   - `DATABASE_URL`
   - `MICROSOFT_TENANT_ID`
   - `MICROSOFT_CLIENT_ID`
   - `MICROSOFT_CLIENT_SECRET`
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
   - `NEXT_PUBLIC_APP_URL` (your Vercel domain)
6. Click Deploy

### 3. Setup Cron Jobs

In Vercel Dashboard → Settings → Cron Jobs:

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

Or edit `vercel.json`:

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

## 🔧 Database Setup

### Option 1: Supabase (Recommended)

1. Create account at [supabase.com](https://supabase.com)
2. Create new project
3. Copy connection string to `.env.local`

### Option 2: Vercel Postgres

1. Link project to Vercel
2. Create Postgres database in Vercel dashboard
3. Copy connection string to `.env.local`

### Option 3: Local PostgreSQL

```bash
# Install PostgreSQL
# Start PostgreSQL service
# Create database
createdb project_management

# Update .env.local
DATABASE_URL="postgresql://localhost:5432/project_management"
```

## 🔔 Telegram Bot Setup

1. Chat with [@BotFather](https://t.me/botfather) on Telegram
2. Create new bot: `/newbot`
3. Copy bot token to `TELEGRAM_BOT_TOKEN`
4. Get your chat ID: Send message to bot, visit `https://api.telegram.org/bot<TOKEN>/getUpdates`
5. Copy your chat ID to `TELEGRAM_CHAT_ID`

## 📊 Prisma Commands

```bash
# Generate Prisma client
npm run prisma:generate

# Create migration
npm run prisma:migrate initial

# Open Prisma Studio (GUI for database)
npm run prisma:studio

# View database
npm run prisma:studio
```

## 🔐 Security

- Replace `DEMO_USER_ID` with actual authentication
- Implement NextAuth.js or Clerk for user authentication
- Add API route protection with middleware
- Enable CORS if needed
- Use environment variables for sensitive data

## 📚 Project Structure

```
app/
├── (dashboard)/          # Protected routes
│   ├── dashboard/
│   ├── projects/
│   ├── routine-tasks/
│   └── issues/
├── api/                  # API endpoints
│   ├── projects/
│   ├── tasks/
│   ├── issues/
│   ├── routine-tasks/
│   ├── cron/
│   ├── microsoft/
│   └── notifications/
└── layout.tsx

components/
├── dashboard/            # Dashboard components
├── projects/             # Project components
├── routine-tasks/        # Routine task components
├── issues/               # Issue components
└── layout/               # Navigation components

services/                 # Business logic
├── project.service.ts
├── task.service.ts
├── issue.service.ts
└── routine-task.service.ts

prisma/
└── schema.prisma         # Database schema
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests.

## 📄 License

MIT License - feel free to use this project for personal and commercial purposes.

## 📞 Support

For issues and questions, please create an issue on GitHub.

---

**Built with ❤️ for IT operations and project management**
