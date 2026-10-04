import { NextResponse } from 'next/server';
import { RoutineTaskService } from '@/services/routine-task.service';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const task = await RoutineTaskService.getRoutineTaskById(params.id);
    if (!task) return NextResponse.json({ error: 'Routine task not found' }, { status: 404 });
    return NextResponse.json(task);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch routine task' }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();
    const task = await RoutineTaskService.updateRoutineTask(params.id, body);
    return NextResponse.json(task);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to update routine task' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    await RoutineTaskService.deleteRoutineTask(params.id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to delete routine task' }, { status: 500 });
  }
}
