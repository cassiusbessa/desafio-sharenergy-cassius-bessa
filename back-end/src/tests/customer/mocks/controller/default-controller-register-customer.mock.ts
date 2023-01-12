import { ControllerRegisterCustomer } from '@presentation/controllers/register-costumer/controller-register-costumer';
import { makeDefaultAddressValidator } from '../entities/validators/default-address-validator.mock';
import { makeDefaultCustomerValidator } from '../entities/validators/default-customer-validator.mock';
import { makeDbRegisterCustomerMock } from '../use-cases/db-register-customer.mock';

export const makeDefaultControllerRegisterCustomer = () => {
  const { sut: registerCustomer } = makeDbRegisterCustomerMock();
  const { sut: customerValidator } = makeDefaultCustomerValidator();
  const { sut: addressValidator } = makeDefaultAddressValidator();
  const sut = new ControllerRegisterCustomer(
    registerCustomer,
    customerValidator,
    addressValidator,
  );
  return { sut, registerCustomer, customerValidator, addressValidator };
};
