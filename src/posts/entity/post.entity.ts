import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PostTypeEnum, StatusEnum } from "../dtos/create-posts.dto";
import { CreatePostsMetaOptionsDto } from "../../meta-options/dtos/create-posts-meta-option.dto";
import { MetaOptions } from "src/meta-options/entity/meta-options.entity";

@Entity()
export class Post {
  /**
   *
   */
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
    length: 512,
    nullable: false,
  })
  title: string;

  /**
   * Post Type
   */
  @Column({
    type: "enum",
    enum: PostTypeEnum,
    nullable: false,
    default: PostTypeEnum.POST,
  })
  postType: PostTypeEnum;

  /**
   *
   */
  @Column({
    type: "varchar",
    length: 256,
    nullable: false,
    unique: true,
  })
  slug: string;

  /**
   *
   */
  @Column({
    type: "enum",
    enum: StatusEnum,
    default: StatusEnum.DRAFT,
    nullable: false,
  })
  status: StatusEnum;

  /**
   *
   */
  @Column({
    type: "text",
    nullable: true,
  })
  content?: string;

  /**
   *
   */
  @Column({
    type: "text",
    nullable: true,
  })
  schema?: string;

  /**
   *
   */
  @Column({
    type: "varchar",
    length: 1024,
    nullable: true,
  })
  featuredImageUrl?: string;

  /**
   *
   */
  @Column({
    type: "timestamp",
    nullable: true,
  })
  publishOn?: Date;

  /**
   *
   */
  tags?: string[];

  /**
   *
   */
  @OneToOne(() => MetaOptions)
  @JoinColumn()
  metaOptions?: MetaOptions;
}
