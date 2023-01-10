import { Customer, CustomerProps } from '@domain/entities/customer/customer';
import {
  CustomerValidators,
  PropsValidators,
} from '@domain/entities/customer/validators/customer-validators';

export interface CustomerFactoryReturn {
  customer: Customer;
  validator: CustomerValidators;
}

export abstract class CustomerFactory {
  public propsValidator: PropsValidators;

  public create: (customerProps: CustomerProps) => CustomerFactoryReturn;
}
