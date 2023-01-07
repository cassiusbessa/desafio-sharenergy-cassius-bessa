import { CustomerNotFound } from '@data/errors/customer-errors/customer-not-found';
import { CustomerProps, PersistenceCustomer } from '@domain/entities/customer';
import { CustomerRepository } from '@domain/repositories/customer-repository';
import { UpdateCustomer } from '@domain/use-cases/customer-use-cases/update-customer';

export class DbUpdateCustomer implements UpdateCustomer {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async update(
    customer: CustomerProps,
    id: string,
  ): Promise<PersistenceCustomer> {
    const customerToUpdate = await this.customerRepository.getInfo(id);
    if (!customerToUpdate) {
      throw new CustomerNotFound();
    }
    await this.customerRepository.update(customer, id);
    return { ...customerToUpdate, ...customer, id };
  }
}
