import { CustomerProps, PersistenceCustomer } from '@domain/entities/customer';

export interface UpdateCustomer {
  update: (
    customer: CustomerProps,
    email: string,
  ) => Promise<PersistenceCustomer | null>;
}
