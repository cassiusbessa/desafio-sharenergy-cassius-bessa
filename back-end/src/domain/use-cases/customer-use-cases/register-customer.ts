import { PersistenceCustomer } from '@domain/entities/customer/customer';

export interface RegisterCustomer {
  register: (customer: PersistenceCustomer) => Promise<boolean>;
}
