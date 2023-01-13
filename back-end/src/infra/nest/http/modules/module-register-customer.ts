import { Module } from '@nestjs/common';
import { NestControllerRegisterCustomer } from '../nest-controllers';
import {
  NestAddressValidator,
  NestCpfValidator,
  NestEmailValidator,
  NestPhoneValidator,
  NestCustomerValidator,
} from '../../providers';

@Module({
  controllers: [NestControllerRegisterCustomer],
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
export class RegisterCustomerModule {}
