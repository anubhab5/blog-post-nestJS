import { Post } from "src/posts/entity/post.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

/**
 *
 */
@Entity()
export class MetaOptions {
  /**
   *
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   *
   */
  @Column({
    type: "json",
    nullable: false,
  })
  metaValue: string;

  /**
   *
   */
  @CreateDateColumn()
  createDate: Date;

  /**
   *
   */
  @UpdateDateColumn()
  updateDate: Date;

  /**
   * Define the inverse relationship with Post
   * This is a Bi-Directional One To One Relationship
   */
  @OneToOne(() => Post, (post) => post.metaOptions, {
    onDelete: "CASCADE",
  })
  @JoinColumn()
  post: Post;
}
