import { PersistenceCustomer } from '@domain/entities/customer';

export interface GetCustomerByEmail {
  get: (email: string) => Promise<PersistenceCustomer>;
}
