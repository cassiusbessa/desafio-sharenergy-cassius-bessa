import { CustomerProps } from 'src/domain/entities/customer';

export interface RegisterCustomer {
  register: (
    customer: CustomerProps,
  ) => Promise<CustomerProps & { id: string }>;
}
