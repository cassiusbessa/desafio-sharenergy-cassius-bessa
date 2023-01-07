import { PersistenceCustomer } from '@domain/entities/customer';
import { CustomerRepository } from '@domain/repositories/customer-repository';
import { GetAllCustomer } from '@domain/use-cases/customer-use-cases/get-all-customer';

export class DbGetAllCustomer implements GetAllCustomer {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async getAll(): Promise<PersistenceCustomer[]> {
    const customers = await this.customerRepository.getAll();
    return customers;
  }
}
