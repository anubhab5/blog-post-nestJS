import { Body, Injectable, Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { MetaOptions } from "../entity/meta-options.entity";
import { CreatePostsMetaOptionsDto } from "../dtos/create-posts-meta-option.dto";

@Injectable()
export class MetaOptionsService {
  /**
   * Constructor
   */
  constructor(
    /** Repository Injection */
    @InjectRepository(MetaOptions)
    private readonly metaOptionsRepository: Repository<MetaOptions>,
  ) {}

  /**
   * Create Meta Option
   * @param createMetaOptionsDto
   */
  public async create(createMetaOptionsDto: CreatePostsMetaOptionsDto) {
    const metaOptions = this.metaOptionsRepository.create(createMetaOptionsDto);
    return await this.metaOptionsRepository.save(metaOptions);
  }
}
