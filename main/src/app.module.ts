import {Module,HttpServer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { Http2ServerRequest } from 'http2';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest_main',{
      autoCreate:true
    }),
    ProductModule,
    Http2ServerRequest
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
