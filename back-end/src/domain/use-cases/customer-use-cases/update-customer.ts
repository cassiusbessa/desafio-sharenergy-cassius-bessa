import { CustomerProps } from 'src/domain/entities/customer';

export interface UpdateCustomer {
  update: (customer: CustomerProps) => Promise<CustomerProps & { id: string }>;
}
