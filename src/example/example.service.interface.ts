import { ExampleResponseDto } from '../../../common/dto/example.dto';

export interface IExampleService {
  getExample(): ExampleResponseDto;
}
