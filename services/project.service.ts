import { prisma } from '@/lib/prisma';
import { ProjectStatus, TaskStatus } from '@prisma/client';

export class ProjectService {
  static async getAllProjects(userId: string) {
    return prisma.project.findMany({
      where: { createdById: userId },
      include: { _count: { select: { tasks: true } } },
      orderBy: { createdAt: 'desc' },
    });
  }

  static async getProjectById(id: string) {
    return prisma.project.findUnique({
      where: { id },
      include: {
        items: { include: { subItems: true } },
        tasks: true,
      },
    });
  }

  static async createProject(
    userId: string,
    data: { name: string; description?: string; startDate?: Date; endDate?: Date }
  ) {
    return prisma.project.create({
      data: {
        ...data,
        createdById: userId,
        status: ProjectStatus.ACTIVE,
      },
    });
  }

  static async updateProject(id: string, data: Partial<typeof data>) {
    return prisma.project.update({
      where: { id },
      data,
    });
  }

  static async deleteProject(id: string) {
    return prisma.project.delete({ where: { id } });
  }

  static async calculateProjectProgress(projectId: string) {
    const tasks = await prisma.task.findMany({
      where: { projectId },
    });

    if (tasks.length === 0) return 0;

    const totalProgress = tasks.reduce((sum, task) => sum + task.progress, 0);
    return Math.round(totalProgress / tasks.length);
  }
}
