import { Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from 'src/users/user.service';
import { LoginDto } from './dtos/login.dto';
import { UserEntity } from 'src/users/entities/user.entity';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UserService) {}

  async login(loginDto: LoginDto): Promise<UserEntity> {
    const user = await this.usersService
      .findUserByEmail(loginDto.email)
      .catch(() => undefined);

    const isMatch = await compare(loginDto.password, user.password || '').catch(
      () => false,
    );

    if (!user || !isMatch) {
      throw new NotFoundException(`Email or password invalid`);
    }

    return user;
  }
}
