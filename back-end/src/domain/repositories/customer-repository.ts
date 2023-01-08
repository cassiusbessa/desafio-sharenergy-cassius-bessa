import { CustomerProps, PersistenceCustomer } from '../entities/customer';

export abstract class CustomerRepository {
  abstract register(customer: PersistenceCustomer): Promise<boolean>;
  abstract getByEmail(email: string): Promise<PersistenceCustomer | null>;
  abstract update(
    customer: Partial<PersistenceCustomer>,
    email: string,
  ): Promise<boolean>;
  abstract delete(id: string): Promise<boolean>;
  abstract getAll(): Promise<PersistenceCustomer[]>;
}
