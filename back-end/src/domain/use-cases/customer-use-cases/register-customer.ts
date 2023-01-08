import { PersistenceCustomer } from '@domain/entities/customer';

export interface RegisterCustomer {
  register: (customer: PersistenceCustomer) => Promise<boolean>;
}
