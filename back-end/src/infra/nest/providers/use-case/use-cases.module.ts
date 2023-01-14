import { RepositoriesModule } from '@infra/nest/mongo/repositories/repository.module';
import { Module } from '@nestjs/common';
import {
  NestRegisterCustomer,
  NestUpdateCustomer,
  NestGetAllCustomer,
} from '.';

@Module({
  imports: [RepositoriesModule],
  providers: [NestRegisterCustomer, NestUpdateCustomer, NestGetAllCustomer],
  exports: [NestRegisterCustomer, NestUpdateCustomer, NestGetAllCustomer],
})
export class UseCasesModule {}
