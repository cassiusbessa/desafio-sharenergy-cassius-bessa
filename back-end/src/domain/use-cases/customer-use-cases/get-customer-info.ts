import { CustomerProps } from 'src/domain/entities/customer';

export interface GetCustomerInfo {
  get: (id: string) => Promise<CustomerProps & { id: string }>;
}
