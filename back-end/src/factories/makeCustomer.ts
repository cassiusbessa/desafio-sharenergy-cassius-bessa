import { Customer, CustomerProps } from 'src/domain/entities/customer';
import {
  CpfValidatorAdapter,
  EmailValidatorAdapter,
  PhoneValidatorAdapter,
} from 'src/infra/customer-validators';

export const makeCustomer = (customerProps: CustomerProps): Customer => {
  const emailValidator = new EmailValidatorAdapter();
  const cpfValidator = new CpfValidatorAdapter();
  const phoneValidator = new PhoneValidatorAdapter();

  const customer = new Customer(
    customerProps,
    emailValidator,
    cpfValidator,
    phoneValidator,
  );
  return customer;
};
