import { CustomerProps, PersistenceCustomer } from '@domain/entities/customer';

export interface RegisterCustomer {
  register: (customer: CustomerProps) => Promise<PersistenceCustomer>;
}
