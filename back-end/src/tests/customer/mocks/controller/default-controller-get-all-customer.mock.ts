import { ControllerGetAllCustomer } from '@presentation/controllers/get-all-customer/controller-get-all-customer';
import { makeDbGetAllCustomerMock } from '../use-cases/db-get-all-customer.mock';

export const makeDefaultControllerGetAllCustomer = () => {
  const { sut: getAllCustomer } = makeDbGetAllCustomerMock();
  const sut = new ControllerGetAllCustomer(getAllCustomer);
  return { sut, getAllCustomer };
};
