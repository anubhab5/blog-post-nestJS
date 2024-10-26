import { Inject, Injectable } from "@nestjs/common";
import { In, Repository } from "typeorm";
import { Tag } from "../entity/tag.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateTagsDto } from "../dtos/create-tag.dto";

@Injectable()
export class TagsService {
  /** */
  constructor(
    @InjectRepository(Tag)
    private readonly tagsRepository: Repository<Tag>,
  ) {
    /** */
  }

  /**
   *
   * @param tags
   * @returns
   */
  public async createTags(tags: CreateTagsDto) {
    const createdTag = this.tagsRepository.create(tags);
    return await this.tagsRepository.save(createdTag);
  }

  /**
   *
   * @param tags
   * @returns
   */
  public async findMultipleTags(tags: number[]) {
    return await this.tagsRepository.find({
      where: {
        id: In(tags),
      },
    });
  }
}
