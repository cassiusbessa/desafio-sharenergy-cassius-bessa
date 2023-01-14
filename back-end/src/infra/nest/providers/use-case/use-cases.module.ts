import { MongoCustomerRepository } from '@infra/nest/mongo/repositories/mongo-customer-repository';
import { RepositoriesModule } from '@infra/nest/mongo/repositories/repository.module';
import { Module } from '@nestjs/common';
import { NestRegisterCustomer } from './register-customer/nest-register-customer';

@Module({
  imports: [RepositoriesModule],
  providers: [NestRegisterCustomer],
  exports: [NestRegisterCustomer],
})
export class UseCasesModule {}
