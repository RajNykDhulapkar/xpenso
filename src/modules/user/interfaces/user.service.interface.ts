import CreateUserDto from "../dtos/createUser.dto";
import { User } from "@prisma/client";

export interface UserServiceInterface {
    create(createUserInput: CreateUserDto): Promise<User>;

    getById(id: number): Promise<User>;

    getByEmail(email: string): Promise<User>;
}
