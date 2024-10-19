import { Injectable } from "@nestjs/common";
import { UsersService } from "src/users/providers/users.service";
import { Post } from "../entity/post.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreatePostsDto } from "../dtos/create-posts.dto";
import { MetaOptions } from "src/meta-options/entity/meta-options.entity";

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
  ) {
    /** constructor */
  }

  public findAll(userId: number) {
    const user = this.usersService.findById(userId);

    return [
      {
        id: 1,
        title: "Post 1",
        content: "Content 1",
        user,
      },
      {
        id: 2,
        title: "Post 2",
        content: "Content 2",
        user,
      },
    ];
  }

  /**
   * Method to create a Post
   * @param createPostDto
   * @returns
   */
  public async create(createPostDto: CreatePostsDto) {
    // create metaOptions
    let metaOptions = createPostDto.metaOptions
      ? this.metaOptionsRepository.create(createPostDto.metaOptions)
      : null;
    if (metaOptions) {
      await this.metaOptionsRepository.save(metaOptions);
    }
    // create post
    let post = this.postRepository.create({ ...createPostDto });

    if (metaOptions) {
      // add metaOptions to the post
      post.metaOptions = metaOptions;
    }

    console.log(post);
    return await this.postRepository.save(post);
  }
}
