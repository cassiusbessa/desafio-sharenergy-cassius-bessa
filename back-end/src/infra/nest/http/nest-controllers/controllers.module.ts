import { Module } from '@nestjs/common';
import { RepositoriesModule } from '@infra/nest/mongo/repositories/repository.module';
import {
  UseCasesModule,
  NestRegisterCustomer,
  NestUpdateCustomer,
  NestGetAllCustomer,
  NestDeleteCustomer,
  NestLoginAdmin,
  NestAdminTokenValidate,
} from '@infra/nest/providers/use-case';
import {
  NestControllerGetAllCustomer,
  NestControllerRegisterCustomer,
  NestControllerUpdateCustomer,
  NestControllerDeleteCustomer,
  NestControllerLoginAdmin,
} from '.';
import {
  NestEmailValidator,
  NestCpfValidator,
  NestPhoneValidator,
  NestCustomerValidator,
  NestAddressValidator,
  NestLoginAdminValidator,
} from '@infra/nest/providers/validators';
import { NestControllerTokenValidatorAdmin } from './nest-controller-token-validator-admin';

@Module({
  imports: [UseCasesModule, RepositoriesModule],
  controllers: [
    NestControllerRegisterCustomer,
    NestControllerUpdateCustomer,
    NestControllerGetAllCustomer,
    NestControllerDeleteCustomer,
    NestControllerLoginAdmin,
    NestControllerTokenValidatorAdmin,
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
      provide: 'LoginAdmin',
      useClass: NestLoginAdmin,
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
    {
      provide: 'LoginValidator',
      useClass: NestLoginAdminValidator,
    },
    {
      provide: 'TokenValidatorAdmin',
      useClass: NestAdminTokenValidate,
    },
  ],
})
export class ControllersCustomerModule {}
