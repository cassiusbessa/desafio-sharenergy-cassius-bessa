import { PersistenceCustomer } from '@domain/entities/customer/customer';

export interface GetAllCustomer {
  getAll: () => Promise<PersistenceCustomer[]>;
}
