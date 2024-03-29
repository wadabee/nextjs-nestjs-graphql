import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { ArticleService } from './article.service';
import {
  Article,
  ArticleCreateInput,
  Comment,
  CommentCreateInput,
} from './model/article.model';

@Resolver((of) => Article)
export class ArticleResolver {
  constructor(private articleService: ArticleService) {}

  @Query((returns) => [Article])
  async articles() {
    return this.articleService.getArticles();
  }

  @Query((returns) => Article)
  async article(@Args('id', { type: () => String }) id: string) {
    return this.articleService.getArticle({ id });
  }

  @ResolveField()
  async comments(@Parent() article: Article) {
    const { id } = article;
    return this.articleService.getCommentsByArticleId(id);
  }

  @Mutation((returns) => Article)
  async createArticle(@Args('data') data: ArticleCreateInput) {
    return this.articleService.createArticle({
      ...data,
    });
  }

  @Mutation((returns) => Comment)
  async createCommnet(@Args('data') data: CommentCreateInput) {
    return this.articleService.addComment({
      ...data,
    });
  }
}
