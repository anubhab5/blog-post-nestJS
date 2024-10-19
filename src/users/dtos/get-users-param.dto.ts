import { ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsInt, IsOptional } from "class-validator";

export class GetUsersParamDto {
  @ApiPropertyOptional({
    description: "get user with specific User id",
    example: 1,
  })
  @IsInt()
  @IsOptional()
  @Type(() => Number)
  id?: number;
}
