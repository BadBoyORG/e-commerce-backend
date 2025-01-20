import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUsersDto } from './dtos/createUsers.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUsersDto: CreateUsersDto) {
    return this.usersService.createUser(createUsersDto);
  }

  @Get()
  async getAllUsers() {
    return this.usersService.getAllUsers();
  }
}
