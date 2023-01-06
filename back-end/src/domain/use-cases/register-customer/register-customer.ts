import { Customer, CustomerProps } from 'src/domain/entities/customer';

export interface RegisterCustomer {
  register: (customer: CustomerProps) => Promise<Customer>;
}
