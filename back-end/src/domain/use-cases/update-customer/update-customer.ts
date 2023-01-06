import { Customer, CustomerProps } from 'src/domain/entities/customer';

export interface UpdateCustomer {
  update: (customer: CustomerProps) => Promise<Customer>;
}
