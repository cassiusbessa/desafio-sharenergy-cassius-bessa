import { PersistenceCustomer } from '@domain/entities/customer';

export interface GetCustomerInfo {
  get: (id: string) => Promise<PersistenceCustomer>;
}
