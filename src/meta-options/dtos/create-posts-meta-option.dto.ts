import { IsJSON, IsNotEmpty } from "class-validator";

/**
 *
 */
export class CreatePostsMetaOptionsDto {
  /**
   *
   */
  @IsNotEmpty()
  @IsJSON()
  metaValue: string;
}
