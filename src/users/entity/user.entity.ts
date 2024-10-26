import { Post } from "src/posts/entity/post.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

/**
 * Entity class for User
 */
@Entity()
export class User {
  /**
   *
   */
  @PrimaryGeneratedColumn()
  id: number;
  /**
   *
   */
  @Column({
    type: "varchar",
    length: 96,
    nullable: false,
  })
  firstName: string;
  /**
   *
   */
  @Column({
    type: "varchar",
    length: 96,
    nullable: true,
  })
  lastName: string;
  /**
   *
   */
  @Column({
    type: "varchar",
    length: 96,
    nullable: false,
    unique: true,
  })
  email: string;
  /**
   *
   */
  @Column({
    type: "varchar",
    length: 96,
    nullable: false,
  })
  password: string;

  @OneToMany(() => Post, (post) => post.author)
  posts: Post[];
}
