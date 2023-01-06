import { CustomerProps } from 'src/domain/entities/customer';

export interface UpdateCustomer {
  update: (
    customer: CustomerProps,
    id: string,
  ) => Promise<CustomerProps & { id: string }>;
}
