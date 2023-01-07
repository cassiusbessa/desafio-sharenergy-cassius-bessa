import { CustomerProps, PersistenceCustomer } from '@domain/entities/customer';
import { CustomerRepository } from '@domain/repositories/customer-repository';
import { RegisterCustomer } from '@domain/use-cases/customer-use-cases/register-customer';
import { makeCustomer } from '../../../../factories/makeCustomer';

export class DbRegisterCustomer implements RegisterCustomer {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async register(customer: CustomerProps): Promise<PersistenceCustomer> {
    const newCostumer = makeCustomer(customer);
    await this.customerRepository.register(newCostumer.getAllProps());
    return newCostumer.getAllProps();
  }
}
