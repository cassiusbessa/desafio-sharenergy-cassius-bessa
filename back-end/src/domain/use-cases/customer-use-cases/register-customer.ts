import { CustomerProps } from '@domain/entities/customer/customer';

export interface RegisterCustomer {
  register: (customer: CustomerProps) => Promise<boolean>;
}
