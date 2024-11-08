import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from "@nestjs/common";
import { CreateTagsDto } from "./dtos/create-tag.dto";
import { TagsService } from "./providers/tags";

/**
 *
 */
@Controller("tags")
export class TagsController {
  /** */
  constructor(private tagService: TagsService) {}

  /**
   *
   */
  @Post()
  public createTags(@Body() createTagsDto: CreateTagsDto) {
    return this.tagService.createTags(createTagsDto);
  }

  /**
   *
   */
  @Delete()
  public deleteTag(@Query("id", ParseIntPipe) tagId: number) {
    return this.tagService.delete(tagId);
  }

  /**
   *
   * @param tagId
   * @returns
   */
  @Delete("soft-delete")
  public softDeleteTag(@Query("id", ParseIntPipe) tagId: number) {
    return this.tagService.softDelete(tagId);
  }
}
