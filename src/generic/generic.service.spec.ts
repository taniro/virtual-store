import { Test, TestingModule } from '@nestjs/testing';
import { AbstractEntity } from './entities/abstract-entity';
import { GenericService } from './generic.service';

describe('GenericService', () => {
  let service: GenericService<AbstractEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenericService],
    }).compile();

    service = module.get<GenericService<AbstractEntity>>(GenericService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
