import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Query,
} from "@nestjs/common";
import { PostsService } from "./providers/posts.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Body, Post } from "@nestjs/common";
import { CreatePostsDto } from "./dtos/create-posts.dto";
import { PatchPostDto } from "./dtos/patch-post.dto";

/**
 * Posts controller
 */
@ApiTags("Posts")
@Controller("posts")
export class PostsController {
  /**
   * constructor
   * @param postsService
   */
  constructor(private readonly postsService: PostsService) {
    /** constructor */
  }

  /**
   * getPosts
   * @returns
   */
  @ApiOperation({
    summary: "Get list of blogs for an user",
  })
  @ApiResponse({
    status: 201,
    description: "blog posts returned successfully",
  })
  @Get("/:userId?")
  public getPosts(@Param("userId") userId: number) {
    return this.postsService.findAll(userId);
  }

  /**
   * Method to create a post
   * @param createPostsDto
   * @returns
   */
  @ApiOperation({
    summary: "Create a new blog post",
  })
  @ApiResponse({
    status: 201,
    description: "Post created successfully",
  })
  @Post()
  public createPost(@Body() createPostsDto: CreatePostsDto) {
    return this.postsService.create(createPostsDto);
  }

  /**
   * update posts
   * @param patchPostDto
   */
  @ApiOperation({
    summary: "Update an existing blog post",
  })
  @ApiResponse({
    status: 201,
    description: "update post successfully",
  })
  @Patch()
  public updatePost(@Body() patchPostDto: PatchPostDto) {
    return this.postsService.update(patchPostDto);
  }

  /**
   * Method to delete a Post
   * @param postId
   * @returns
   */
  @ApiOperation({
    summary: "Delete an existing blog post",
  })
  @ApiResponse({
    status: 201,
    description: "delete post successfully",
  })
  @Delete()
  public deletePost(@Query("id", ParseIntPipe) postId: number) {
    return this.postsService.delete(postId);
  }
}
