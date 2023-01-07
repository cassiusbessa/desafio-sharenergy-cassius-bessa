import { CustomerNotFound } from '@data/errors/customer-errors/customer-not-found';
import { PersistenceCustomer } from '@domain/entities/customer';
import { CustomerRepository } from '@domain/repositories/customer-repository';
import { GetCustomerInfo } from '@domain/use-cases/customer-use-cases/get-customer-info';

export class DbGetCustomerInfo implements GetCustomerInfo {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async get(id: string): Promise<PersistenceCustomer> {
    const customer = await this.customerRepository.getInfo(id);
    if (!customer) {
      throw new CustomerNotFound();
    }
    return customer;
  }
}
