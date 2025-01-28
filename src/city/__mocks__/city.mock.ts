import { stateEntityMock } from '../../state/__mocks__/state.mock';
import { CityEntity } from '../entities/city.entity';

export const cityEntityMock: CityEntity = {
  id: 1,
  name: 'mock city',
  stateId: stateEntityMock.id,
  createdAt: new Date(),
  updatedAt: new Date(),
};
