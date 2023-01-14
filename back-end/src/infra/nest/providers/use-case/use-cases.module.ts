import { RepositoriesModule } from '@infra/nest/mongo/repositories/repository.module';
import { Module } from '@nestjs/common';
import {
  NestRegisterCustomer,
  NestUpdateCustomer,
  NestGetAllCustomer,
  NestDeleteCustomer,
} from '.';

@Module({
  imports: [RepositoriesModule],
  providers: [
    NestRegisterCustomer,
    NestUpdateCustomer,
    NestGetAllCustomer,
    NestDeleteCustomer,
  ],
  exports: [NestRegisterCustomer, NestUpdateCustomer, NestGetAllCustomer],
})
export class UseCasesModule {}
