import { Injectable } from "@nestjs/common";
import { UsersService } from "src/users/providers/users.service";
import { Post } from "../entity/post.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreatePostsDto } from "../dtos/create-posts.dto";
import { MetaOptions } from "src/meta-options/entity/meta-options.entity";
import { TagsService } from "src/tags/providers/tags";

@Injectable()
export class PostsService {
  /**
   *
   * @param usersService
   */
  constructor(
    /** Users Service */
    private readonly usersService: UsersService,

    /** Post Repository */
    @InjectRepository(Post)
    private postRepository: Repository<Post>,

    /** Meta Options Repository */
    @InjectRepository(MetaOptions)
    private readonly metaOptionsRepository: Repository<MetaOptions>,

    /** Tags Service */
    private readonly tagsService: TagsService,
  ) {
    /** constructor */
  }

  public async findAll(userId: number) {
    // find all posts
    let posts = await this.postRepository.find({
      relations: {
        metaOptions: true,
        // author: true, // This is an option; same can be achieved if we use eager loading option in entity
      },
    });
    return posts;
  }

  /**
   * Method to create a Post
   * @param createPostDto
   * @returns
   */
  public async create(createPostDto: CreatePostsDto) {
    // Find the author from database
    const author = await this.usersService.findById(createPostDto.authorId);
    // Find the tags
    const tags = await this.tagsService.findMultipleTags(createPostDto.tags);

    let post = this.postRepository.create({ ...createPostDto, author, tags });

    return await this.postRepository.save(post);
  }

  /**
   * Method to delete a Post
   */
  public async delete(postId: number) {
    await this.postRepository.delete(postId);
    return { success: true };
  }
}
