import { Injectable } from '@nestjs/common';
import { Users } from './interface/users.interface';
import { CreateUsersDto } from './dtos/createUsers.dto';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  private users: Users[] = [];

  async createUser(createUsersDto: CreateUsersDto): Promise<Users> {
    const saltOrRounds = 10;
    const passwordHash = await hash(createUsersDto.password, saltOrRounds);

    const user: Users = {
      id: this.users.length + 1,
      ...createUsersDto,
      password: passwordHash,
    };

    this.users.push(user);

    return user;
  }

  async getAllUsers(): Promise<Users[]> {
    return this.users;
  }
}
