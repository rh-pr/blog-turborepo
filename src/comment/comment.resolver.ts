import { Args, Int, Resolver, Query, Mutation, Context } from '@nestjs/graphql';
import { CommentService } from './comment.service';
import { CommentEntity } from './entities/comment.entity';
import { CreateCommentInput } from './dto/create-comment.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth/jwt-auth.guard';

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

  @UseGuards(JwtAuthGuard)
  @Mutation(() => CommentEntity)
  createComment(
    @Context() context: { req: { user: { id: number } } },
    @Args('createCommentInput') createCommentInput: CreateCommentInput,
  ) {
    const authorId = context.req.user.id;
    return this.commentService.create(createCommentInput, authorId);
  }
}
