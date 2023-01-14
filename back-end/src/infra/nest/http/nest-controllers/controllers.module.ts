import { Module } from '@nestjs/common';
import { RepositoriesModule } from '@infra/nest/mongo/repositories/repository.module';
import {
  UseCasesModule,
  NestRegisterCustomer,
  NestUpdateCustomer,
  NestGetAllCustomer,
  NestDeleteCustomer,
} from '@infra/nest/providers/use-case';
import {
  NestControllerGetAllCustomer,
  NestControllerRegisterCustomer,
  NestControllerUpdateCustomer,
  NestControllerDeleteCustomer,
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
  controllers: [
    NestControllerRegisterCustomer,
    NestControllerUpdateCustomer,
    NestControllerGetAllCustomer,
    NestControllerDeleteCustomer,
  ],
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
      provide: 'GetAllCustomer',
      useClass: NestGetAllCustomer,
    },
    {
      provide: 'DeleteCustomer',
      useClass: NestDeleteCustomer,
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
