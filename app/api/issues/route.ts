import { NextResponse, NextRequest } from 'next/server';
import { IssueService } from '@/services/issue.service';
import { AuthService } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const token = request.headers.get('authorization')?.split(' ')[1];
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const payload = await AuthService.verifyToken(token);
    const issues = await IssueService.getAllIssues(payload.userId);

    return NextResponse.json(issues);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch issues' }, { status: 500 });
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
    const issue = await IssueService.createIssue(payload.userId, body);

    return NextResponse.json(issue, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to create issue' }, { status: 500 });
  }
}
