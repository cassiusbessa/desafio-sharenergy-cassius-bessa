import { Module } from '@nestjs/common';
import { NestControllerGetAllCustomer } from '../nest-controllers';

@Module({
  controllers: [NestControllerGetAllCustomer],
})
export class GetAllCustomerModule {}
