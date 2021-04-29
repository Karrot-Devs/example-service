import { Injectable } from '@nestjs/common';
import { IExampleService } from './example.service.interface';
import { ExampleResponseDto } from '../../../common/dto/example.dto';

@Injectable()
export class ExampleService implements IExampleService {
  getExample(): ExampleResponseDto {
    return { value: 'This is an example value' };
  }
}
