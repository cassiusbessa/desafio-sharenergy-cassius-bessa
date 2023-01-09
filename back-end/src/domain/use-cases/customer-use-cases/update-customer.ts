import { CustomerProps } from '@domain/entities/customer/customer';

export interface UpdateCustomer {
  update: (customer: CustomerProps, email: string) => Promise<boolean>;
}
