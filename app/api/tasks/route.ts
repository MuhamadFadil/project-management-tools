import { NextResponse } from 'next/server';
import { TaskService } from '@/services/task.service';

const DEMO_USER_ID = 'demo-user-001';

export async function GET() {
  try {
    // Get tasks from a demo project
    const tasks = await TaskService.getAllTasks('demo-project-1');
    return NextResponse.json(tasks);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch tasks' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const task = await TaskService.createTask(DEMO_USER_ID, body);
    return NextResponse.json(task, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to create task' }, { status: 500 });
  }
}
