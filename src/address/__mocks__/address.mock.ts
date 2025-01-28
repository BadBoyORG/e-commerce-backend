import { cityEntityMock } from '../../city/__mocks__/city.mock';
import { AddressEntity } from '../entities/address.entity';
import { userEntityMock } from '../../users/__mocks__/user.mock';

export const addressEntityMock: AddressEntity = {
  id: 1,
  cep: '31734718',
  numberAddress: 3724,
  complement: 'mock complement',
  cityId: cityEntityMock.id,
  userId: userEntityMock.id,
  createdAt: new Date(),
  updatedAt: new Date(),
};
