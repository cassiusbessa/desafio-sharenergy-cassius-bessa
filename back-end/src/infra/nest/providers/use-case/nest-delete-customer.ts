import { DbDeleteCustomer } from '@data/use-cases/db-customer-use-cases/db-delete-customer/db-delete-customer';
import { MongoCustomerRepository } from '@infra/nest/mongo/repositories/mongo-customer-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NestDeleteCustomer extends DbDeleteCustomer {
  constructor(customerRepository: MongoCustomerRepository) {
    super(customerRepository);
  }
}
