import { CustomerProps } from 'src/domain/entities/customer';
import { CustomerRepository } from 'src/domain/repositories/customer-repository';
import { GetAllCustomer } from 'src/domain/use-cases/customer-use-cases/get-all-customer';

export class DbGetAllCustomer implements GetAllCustomer {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async getAll(): Promise<CustomerProps & { id: string }[]> {
    const customers = await this.customerRepository.getAll();
    return customers;
  }
}
