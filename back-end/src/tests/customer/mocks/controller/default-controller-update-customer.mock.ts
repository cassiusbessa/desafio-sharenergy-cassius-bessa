import { ControllerUpdateCustomer } from '@presentation/controllers/update-customer/controller-update-customer';
import { makeDefaultAddressValidator } from '../entities/validators/default-address-validator.mock';
import { makeDefaultCustomerValidator } from '../entities/validators/default-customer-validator.mock';
import { makeDbUpdateCustomerMock } from '../use-cases/db-update-customer.mock';

export const makeDefaultControllerUpdateCustomer = () => {
  const { sut: updateCustomer } = makeDbUpdateCustomerMock();
  const { sut: customerValidator } = makeDefaultCustomerValidator();
  const { sut: addressValidator } = makeDefaultAddressValidator();
  const sut = new ControllerUpdateCustomer(
    updateCustomer,
    customerValidator,
    addressValidator,
  );
  return { sut, updateCustomer, customerValidator, addressValidator };
};
