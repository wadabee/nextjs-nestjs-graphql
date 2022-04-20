import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  id: string;
  @Field()
  name: string;
}

@InputType()
export class UserCreateInput {
  @Field()
  id: string;
  @Field()
  name: string;
}
