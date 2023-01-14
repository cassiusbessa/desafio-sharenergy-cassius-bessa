import { Module } from '@nestjs/common';
import { RepositoriesModule } from '@infra/nest/mongo/repositories/repository.module';
import {
  UseCasesModule,
  NestRegisterCustomer,
  NestUpdateCustomer,
} from '@infra/nest/providers/use-case';
import {
  NestControllerRegisterCustomer,
  NestControllerUpdateCustomer,
} from '.';
import {
  NestEmailValidator,
  NestCpfValidator,
  NestPhoneValidator,
  NestCustomerValidator,
  NestAddressValidator,
} from '@infra/nest/providers/validators';

@Module({
  imports: [UseCasesModule, RepositoriesModule],
  controllers: [NestControllerRegisterCustomer, NestControllerUpdateCustomer],
  providers: [
    {
      provide: 'RegisterCustomer',
      useClass: NestRegisterCustomer,
    },
    {
      provide: 'UpdateCustomer',
      useClass: NestUpdateCustomer,
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
