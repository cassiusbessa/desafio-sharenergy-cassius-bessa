import { Controller, Module } from '@nestjs/common';
import { RepositoriesModule } from '@infra/nest/mongo/repositories/repository.module';
import { UseCasesModule } from '@infra/nest/providers/use-case/use-cases.module';
import { NestControllerRegisterCustomer } from './nest-controller-register-customer';
import {
  NestEmailValidator,
  NestCpfValidator,
  NestPhoneValidator,
  NestCustomerValidator,
  NestAddressValidator,
} from '@infra/nest/providers/validators';
import { NestRegisterCustomer } from '@infra/nest/providers/use-case/register-customer/nest-register-customer';

@Module({
  imports: [UseCasesModule, RepositoriesModule],
  controllers: [NestControllerRegisterCustomer],
  providers: [
    {
      provide: 'RegisterCustomer',
      useClass: NestRegisterCustomer,
    },
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
    {
      provide: 'AddressValidator',
      useClass: NestAddressValidator,
    },
  ],
})
export class ControllersCustomerModule {}
