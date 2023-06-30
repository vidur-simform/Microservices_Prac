import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({
    origin:'http://localhost:4200'
  })
  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://xvpsimiz:Lhs1PQyvSRvqHnvub1lQdwEz_Bgx06dW@rattlesnake.rmq.cloudamqp.com/xvpsimiz'],
      queue: 'main_queue',
      queueOptions: {
        durable: false
      },
      port:8001
    },
  });
  app.startAllMicroservices();
  await app.listen(8001);
}
bootstrap();
