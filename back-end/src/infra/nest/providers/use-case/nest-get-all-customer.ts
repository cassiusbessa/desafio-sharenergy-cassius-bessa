import { DbGetAllCustomer } from '@data/use-cases/db-customer-use-cases/db-get-all-customer/db-get-all-customer';
import { MongoCustomerRepository } from '@infra/nest/mongo/repositories/mongo-customer-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NestGetAllCustomer extends DbGetAllCustomer {
  constructor(customerRepository: MongoCustomerRepository) {
    super(customerRepository);
  }
}
