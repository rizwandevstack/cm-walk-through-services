import { Test, TestingModule } from '@nestjs/testing';
import { ProfilingController } from './profiling.controller';
import { ProfilingService } from './profiling.service';

describe('ProfilingController', () => {
  let controller: ProfilingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfilingController],
      providers: [ProfilingService],
    }).compile();

    controller = module.get<ProfilingController>(ProfilingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
