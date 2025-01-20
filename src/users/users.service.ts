import { Injectable } from '@nestjs/common';
import { UsersEntity } from './entities/users.entity';
import { CreateUsersDto } from './dtos/createUsers.dto';
import { hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,
  ) {}

  async createUser(createUsersDto: CreateUsersDto): Promise<UsersEntity> {
    const saltOrRounds = 10;
    const passwordHash = await hash(createUsersDto.password, saltOrRounds);

    return this.usersRepository.save({
      ...createUsersDto,
      typeUser: 1,
      password: passwordHash,
    });
  }

  async getAllUsers(): Promise<UsersEntity[]> {
    return this.usersRepository.find();
  }
}
