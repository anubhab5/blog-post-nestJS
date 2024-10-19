import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.dto";

// This is a partial DTO, so it is not necessary to include every field
// Best for when you only want to update a subset of the fields : PATCH call
export class PatchUserDto extends PartialType(CreateUserDto) {}
