import { PersistenceCustomer } from '@domain/entities/customer/customer';
import { CustomerRepository } from '@domain/repositories/customer-repository';
import { RegisterCustomer } from '@domain/use-cases/customer-use-cases/register-customer';

export class DbRegisterCustomer implements RegisterCustomer {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async register(customer: PersistenceCustomer): Promise<boolean> {
    const isValid = await this.customerRepository.register(customer);
    return isValid;
  }
}
