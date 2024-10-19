import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { UsersService } from "src/users/providers/users.service";

/**
 * Auth service
 */
@Injectable()
export class AuthService {
  /**
   * Constructor
   *
   * Performs any initialization logic required by the service
   */
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {
    // Constructor logic here
  }

  /**
   * Login method
   * @param email
   * @param password
   * @param id
   * @returns
   */
  public login(email: string, password: string, id: number) {
    const users = this.usersService.findById(1234);
    // check user exists in DB

    // Login

    // generate token
    return "Sample_Token";
  }

  /**
   * Method to check if user is authenticated or not
   * @returns
   */
  public isAuthenticated() {
    // validate token
    return true;
  }
}
