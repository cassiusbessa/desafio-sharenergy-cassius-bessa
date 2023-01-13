import {
  NestEmailValidator,
  NestCpfValidator,
  NestPhoneValidator,
  NestCustomerValidator,
} from '@infra/nest/providers';
import { Module } from '@nestjs/common';
import { NestControllerRegisterCustomer } from '../nest-controllers';

@Module({
  controllers: [NestControllerRegisterCustomer],
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
export class RegisterCustomerModule {}
