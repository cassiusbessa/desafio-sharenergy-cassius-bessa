import { PersistenceCustomer } from 'src/domain/entities/customer';

export interface GetAllCustomer {
  getAll: () => Promise<PersistenceCustomer[]>;
}
