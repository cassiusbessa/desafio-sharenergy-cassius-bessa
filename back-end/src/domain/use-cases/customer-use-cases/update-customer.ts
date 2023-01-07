import { CustomerProps, PersistenceCustomer } from '@domain/entities/customer';

export interface UpdateCustomer {
  update: (customer: CustomerProps, id: string) => Promise<PersistenceCustomer>;
}
