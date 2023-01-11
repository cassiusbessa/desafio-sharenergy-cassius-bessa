import { CustomerRepository } from '@domain/repositories/customer-repository';
import {
  CustomerProps,
  PersistenceCustomer,
} from '@domain/entities/customer/customer';
export class InMemoryCustomerRepository implements CustomerRepository {
  private customers: PersistenceCustomer[] = [];
  register(customer: PersistenceCustomer): Promise<PersistenceCustomer> {
    this.customers.push(customer);
    return Promise.resolve(customer);
  }
  getByEmail(email: string): Promise<PersistenceCustomer | null> {
    const customer = this.customers.find(
      (customer) => customer.email === email,
    );
    if (!customer) {
      return Promise.resolve(null);
    }
    return Promise.resolve(customer);
  }
  update(
    customer: Partial<PersistenceCustomer>,
    email: string,
  ): Promise<PersistenceCustomer | null> {
    const index = this.customers.findIndex(
      (customer) => customer.email === email,
    );
    if (index === -1) {
      return Promise.resolve(null);
    }
    customer.id = this.customers[index].id;
    this.customers[index] = { ...this.customers[index], ...customer };
    return Promise.resolve(this.customers[index]);
  }
  delete(id: string): Promise<boolean> {
    const index = this.customers.findIndex((customer) => customer.id === id);
    if (index === -1) {
      return Promise.resolve(false);
    }
    this.customers.splice(index, 1);
    return Promise.resolve(true);
  }
  getAll(): Promise<PersistenceCustomer[]> {
    return Promise.resolve(this.customers);
  }
}
