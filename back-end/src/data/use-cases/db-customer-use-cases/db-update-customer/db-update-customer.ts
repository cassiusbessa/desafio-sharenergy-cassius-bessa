import { CustomerProps, PersistenceCustomer } from '@domain/entities/customer';
import { CustomerRepository } from '@domain/repositories/customer-repository';
import { UpdateCustomer } from '@domain/use-cases/customer-use-cases/update-customer';

export class DbUpdateCustomer implements UpdateCustomer {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async update(
    customer: Partial<PersistenceCustomer>,
    email: string,
  ): Promise<PersistenceCustomer> {
    const customerToUpdate = await this.customerRepository.getByEmail(email);
    if (!customerToUpdate) {
      return null;
    }
    const isUpdated = await this.customerRepository.update(customer, email);
    return isUpdated ? customerToUpdate : null;
  }
}
