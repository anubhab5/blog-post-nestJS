import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { ApiTags } from "@nestjs/swagger";

/**
 * Main controller
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Get Api for the app controller
   * @returns
   */
  @ApiTags("Main")
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
