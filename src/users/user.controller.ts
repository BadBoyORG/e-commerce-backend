import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createuser.dto';
import { userService } from './user.service';
import { userEntity } from './entities/user.entity';

@Controller('users')
export class userController {
  constructor(private readonly userService: userService) {}

  @Post()
  async createUser(@Body() createuserDto: CreateUserDto) {
    return this.userService.createUser(createuserDto);
  }

  @Get()
  async getAlluser(): Promise<userEntity[]> {
    return this.userService.getAlluser();
  }
}
