import { DbGetAllCustomer } from '@data/use-cases/db-customer-use-cases/db-get-all-customer/db-get-all-customer';
import { DbRegisterCustomer } from '@data/use-cases/db-customer-use-cases/db-register-customer/db-register-customer';
import { InMemoryCustomerRepository } from '@infra/in-memory-repositories/in-memory-customer-repositoriy';

export const makeDbGetAllCustomerMock = () => {
  const customerRepositoryStub = new InMemoryCustomerRepository();
  const registerCustomer = new DbRegisterCustomer(customerRepositoryStub);
  const sut = new DbGetAllCustomer(customerRepositoryStub);
  return { sut, customerRepositoryStub, registerCustomer };
};
