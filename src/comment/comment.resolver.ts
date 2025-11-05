import { Args, Int, Resolver, Query } from '@nestjs/graphql';
import { CommentService } from './comment.service';
import { CommentEntity } from './entities/comment.entity';

@Resolver(() => CommentEntity)
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}

  @Query(() => [CommentEntity])
  getPostComments(
    @Args('postId', { type: () => Int }) postId: number,
    @Args('skip', { nullable: true }) skip?: number,
    @Args('take', { nullable: true }) take?: number,
  ) {
    return this.commentService.findOneByPostId({ postId, take, skip });
  }

  @Query(() => Int)
  postCommentsCount(@Args('postId', { type: () => Int }) postId: number) {
    return this.commentService.count(postId);
  }
}
