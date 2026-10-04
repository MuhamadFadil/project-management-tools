import { NextResponse } from 'next/server';
import { IssueService } from '@/services/issue.service';

const DEMO_USER_ID = 'demo-user-001';

export async function GET() {
  try {
    const issues = await IssueService.getAllIssues(DEMO_USER_ID);
    return NextResponse.json(issues);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch issues' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const issue = await IssueService.createIssue(DEMO_USER_ID, body);
    return NextResponse.json(issue, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to create issue' }, { status: 500 });
  }
}
