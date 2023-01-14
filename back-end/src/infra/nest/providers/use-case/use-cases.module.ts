import { RepositoriesModule } from '@infra/nest/mongo/repositories/repository.module';
import { Module } from '@nestjs/common';
import { NestRegisterCustomer, NestUpdateCustomer } from '.';

@Module({
  imports: [RepositoriesModule],
  providers: [NestRegisterCustomer, NestUpdateCustomer],
  exports: [NestRegisterCustomer, NestUpdateCustomer],
})
export class UseCasesModule {}
