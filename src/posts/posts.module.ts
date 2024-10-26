import { Module } from "@nestjs/common";
import { PostsController } from "./posts.controller";
import { PostsService } from "./providers/posts.service";
import { UsersModule } from "src/users/users.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Post } from "./entity/post.entity";
import { MetaOptions } from "src/meta-options/entity/meta-options.entity";
import { MetaOptionsModule } from "src/meta-options/meta-options.module";
import { TagsModule } from "src/tags/tags.module";

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [
    TagsModule,
    UsersModule,
    MetaOptionsModule,
    TypeOrmModule.forFeature([Post, MetaOptions]),
  ],
})
export class PostsModule {}
