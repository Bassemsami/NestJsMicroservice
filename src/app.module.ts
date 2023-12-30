// src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
import { ProductModule } from './product/product.module';


dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    ProductModule, 
  ],
})
export class AppModule {}
