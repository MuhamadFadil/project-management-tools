import { NextResponse } from 'next/server';
import { ProjectService } from '@/services/project.service';

const DEMO_USER_ID = 'demo-user-001'; // Replace with auth in production

export async function GET() {
  try {
    const projects = await ProjectService.getAllProjects(DEMO_USER_ID);
    return NextResponse.json(projects);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const project = await ProjectService.createProject(DEMO_USER_ID, body);
    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
  }
}
