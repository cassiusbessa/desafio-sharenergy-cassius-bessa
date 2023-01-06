import { CustomerProps, Customer } from 'src/domain/entities/customer';
import { CustomerRepository } from 'src/domain/repositories/customer-repository';
import { RegisterCustomer } from 'src/domain/use-cases/register-customer/register-customer';
import { makeCustomer } from 'src/factories/makeCustomer';

export class DbRegisterCustomer implements RegisterCustomer {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async register(customer: CustomerProps): Promise<Customer> {
    const newCostumer = makeCustomer(customer);
    await this.customerRepository.register(newCostumer);
    return newCostumer;
  }
}
