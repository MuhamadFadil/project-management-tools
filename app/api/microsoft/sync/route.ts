import { NextResponse } from 'next/server';
import { RoutineTaskService } from '@/services/routine-task.service';
import { RoutineType, TaskStatus } from '@prisma/client';

const DEMO_USER_ID = 'demo-user-001';

// Placeholder untuk integrasi Microsoft Graph
// Ganti dengan implementasi nyata sesuai Azure App Registration

export async function GET() {
  try {
    // Mock data untuk testing
    const prRequests = [
      {
        name: 'Purchase software license',
        description: 'Annual license renewal for development tools',
        source: 'outlook',
        outlookEmailId: 'email-123',
      },
    ];

    const vmRequests = [
      {
        name: 'VM for QA environment',
        description: 'New virtual machine for testing setup',
        source: 'outlook',
        outlookEmailId: 'email-456',
      },
    ];

    // Create routine tasks from detected emails
    for (const pr of prRequests) {
      await RoutineTaskService.createRoutineTask(DEMO_USER_ID, {
        type: RoutineType.PR,
        ...pr,
      });
    }

    for (const vm of vmRequests) {
      await RoutineTaskService.createRoutineTask(DEMO_USER_ID, {
        type: RoutineType.VM,
        ...vm,
      });
    }

    return NextResponse.json({
      success: true,
      prRequests: prRequests.length,
      vmRequests: vmRequests.length,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Sync failed' }, { status: 500 });
  }
}
