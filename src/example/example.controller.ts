import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ExampleResponseDto } from '../../../common/dto/example.dto';
import { ExampleService } from './example.service';

@Controller()
export class ExampleController {
  constructor(private exampleService: ExampleService) {}

  @GrpcMethod('ExampleService')
  getExample(): ExampleResponseDto {
    return this.exampleService.getExample();
  }
}
