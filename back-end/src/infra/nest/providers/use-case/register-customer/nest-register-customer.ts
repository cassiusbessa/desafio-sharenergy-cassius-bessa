import { DbRegisterCustomer } from '@data/use-cases/db-customer-use-cases/db-register-customer/db-register-customer';
import { MongoCustomerRepository } from '@infra/nest/mongo/repositories/mongo-customer-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NestRegisterCustomer extends DbRegisterCustomer {
  constructor(customerRepository: MongoCustomerRepository) {
    super(customerRepository);
  }
}
