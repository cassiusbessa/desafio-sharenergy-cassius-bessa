import { MongoCustomerRepository } from '@infra/nest/mongo/repositories/mongo-customer-repository';
import { Module } from '@nestjs/common';
import { NestRegisterCustomer } from './nest-register-customer';
import { MongoCustomerModel } from '@infra/nest/mongo/schemas/customer-schema';

@Module({
  providers: [
    {
      provide: 'customerRepository',
      useClass: MongoCustomerRepository,
    },
    {
      provide: 'RegisterCustomer',
      useClass: NestRegisterCustomer,
    },
  ],
  exports: [NestRegisterCustomer],
})
export class UseCaseRegisterCustomerModule {}
