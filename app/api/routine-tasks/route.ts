import { NextResponse } from 'next/server';
import { RoutineTaskService } from '@/services/routine-task.service';

const DEMO_USER_ID = 'demo-user-001';

export async function GET() {
  try {
    const tasks = await RoutineTaskService.getAllRoutineTasks(DEMO_USER_ID);
    return NextResponse.json(tasks);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch routine tasks' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const task = await RoutineTaskService.createRoutineTask(DEMO_USER_ID, body);
    return NextResponse.json(task, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to create routine task' }, { status: 500 });
  }
}
