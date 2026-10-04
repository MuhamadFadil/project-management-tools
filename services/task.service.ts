import { prisma } from '@/lib/prisma';
import { TaskStatus, Priority } from '@prisma/client';

export class TaskService {
  static async getAllTasks(projectId: string) {
    return prisma.task.findMany({
      where: { projectId },
      include: { createdBy: { select: { name: true, email: true } } },
      orderBy: { createdAt: 'desc' },
    });
  }

  static async getTaskById(id: string) {
    return prisma.task.findUnique({
      where: { id },
      include: { createdBy: true, project: true },
    });
  }

  static async createTask(
    userId: string,
    data: {
      projectId: string;
      name: string;
      description?: string;
      pic?: string;
      priority?: Priority;
      dueDate?: Date;
      startDate?: Date;
    }
  ) {
    return prisma.task.create({
      data: {
        ...data,
        createdById: userId,
        status: TaskStatus.NOT_YET,
      },
    });
  }

  static async updateTask(id: string, data: Partial<typeof data>) {
    return prisma.task.update({
      where: { id },
      data,
    });
  }

  static async deleteTask(id: string) {
    return prisma.task.delete({ where: { id } });
  }

  static async getTasksByStatus(projectId: string, status: TaskStatus) {
    return prisma.task.findMany({
      where: { projectId, status },
    });
  }

  static async getOverdueTasks(userId: string) {
    const now = new Date();
    return prisma.task.findMany({
      where: {
        createdBy: { id: userId },
        dueDate: { lt: now },
        status: { not: TaskStatus.COMPLETE },
      },
    });
  }
}
