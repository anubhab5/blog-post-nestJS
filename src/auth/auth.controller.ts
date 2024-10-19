import { Controller } from "@nestjs/common";
import { AuthService } from "./provider/auth.service";

@Controller("auth")
export class AuthController {
  /**
   * Constructor
   *
   * Performs any initialization logic required by the controller
   * @param authService
   */
  constructor(private readonly authService: AuthService) {
    /** constructor */
  }
}
