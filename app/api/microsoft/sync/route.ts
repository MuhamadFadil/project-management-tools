import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const messages = [
      {
        id: '1',
        subject: 'Request VM for QA environment',
        bodyPreview: 'Need a new VM for QA process and testing',
        flag: { status: 'flagged' },
      },
      {
        id: '2',
        subject: 'PR for software license',
        bodyPreview: 'Approve purchase request for annual software license',
        flag: { status: 'complete' },
      },
    ];

    return NextResponse.json({
      flagged: messages.filter((m) => m.flag?.status === 'flagged'),
      vmRequests: messages.filter((m) => /vm|virtual machine/i.test(`${m.subject} ${m.bodyPreview}`)),
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to sync Outlook data' }, { status: 500 });
  }
}
