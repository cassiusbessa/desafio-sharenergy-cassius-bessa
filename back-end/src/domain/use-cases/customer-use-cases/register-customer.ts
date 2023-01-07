import {
  CustomerProps,
  PersistenceCustomer,
} from 'src/domain/entities/customer';

export interface RegisterCustomer {
  register: (customer: CustomerProps) => Promise<PersistenceCustomer>;
}
