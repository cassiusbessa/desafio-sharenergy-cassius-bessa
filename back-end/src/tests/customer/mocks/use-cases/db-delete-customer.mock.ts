import { DbDeleteCustomer } from '@data/use-cases/db-customer-use-cases/db-delete-customer/db-delete-customer';
import { DbRegisterCustomer } from '@data/use-cases/db-customer-use-cases/db-register-customer/db-register-customer';
import { InMemoryCustomerRepository } from '@infra/in-memory-repositories/in-memory-customer-repositoriy';

export const makeDbDeleteCustomerMock = () => {
  const customerRepositoryStub = new InMemoryCustomerRepository();
  const registerCustomer = new DbRegisterCustomer(customerRepositoryStub);
  const sut = new DbDeleteCustomer(customerRepositoryStub);
  return { sut, customerRepositoryStub, registerCustomer };
};
