import { Module } from '@nestjs/common';
import { NestControllerDeleteCustomer } from '../nest-controllers';

@Module({
  controllers: [NestControllerDeleteCustomer],
})
export class DeleteCustomerModule {}
