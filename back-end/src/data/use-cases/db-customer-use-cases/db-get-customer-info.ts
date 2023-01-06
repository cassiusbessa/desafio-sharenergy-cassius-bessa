import { CustomerNotFound } from 'src/data/errors/customer-errors/customer-not-found';
import { CustomerProps } from 'src/domain/entities/customer';
import { CustomerRepository } from 'src/domain/repositories/customer-repository';
import { GetCustomerInfo } from 'src/domain/use-cases/customer-use-cases/get-customer-info';

export class DbGetCustomerInfo implements GetCustomerInfo {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async get(id: string): Promise<CustomerProps & { id: string }> {
    const customer = await this.customerRepository.getInfo(id);
    if (!customer) {
      throw new CustomerNotFound();
    }
    return customer;
  }
}
