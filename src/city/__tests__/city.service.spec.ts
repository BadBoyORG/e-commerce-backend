import { Repository } from 'typeorm';
import { CityService } from '../city.service';
import { CityEntity } from '../entities/city.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { CacheService } from '../../cache/cache.service';
import { cityEntityMock } from '../__mocks__/city.mock';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('CityService', () => {
  let service: CityService;
  let cityRepository: Repository<CityEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CityService,
        {
          provide: CacheService,
          useValue: {
            getCache: jest.fn().mockResolvedValue([cityEntityMock]),
          },
        },
        {
          provide: getRepositoryToken(CityEntity),
          useValue: {
            findOne: jest.fn().mockResolvedValue(cityEntityMock),
          },
        },
      ],
    }).compile();

    service = module.get<CityService>(CityService);
    cityRepository = module.get<Repository<CityEntity>>(
      getRepositoryToken(CityEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(cityRepository).toBeDefined();
  });

  it('should return findOne City', async () => {
    const city = await service.findCityById(cityEntityMock.id);

    expect(city).toEqual(cityEntityMock);
  });

  it('should return error findOne not found', async () => {
    jest.spyOn(cityRepository, 'findOne').mockResolvedValue(undefined);

    expect(service.findCityById(cityEntityMock.id)).rejects.toThrow();
  });

  it('should return cities in getAllCitiesByStateId', async () => {
    const city = await service.getAllCitiesByStateId(cityEntityMock.id);

    expect(city).toEqual([cityEntityMock]);
  });
});
