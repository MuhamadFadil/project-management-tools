import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import axios from 'axios';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function GET() {
  try {
    // Fetch tasks with due date today
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const dueTodayTasks = await prisma.task.findMany({
      where: {
        dueDate: {
          gte: today,
          lt: tomorrow,
        },
        status: { not: 'COMPLETE' },
      },
    });

    // Fetch overdue tasks
    const overdueTasks = await prisma.task.findMany({
      where: {
        dueDate: { lt: today },
        status: { not: 'COMPLETE' },
      },
    });

    // Build message
    let message = '<b>📋 Daily Task Reminder</b>\n\n';

    if (dueTodayTasks.length > 0) {
      message += `<b>📌 Due Today (${dueTodayTasks.length}):</b>\n`;
      dueTodayTasks.forEach((task) => {
        message += `• ${task.name} (${task.progress}%)\n`;
      });
      message += '\n';
    }

    if (overdueTasks.length > 0) {
      message += `<b>⚠️ Overdue (${overdueTasks.length}):</b>\n`;
      overdueTasks.forEach((task) => {
        message += `• ${task.name} (${task.progress}%)\n`;
      });
      message += '\n';
    }

    message += `<i>Generated at ${new Date().toLocaleString()}</i>`;

    // Send via Telegram
    if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
      const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
      await axios.post(url, {
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      });
    }

    return NextResponse.json({
      success: true,
      message,
      dueTodayCount: dueTodayTasks.length,
      overdueCount: overdueTasks.length,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Cron failed' }, { status: 500 });
  }
}
