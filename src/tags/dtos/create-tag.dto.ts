import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
  MinLength,
} from "class-validator";

/**
 * Tags dto class
 */
export class Tags {
  /**
   * Name of the tag
   */
  @ApiProperty()
  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  @MaxLength(256)
  name: string;

  /**
   *
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
   *
   */
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  /**
   *
   */
  @ApiPropertyOptional()
  @IsOptional()
  @IsJSON()
  schema?: string;
  /**
   *
   */
  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl()
  @MaxLength(1024)
  featuredImageUrl?: string;
}
