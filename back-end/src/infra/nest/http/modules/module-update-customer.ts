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
    {
      provide: 'EmailValidator',
      useClass: NestEmailValidator,
    },
    {
      provide: 'CpfValidator',
      useClass: NestCpfValidator,
    },
    {
      provide: 'PhoneValidator',
      useClass: NestPhoneValidator,
    },
    {
      provide: 'CustomerValidator',
      useClass: NestCustomerValidator,
    },
  ],
})
export class UpdateCustomerModule {}
