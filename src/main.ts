import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join, resolve } from 'path';
import { Logger } from '@nestjs/common';

const logger = new Logger('ExampleMSVC');

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'example',
        protoPath: join(
          resolve(__dirname, '../../../../common/proto/'),
          'example.proto',
        ),
      },
    },
  );
  await app.listen(() => logger.verbose('Service Started successfully...'));
}

bootstrap();
