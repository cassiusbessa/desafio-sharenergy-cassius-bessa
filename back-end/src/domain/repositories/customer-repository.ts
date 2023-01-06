import { Customer, CustomerProps } from '../entities/customer';

export abstract class CustomerRepository {
  abstract register(customer: CustomerProps & { id: string }): Promise<void>;
  abstract getInfo(
    id: string,
  ): Promise<(CustomerProps & { id: string }) | null>;
  abstract update(customer: CustomerProps, id: string): Promise<void>;
  abstract delete(id: string): Promise<void>;
  abstract getAll(): Promise<CustomerProps & { id: string }[]>;
}
