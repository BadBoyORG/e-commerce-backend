import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enums/userType.enum';

export const userEntityMock: UserEntity = {
  id: 10,
  name: 'mockuser',
  email: 'mock@email.com',
  phone: '12345678900',
  cpf: '12345678900',
  password: '$2b$10$S62WmVpIxL52Z.0y22DWfuaAz8.XUNESChWP.AlMFZnOJ9n9uiqi.',
  typeUser: UserType.User,
  createdAt: new Date(),
  updatedAt: new Date(),
};
