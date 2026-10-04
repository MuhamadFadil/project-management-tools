import { NextResponse } from 'next/server';
import { IssueService } from '@/services/issue.service';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const issue = await IssueService.getIssueById(params.id);
    if (!issue) return NextResponse.json({ error: 'Issue not found' }, { status: 404 });
    return NextResponse.json(issue);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch issue' }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();
    const issue = await IssueService.updateIssue(params.id, body);
    return NextResponse.json(issue);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to update issue' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    await IssueService.deleteIssue(params.id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to delete issue' }, { status: 500 });
  }
}
