import { ControllerDeleteCustomer } from '@presentation/controllers/delete-customer/controller-delete-customer';
import { makeDbDeleteCustomerMock } from '../use-cases/db-delete-customer.mock';

export const defaultControllerDeleteCustomerMock = () => {
  const { sut: deleteCustomer } = makeDbDeleteCustomerMock();
  const sut = new ControllerDeleteCustomer(deleteCustomer);
  return { sut, deleteCustomer };
};
