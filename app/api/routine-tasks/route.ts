import { NextResponse, NextRequest } from 'next/server';
import { RoutineTaskService } from '@/services/routine-task.service';
import { AuthService } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const token = request.headers.get('authorization')?.split(' ')[1];
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const payload = await AuthService.verifyToken(token);
    const tasks = await RoutineTaskService.getAllRoutineTasks(payload.userId);

    return NextResponse.json(tasks);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch routine tasks' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const token = request.headers.get('authorization')?.split(' ')[1];
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const payload = await AuthService.verifyToken(token);
    const body = await request.json();
    const task = await RoutineTaskService.createRoutineTask(payload.userId, body);

    return NextResponse.json(task, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to create routine task' }, { status: 500 });
  }
}
