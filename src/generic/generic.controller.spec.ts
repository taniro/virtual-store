import { Test, TestingModule } from '@nestjs/testing';
import { AbstractEntity } from './entities/abstract-entity';
import { GenericController } from './generic.controller';


describe('GenericController', () => {
  let controller: GenericController<AbstractEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GenericController],
    }).compile();

    controller = module.get<GenericController<AbstractEntity>>(GenericController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
