import { PersistenceCustomer } from '@domain/entities/customer';
import { CustomerRepository } from '@domain/repositories/customer-repository';
import { UpdateCustomer } from '@domain/use-cases/customer-use-cases/update-customer';

export class DbUpdateCustomer implements UpdateCustomer {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async update(
    customer: Partial<PersistenceCustomer>,
    email: string,
  ): Promise<boolean> {
    const isUpdated = await this.customerRepository.update(customer, email);
    return isUpdated;
  }
}
