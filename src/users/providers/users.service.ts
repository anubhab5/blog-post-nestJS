import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-users-param.dto";
import { AuthService } from "src/auth/provider/auth.service";
import { Repository } from "typeorm";
import { User } from "../entity/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "../dtos/create-user.dto";

/**
 * Users service
 */
@Injectable()
export class UsersService {
  /**
   * Constructor - Performs any initialization logic required by the service
   * @param authService
   */
  constructor(
    /** auth service */
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
    /** create user repo */
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {
    /** constructor */
  }

  /**
   * Get all users
   * @returns
   */
  public findAll(
    getUserParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    const isAuth = this.authService.isAuthenticated();

    console.log(isAuth);

    return [
      {
        firstName: "John",
        email: "john@example.com",
      },
      {
        firstName: "Alice",
        email: "alice@example.com",
      },
      {
        firstName: "Jack",
        email: "jack@example.com",
      },
    ];
  }

  /**
   * Method to find a user by id
   * @param id
   * @returns
   */
  public findById(id: number) {
    return {
      id,
      firstName: "John",
      email: "john@example.com",
    };
  }

  public async createUser(createUserDto: CreateUserDto) {
    // check if user exists with same email
    const existingUser = await this.usersRepository.findOne({
      where: {
        email: createUserDto.email,
      },
    });
    // handle exception

    // create a new user
    let newUser = this.usersRepository.create(createUserDto);
    newUser = await this.usersRepository.save(newUser);

    return newUser;
  }
}
