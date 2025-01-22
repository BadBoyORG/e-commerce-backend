import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dtos/createuser.dto';
import { userService } from './user.service';
import { userEntity } from './entities/user.entity';
import { ReturnUserDto } from './dtos/returnUser.dto';

@Controller('users')
export class userController {
  constructor(private readonly userService: userService) {}

  @Post()
  async createUser(@Body(new ValidationPipe()) createuserDto: CreateUserDto) {
    return this.userService.createUser(createuserDto);
  }

  @Get()
  async getAlluser(): Promise<ReturnUserDto[]> {
    return (await this.userService.getAllUser()).map(
      (userEntity) => new ReturnUserDto(userEntity),
    );
  }
}
