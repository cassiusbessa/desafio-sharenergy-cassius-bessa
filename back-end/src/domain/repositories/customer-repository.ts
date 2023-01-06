import { Customer, CustomerProps } from '../entities/customer';

export abstract class CustomerRepository {
  abstract register(customer: Customer): Promise<void>;
  abstract getInfo(id: string): Promise<Customer | null>;
  abstract update(customer: Customer): Promise<void>;
  abstract delete(id: string): Promise<void>;
  abstract getAll(): Promise<Customer[]>;
}
