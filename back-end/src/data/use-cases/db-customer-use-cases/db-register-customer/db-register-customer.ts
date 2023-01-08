import { CustomerProps, PersistenceCustomer } from '@domain/entities/customer';
import { CustomerRepository } from '@domain/repositories/customer-repository';
import { RegisterCustomer } from '@domain/use-cases/customer-use-cases/register-customer';
import { makeCustomer } from '../../../../factories/makeCustomer';

export class DbRegisterCustomer implements RegisterCustomer {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async register(customer: PersistenceCustomer): Promise<boolean> {
    const exists = await this.customerRepository.getByEmail(customer.email);
    console.log('exists: ', exists);
    if (exists) {
      return false;
    }
    console.log('vou registar o customer: ', customer);
    const isValid = await this.customerRepository.register(customer);
    console.log('isValid: ', isValid);
    return isValid;
  }
}
