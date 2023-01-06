import { CustomerProps } from 'src/domain/entities/customer';
import { CustomerRepository } from 'src/domain/repositories/customer-repository';
import { RegisterCustomer } from 'src/domain/use-cases/customer-use-cases/register-customer';
import { makeCustomer } from 'src/factories/makeCustomer';

export class DbRegisterCustomer implements RegisterCustomer {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async register(
    customer: CustomerProps,
  ): Promise<CustomerProps & { id: string }> {
    const newCostumer = makeCustomer(customer);
    await this.customerRepository.register(newCostumer.getAllProps());
    return newCostumer.getAllProps();
  }
}
