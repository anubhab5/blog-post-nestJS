import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsIn, IsInt, IsNotEmpty } from "class-validator";
import { CreatePostsDto } from "./create-posts.dto";

export class PatchPostDto extends PartialType(CreatePostsDto) {
  @ApiProperty({
    description: "The title of the post",
  })
  @IsNotEmpty()
  @IsInt()
  id: number;
}
