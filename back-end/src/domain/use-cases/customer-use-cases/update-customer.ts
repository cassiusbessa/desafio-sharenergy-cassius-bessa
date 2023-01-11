import { PersistenceCustomer } from '@domain/entities/customer/customer';

export interface UpdateCustomer {
  update: (
    customer: Partial<PersistenceCustomer>,
    email: string,
  ) => Promise<PersistenceCustomer | boolean>;
}
