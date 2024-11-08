import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-users-param.dto";
import { AuthService } from "src/auth/provider/auth.service";
import { Repository } from "typeorm";
import { User } from "../entity/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "../dtos/create-user.dto";
import { ConfigService, ConfigType } from "@nestjs/config";
import profileConfig from "../config/profile.config";

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

    /** config service   */
    // private readonly configSvc: ConfigService,
    @Inject(profileConfig.KEY)
    private readonly profileConfiguration: ConfigType<typeof profileConfig>,
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
    /** get environment */
    // const environment = this.configSvc.get<string>("DATABASE_PORT");
    // console.log("DATABASE_PORT:", this.configSvc.get<string>("DATABASE_PORT"));
    console.log("DATABASE_PORT:", this.profileConfiguration);
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
  public async findById(id: number) {
    return await this.usersRepository.findOneBy({ id });
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
