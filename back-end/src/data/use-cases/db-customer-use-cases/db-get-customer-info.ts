import { CustomerNotFound } from 'src/data/errors/customer-errors/customer-not-found';
import { PersistenceCustomer } from 'src/domain/entities/customer';
import { CustomerRepository } from 'src/domain/repositories/customer-repository';
import { GetCustomerInfo } from 'src/domain/use-cases/customer-use-cases/get-customer-info';

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
