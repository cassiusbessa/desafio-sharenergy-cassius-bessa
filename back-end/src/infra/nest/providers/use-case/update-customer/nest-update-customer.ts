import { DbUpdateCustomer } from '@data/use-cases/db-customer-use-cases/db-update-customer/db-update-customer';
import { MongoCustomerRepository } from '@infra/nest/mongo/repositories/mongo-customer-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NestUpdateCustomer extends DbUpdateCustomer {
  constructor(customerRepository: MongoCustomerRepository) {
    super(customerRepository);
  }
}
