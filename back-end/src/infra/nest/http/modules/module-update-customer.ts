import { Module } from '@nestjs/common';
import { NestControllerUpdateCustomer } from '../nest-controllers';
import {
  NestAddressValidator,
  NestCpfValidator,
  NestEmailValidator,
  NestPhoneValidator,
  NestCustomerValidator,
} from '../../providers';

@Module({
  controllers: [NestControllerUpdateCustomer],
  providers: [
    NestAddressValidator,
    NestCpfValidator,
    NestEmailValidator,
    NestPhoneValidator,
    NestCustomerValidator,
  ],
  exports: [
    NestAddressValidator,
    NestCpfValidator,
    NestEmailValidator,
    NestPhoneValidator,
    NestCustomerValidator,
  ],
})
export class UpdateCustomerModule {}
