import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "../../database/prisma.service";
import {
    CreateUserInput,
    FilterUserInput,
    UserRepositoryInterface,
} from "./interfaces/user.repository.interface";

@Injectable()
export class UserRepository implements UserRepositoryInterface {
    constructor(private readonly prismaService: PrismaService) {}
    create(data: CreateUserInput): Promise<User> {
        return this.prismaService.user.create({ data });
    }
    findOneById(id: number): Promise<User> {
        return this.prismaService.user.findUnique({
            where: { id },
        });
    }
    findByCondition(filterCondition: FilterUserInput): Promise<User> {
        return this.prismaService.user.findUnique({ where: filterCondition });
    }
}
