import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Article {
  @Field((type) => ID)
  id: string;
  @Field()
  title: string;
  @Field()
  body: string;
  @Field((type) => Comment)
  comments?: Comment[];
}

@ObjectType()
export class Comment {
  @Field((type) => ID)
  id: string;
  @Field()
  body: string;
}

@InputType()
export class ArticleCreateInput {
  @Field()
  title: string;
  @Field()
  body: string;
}
