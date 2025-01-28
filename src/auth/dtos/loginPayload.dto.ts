import { UserEntity } from '../../users/entities/user.entity';

export class LoginPayloadDto {
  id: number;
  typeUser: number;

  constructor(userEntity: UserEntity) {
    this.id = userEntity.id;
    this.typeUser = userEntity.typeUser;
  }
}
