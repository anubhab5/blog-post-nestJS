import { Body, Controller, Post } from "@nestjs/common";
import { CreateTagsDto } from "./dtos/create-tag.dto";
import { TagsService } from "./providers/tags";

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
}
