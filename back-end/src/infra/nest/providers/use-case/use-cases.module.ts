import { RepositoriesModule } from '@infra/nest/mongo/repositories/repository.module';
import { Module } from '@nestjs/common';
import {
  NestRegisterCustomer,
  NestUpdateCustomer,
  NestGetAllCustomer,
  NestDeleteCustomer,
  NestLoginAdmin,
  NestAdminTokenValidate,
} from '.';

@Module({
  imports: [RepositoriesModule],
  providers: [
    NestRegisterCustomer,
    NestUpdateCustomer,
    NestGetAllCustomer,
    NestDeleteCustomer,
    NestLoginAdmin,
    NestAdminTokenValidate,
  ],
  exports: [
    NestRegisterCustomer,
    NestUpdateCustomer,
    NestGetAllCustomer,
    NestDeleteCustomer,
    NestLoginAdmin,
    NestAdminTokenValidate,
  ],
})
export class UseCasesModule {}
