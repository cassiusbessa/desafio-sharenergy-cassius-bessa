import { CustomerProps, PersistenceCustomer } from '../entities/customer';

export abstract class CustomerRepository {
  abstract register(customer: PersistenceCustomer): Promise<boolean>;
  abstract getInfo(id: string): Promise<PersistenceCustomer | null>;
  abstract update(customer: CustomerProps, id: string): Promise<boolean>;
  abstract delete(id: string): Promise<boolean>;
  abstract getAll(): Promise<PersistenceCustomer[]>;
}
