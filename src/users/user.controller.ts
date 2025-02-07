import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/createuser.dto';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { ReturnUserDto } from './dtos/returnUser.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body(new ValidationPipe()) createuserDto: CreateUserDto) {
    return this.userService.createUser(createuserDto);
  }

  @Get()
  async getAlluser(): Promise<ReturnUserDto[]> {
    return (await this.userService.getAllUser()).map(
      (UserEntity) => new ReturnUserDto(UserEntity),
    );
  }

  @Get(':userId')
  async getUserById(@Param('userId') userId: number): Promise<ReturnUserDto> {
    return new ReturnUserDto(
      await this.userService.getUserByIdUsingRelations(userId),
    );
  }
}
