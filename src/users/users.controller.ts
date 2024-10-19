import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Put,
  Param,
  Query,
  Body,
  Headers,
  Ip,
  ParseIntPipe,
  DefaultValuePipe,
  ValidationPipe,
} from "@nestjs/common";
import { CreateUserDto } from "./dtos/create-user.dto";
import { GetUsersParamDto } from "./dtos/get-users-param.dto";
import { PatchUserDto } from "./dtos/patch-user.dto";
import { UsersService } from "./providers/users.service";
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("Users")
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {
    /**constructor */
  }

  /**
   * Get all users
   * @returns
   */
  @Get("/:id?")
  @ApiOperation({
    summary: "Fetches a list of registered users",
  })
  @ApiResponse({
    status: 200,
    description: "Users fetched successfully based on the query parameters",
  })
  @ApiQuery({
    name: "limit",
    type: "number",
    required: false,
    description: "The number of entries returned",
    example: 10,
  })
  @ApiQuery({
    name: "page",
    type: "number",
    required: false,
    description: "The position of page number that you want the API to return",
    example: 1,
  })
  public getUsers(
    @Param() getUserParamDto: GetUsersParamDto,
    @Query("limit", new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query("page", new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log(getUserParamDto);
    return this.usersService.findAll(getUserParamDto, limit, page);
  }

  /**
   * Create a new user
   * @returns
   */
  @Post()
  public createUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.usersService.createUser(createUserDto);
  }

  /**
   * Update a user
   * @returns
   */
  @Put()
  public updateUser() {
    return "You sent a Put request to /Users";
  }

  /**
   * Update a user
   * @returns
   */
  @Patch()
  public updateUserPartially(@Body() patchUserDto: PatchUserDto) {
    console.log(patchUserDto);
    return patchUserDto;
  }

  /**
   * Delete a user
   * @returns
   */
  @Delete()
  public deleteUser() {
    return "You sent a Delete request to /Users";
  }
}
