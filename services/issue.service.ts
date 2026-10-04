import { prisma } from '@/lib/prisma';
import { IssueStatus, Severity } from '@prisma/client';

export class IssueService {
  static async getAllIssues(userId: string) {
    return prisma.issue.findMany({
      where: { createdById: userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  static async getIssueById(id: string) {
    return prisma.issue.findUnique({
      where: { id },
      include: { createdBy: { select: { name: true, email: true } } },
    });
  }

  static async createIssue(
    userId: string,
    data: {
      name: string;
      description?: string;
      severity?: Severity;
    }
  ) {
    return prisma.issue.create({
      data: {
        ...data,
        createdById: userId,
        status: IssueStatus.OPEN,
      },
    });
  }

  static async updateIssue(id: string, data: Partial<typeof data>) {
    return prisma.issue.update({
      where: { id },
      data,
    });
  }

  static async deleteIssue(id: string) {
    return prisma.issue.delete({ where: { id } });
  }

  static async addSolution(id: string, solution: string) {
    return prisma.issue.update({
      where: { id },
      data: { solution, status: IssueStatus.SOLVED },
    });
  }

  static async addAttachment(id: string, fileUrl: string) {
    const issue = await prisma.issue.findUnique({ where: { id } });
    if (!issue) throw new Error('Issue not found');

    return prisma.issue.update({
      where: { id },
      data: { attachments: [...issue.attachments, fileUrl] },
    });
  }

  static async getOpenIssues() {
    return prisma.issue.findMany({
      where: { status: IssueStatus.OPEN },
      orderBy: { createdAt: 'desc' },
    });
  }
}
