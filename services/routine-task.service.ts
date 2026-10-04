import { prisma } from '@/lib/prisma';
import { RoutineType, TaskStatus, Priority } from '@prisma/client';

export class RoutineTaskService {
  static async getAllRoutineTasks(userId: string) {
    return prisma.routineTask.findMany({
      where: { createdById: userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  static async getRoutineTaskById(id: string) {
    return prisma.routineTask.findUnique({ where: { id } });
  }

  static async createRoutineTask(
    userId: string,
    data: {
      type: RoutineType;
      name: string;
      description?: string;
      pic?: string;
      priority?: Priority;
      dueDate?: Date;
      source?: string;
      outlookEmailId?: string;
    }
  ) {
    return prisma.routineTask.create({
      data: {
        ...data,
        createdById: userId,
        status: TaskStatus.NOT_YET,
      },
    });
  }

  static async updateRoutineTask(id: string, data: Partial<typeof data>) {
    return prisma.routineTask.update({
      where: { id },
      data,
    });
  }

  static async deleteRoutineTask(id: string) {
    return prisma.routineTask.delete({ where: { id } });
  }

  static async getRoutineTasksByType(userId: string, type: RoutineType) {
    return prisma.routineTask.findMany({
      where: { createdById: userId, type },
      orderBy: { createdAt: 'desc' },
    });
  }

  static async syncOutlookEmails() {
    // Placeholder untuk integrasi Microsoft Graph
    // Akan di-implementasikan di endpoint /api/microsoft/sync
    return null;
  }
}
