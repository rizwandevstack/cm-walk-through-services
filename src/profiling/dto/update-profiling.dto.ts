import { PartialType } from '@nestjs/mapped-types';
import { CreateProfilingDto } from './create-profiling.dto';

export class UpdateProfilingDto extends PartialType(CreateProfilingDto) {
  id: number;
}
