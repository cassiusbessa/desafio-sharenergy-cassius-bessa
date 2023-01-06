import { CustomerProps } from 'src/domain/entities/customer';

export interface GetAllCustomer {
  getAll: () => Promise<CustomerProps & { id: string }[]>;
}
