import { Customer } from 'src/domain/entities/customer';

export interface GetCustomerInfo {
  get: (id: string) => Promise<Customer>;
}
