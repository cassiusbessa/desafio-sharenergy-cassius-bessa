import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoCustomerModel, CustomerSchema } from '../schemas';
import { MongoCustomerRepository } from './mongo-customer-repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MongoCustomerModel.name, schema: CustomerSchema },
    ]),
  ],
  providers: [MongoCustomerRepository],
  exports: [MongoCustomerRepository],
})
export class RepositoriesModule {}
