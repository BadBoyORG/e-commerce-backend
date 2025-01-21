import { Injectable } from '@nestjs/common';
import { userEntity } from './entities/user.entity';
import { CreateUserDto } from './dtos/createuser.dto';
import { hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class userService {
  constructor(
    @InjectRepository(userEntity)
    private readonly userRepository: Repository<userEntity>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<userEntity> {
    const saltOrRounds = 10;
    const passwordHash = await hash(createUserDto.password, saltOrRounds);

    return this.userRepository.save({
      ...createUserDto,
      typeUser: 1,
      password: passwordHash,
    });
  }

  async getAlluser(): Promise<userEntity[]> {
    return this.userRepository.find();
  }
}
