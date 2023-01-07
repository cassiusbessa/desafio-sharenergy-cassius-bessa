import { PersistenceCustomer } from '@domain/entities/customer';

export interface GetAllCustomer {
  getAll: () => Promise<PersistenceCustomer[]>;
}
