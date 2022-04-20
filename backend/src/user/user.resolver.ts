import { Args, Query, Resolver } from '@nestjs/graphql';
import { User } from './model/user.model';
import { UserService } from './user.service';

@Resolver((of) => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query((returns) => User)
  async user(@Args('id', { type: () => String }) id: string) {
    return this.userService.getUser({ id });
  }
}
