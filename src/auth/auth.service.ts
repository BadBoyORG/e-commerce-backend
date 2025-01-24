import { Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from 'src/users/user.service';
import { LoginDto } from './dtos/login.dto';
import { compare } from 'bcrypt';
import { ReturnLoginDto } from './dtos/returnLogin.dto';
import { JwtService } from '@nestjs/jwt';
import { ReturnUserDto } from 'src/users/dtos/returnUser.dto';
import { LoginPayloadDto } from './dtos/loginPayload.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto): Promise<ReturnLoginDto> {
    const user = await this.usersService
      .findUserByEmail(loginDto.email)
      .catch(() => undefined);

    const isMatch = await compare(loginDto.password, user.password || '').catch(
      () => false,
    );

    if (!user || !isMatch) {
      throw new NotFoundException(`Email or password invalid`);
    }

    return {
      acessToken: this.jwtService.sign({ ...new LoginPayloadDto(user) }),
      user: new ReturnUserDto(user),
    };
  }
}
