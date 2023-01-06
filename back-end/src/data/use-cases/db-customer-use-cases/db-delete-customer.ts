import { CustomerRepository } from 'src/domain/repositories/customer-repository';
import { DeleteCustomer } from 'src/domain/use-cases/customer-use-cases/delete-customer';

export class DbDeleteCustomer implements DeleteCustomer {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async delete(id: string): Promise<void> {
    await this.customerRepository.delete(id);
  }
}
