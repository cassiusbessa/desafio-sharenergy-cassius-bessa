import { RepositoriesModule } from '@infra/nest/mongo/repositories/repository.module';
import { Module } from '@nestjs/common';
import {
  NestRegisterCustomer,
  NestUpdateCustomer,
  NestGetAllCustomer,
  NestDeleteCustomer,
  NestLoginAdmin,
} from '.';

@Module({
  imports: [RepositoriesModule],
  providers: [
    NestRegisterCustomer,
    NestUpdateCustomer,
    NestGetAllCustomer,
    NestDeleteCustomer,
    NestLoginAdmin,
  ],
  exports: [
    NestRegisterCustomer,
    NestUpdateCustomer,
    NestGetAllCustomer,
    NestDeleteCustomer,
    NestLoginAdmin,
  ],
})
export class UseCasesModule {}
