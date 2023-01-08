import { CustomerRepository } from '@domain/repositories/customer-repository';
import { DeleteCustomer } from '@domain/use-cases/customer-use-cases/delete-customer';

export class DbDeleteCustomer implements DeleteCustomer {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async delete(id: string): Promise<boolean> {
    return this.customerRepository.delete(id);
  }
}