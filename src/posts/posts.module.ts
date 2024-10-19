import { Module } from "@nestjs/common";
import { PostsController } from "./posts.controller";
import { PostsService } from "./providers/posts.service";
import { UsersModule } from "src/users/users.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Post } from "./entity/post.entity";
import { MetaOptions } from "src/meta-options/entity/meta-options.entity";

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [UsersModule, TypeOrmModule.forFeature([Post, MetaOptions])],
})
export class PostsModule {}