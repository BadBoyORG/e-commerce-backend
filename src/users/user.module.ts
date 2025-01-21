import { Module } from '@nestjs/common';
import { userController } from './user.controller';
import { userService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userEntity } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([userEntity])],
  controllers: [userController],
  providers: [userService],
})
export class userModule {}
