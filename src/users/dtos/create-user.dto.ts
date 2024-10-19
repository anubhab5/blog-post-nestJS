import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  Max,
  MaxLength,
  MinLength,
} from "class-validator";

export class CreateUserDto {
  /**
   * First Name
   */
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(96)
  firstName: string;

  /**
   * Last Name
   */
  @IsString()
  @IsOptional()
  @MinLength(3)
  lastName?: string;

  /**
   * Email
   * Must be a valid email
   */
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(96)
  email: string;

  /**
   * Minimum eight characters, at least one letter, one number and one special character
   */
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(96)
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
    message: "Password too weak",
  })
  password: string;
}
