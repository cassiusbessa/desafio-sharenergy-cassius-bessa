import {
  CustomerProps,
  PersistenceCustomer,
} from '@domain/entities/customer/customer';

export interface RegisterCustomer {
  register: (customer: CustomerProps) => Promise<PersistenceCustomer | false>;
}
