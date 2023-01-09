import { PersistenceCustomer } from '@domain/entities/customer/customer';

export interface GetCustomerByEmail {
  get: (email: string) => Promise<PersistenceCustomer>;
}
