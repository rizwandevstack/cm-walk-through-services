import { Injectable } from '@nestjs/common';
import { CreateProfilingDto } from './dto/create-profiling.dto';
import { UpdateProfilingDto } from './dto/update-profiling.dto';

@Injectable()
export class ProfilingService {
  create(createProfilingDto: CreateProfilingDto) {
    return 'This action adds a new profiling';
  }

  findAll() {
    return `This action returns all profiling`;
  }

  findOne(id: number) {
    return `This action returns a #${id} profiling`;
  }

  update(id: number, updateProfilingDto: UpdateProfilingDto) {
    return `This action updates a #${id} profiling`;
  }

  remove(id: number) {
    return `This action removes a #${id} profiling`;
  }
}
