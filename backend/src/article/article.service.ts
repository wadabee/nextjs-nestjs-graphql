import { Injectable } from '@nestjs/common';
import { Article, Comment, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CommentCreateInput } from './model/article.model';

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

  getCommentsByArticleId(articleId: string): Promise<Comment[] | null> {
    return this.prisma.comment.findMany({
      where: {
        articleId,
      },
    });
  }

  createArticle(data: Prisma.ArticleCreateInput): Promise<Article> {
    return this.prisma.article.create({
      data,
    });
  }

  addComment(data: CommentCreateInput): Promise<Comment> {
    return this.prisma.comment.create({
      data,
    });
  }
}
