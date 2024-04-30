import { Module } from '@nestjs/common';
import { ProfilingService } from './profiling.service';
import { ProfilingController } from './profiling.controller';

@Module({
  controllers: [ProfilingController],
  providers: [ProfilingService],
})
export class ProfilingModule {}
