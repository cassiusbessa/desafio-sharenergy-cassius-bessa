import { DbRegisterCustomer } from '@data/use-cases/db-customer-use-cases/db-register-customer/db-register-customer';
import { DbUpdateCustomer } from '@data/use-cases/db-customer-use-cases/db-update-customer/db-update-customer';
import { InMemoryCustomerRepository } from '@infra/in-memory-repositories/in-memory-customer-repositoriy';

export const makeDbUpdateCustomerMock = () => {
  const customerRepositoryStub = new InMemoryCustomerRepository();
  const registerCustomer = new DbRegisterCustomer(customerRepositoryStub);
  const sut = new DbUpdateCustomer(customerRepositoryStub);
  return { sut, customerRepositoryStub, registerCustomer };
};
