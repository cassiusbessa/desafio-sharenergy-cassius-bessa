import {
  CustomerProps,
  PersistenceCustomer,
} from '../entities/customer/customer';

export abstract class CustomerRepository {
  abstract register(customer: CustomerProps): Promise<PersistenceCustomer>;
  abstract getByEmail(email: string): Promise<PersistenceCustomer | null>;
  abstract update(
    customer: Partial<PersistenceCustomer>,
    id: string,
  ): Promise<PersistenceCustomer | false>;
  abstract delete(id: string): Promise<boolean>;
  abstract getAll(): Promise<PersistenceCustomer[]>;
}
