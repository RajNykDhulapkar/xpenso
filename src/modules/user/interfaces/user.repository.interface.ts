import { BaseInterfaceRepository } from "src/common/base/repository.interface.base";
import { User } from "@prisma/client";

export type CreateUserInput = {
    email: string;
    name: string;
    password: string;
};

export type FilterUserInput = {
    email: string;
};

export interface UserRepositoryInterface extends BaseInterfaceRepository<User> {
    create(data: CreateUserInput): Promise<User>;
    findByCondition(filterCondition: FilterUserInput): Promise<User>;
}
