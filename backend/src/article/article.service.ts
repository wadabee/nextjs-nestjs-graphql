import { Injectable } from '@nestjs/common';
import { Article, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticleService {
  constructor(private prisma: PrismaService) {}

  getArticles(): Promise<Article[]> {
    return this.prisma.article.findMany();
  }

  getArticle(
    uniqueInput: Prisma.ArticleWhereUniqueInput,
  ): Promise<Article | null> {
    return this.prisma.article.findUnique({ where: uniqueInput });
  }

  createArticle(data: Prisma.ArticleCreateInput): Promise<Article> {
    return this.prisma.article.create({
      data,
    });
  }
}
