import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ProfilingService } from './profiling.service';
import { CreateProfilingDto } from './dto/create-profiling.dto';
import { UpdateProfilingDto } from './dto/update-profiling.dto';

@Controller()
export class ProfilingController {
  constructor(private readonly profilingService: ProfilingService) {}

  @MessagePattern('createProfiling')
  create(@Payload() createProfilingDto: CreateProfilingDto) {
    return this.profilingService.create(createProfilingDto);
  }

  @MessagePattern('findAllProfiling')
  findAll() {
    return this.profilingService.findAll();
  }

  @MessagePattern('findOneProfiling')
  findOne(@Payload() id: number) {
    return this.profilingService.findOne(id);
  }

  @MessagePattern('updateProfiling')
  update(@Payload() updateProfilingDto: UpdateProfilingDto) {
    return this.profilingService.update(updateProfilingDto.id, updateProfilingDto);
  }

  @MessagePattern('removeProfiling')
  remove(@Payload() id: number) {
    return this.profilingService.remove(id);
  }
}
