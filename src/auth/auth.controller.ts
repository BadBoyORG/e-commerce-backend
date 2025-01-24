import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';
import { ReturnUserDto } from 'src/users/dtos/returnUser.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(
    @Body(new ValidationPipe()) loginDto: LoginDto,
  ): Promise<ReturnUserDto> {
    return new ReturnUserDto(await this.authService.login(loginDto));
  }
}
