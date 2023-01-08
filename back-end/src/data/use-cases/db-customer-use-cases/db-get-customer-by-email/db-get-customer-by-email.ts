import { CustomerNotFound } from '@data/errors/customer-errors/customer-not-found';
import { PersistenceCustomer } from '@domain/entities/customer';
import { CustomerRepository } from '@domain/repositories/customer-repository';
import { GetCustomerByEmail } from '@domain/use-cases/customer-use-cases/get-customer-by-email';

export class DbGetCustomerByEmail implements GetCustomerByEmail {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async get(email: string): Promise<PersistenceCustomer> {
    const customer = await this.customerRepository.getByEmail(email);
    if (!customer) {
      throw new CustomerNotFound();
    }
    return customer;
  }
}
