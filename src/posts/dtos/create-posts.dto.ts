import {
  isArray,
  IsArray,
  IsEnum,
  IsInt,
  IsISO8601,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  ValidateNested,
} from "class-validator";
import { CreatePostsMetaOptionsDto } from "../../meta-options/dtos/create-posts-meta-option.dto";
import { Type } from "class-transformer";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

/**
 *
 */
export enum PostTypeEnum {
  POST = "post",
  PAGE = "page",
  STORY = "story",
  SERIES = "series",
}

/**
 *
 */
export enum StatusEnum {
  DRAFT = "draft",
  SCHEDULE = "schedule",
  REVIEW = "review",
  PUBLISHED = "published",
}

export class CreatePostsDto {
  /**
   * The title of the post
   */
  @ApiProperty({
    description: "The title of the post",
    example: "My Post",
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(512)
  title: string;

  /**
   * The type of the post
   */
  @ApiProperty({
    description: "The type of the post",
    example: PostTypeEnum.POST,
    enum: PostTypeEnum,
  })
  @IsEnum(PostTypeEnum)
  @IsNotEmpty()
  postType: PostTypeEnum;

  /**
   * The slug of the post
   */
  @ApiProperty({
    description: "The slug of the post",
    example: "my-url",
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(256)
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'A slug should be all small letters and uses only "-" and without spaces. For example "my-url"',
  })
  slug: string;

  /**
   * The status of the post
   */
  @ApiProperty({
    description: "The status of the post",
    example: StatusEnum.DRAFT,
    enum: StatusEnum,
  })
  @IsEnum(StatusEnum)
  @IsNotEmpty()
  status: StatusEnum;

  /**
   * The content of the post
   */
  @ApiPropertyOptional({
    description: "The content of the post",
    example: "This is my post content",
  })
  @IsString()
  @IsOptional()
  content?: string;

  /**
   * The schema of the post in serialized JSON
   */
  @ApiPropertyOptional({
    description: "Serialized JSON object.",
    example:
      '{\r\n    "@context": "https://schema.org",\r\n    "@type": "Person"\r\n  }',
  })
  @IsJSON()
  @IsOptional()
  schema?: string;

  /**
   * The featured image of the post
   */
  @ApiPropertyOptional({
    description: "The featured image of the post",
    example: "https://example.com/image.png",
  })
  @IsString()
  @IsOptional()
  @MaxLength(1024)
  featuredImageUrl?: string;

  /**
   * The publish date of the post
   */
  @ApiPropertyOptional({
    description: "The publish date of the post",
    example: "2020-01-01T00:00:00.000Z",
  })
  @IsISO8601()
  @IsOptional()
  publishOn?: Date;

  /**
   * The tags of the post list
   */
  @ApiPropertyOptional({
    description: "The tags of the post",
    example: ["tag1", "tag2"],
  })
  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  @MinLength(3, { each: true })
  tags?: string[];

  /**
   * The meta options of the post key- value
   */
  @ApiPropertyOptional({
    type: "object",
    required: false,
    items: {
      type: "object",
      properties: {
        metaValue: {
          type: "json",
          example: '{"sideBarEnabled": true}',
          description: "The metaValue is a JSON string",
        },
      },
    },
    description: "The meta options of the post",
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreatePostsMetaOptionsDto)
  metaOptions?: CreatePostsMetaOptionsDto | null;

  /**
   * The author of the post
   */
  @ApiProperty({
    description: "The author of the post",
    example: 1,
    type: "integer",
    required: true,
  })
  @IsInt()
  @IsNotEmpty()
  authorId: number;
}
