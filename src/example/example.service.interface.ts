import { ExampleResponseDto } from './example.dto';

export interface ExampleService {
  getExample(): () => ExampleResponseDto;
}
