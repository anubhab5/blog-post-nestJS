import { Body, Controller, Post } from "@nestjs/common";
import { MetaOptionsService } from "./providers/meta-options.service";

/**
 * Meta Option class
 */
@Controller("meta-options")
export class MetaOptionsController {
  /**
   * Constructor
   */
  constructor(private readonly metaOptionsService: MetaOptionsService) {}

  /**
   * Create Meta Option
   * @param createMetaOptionsDto
   * @returns
   */
  @Post()
  async create(@Body() createMetaOptionsDto) {
    return this.metaOptionsService.create(createMetaOptionsDto);
  }
}
