import { Customer } from 'src/domain/entities/customer';

export interface GetAllCustomer {
  getAll: () => Promise<Customer[]>;
}
