import { DbRegisterCustomer } from '@data/use-cases/db-customer-use-cases/db-register-customer/db-register-customer';
import { InMemoryCustomerRepository } from '@infra/in-memory-repositories/in-memory-customer-repositoriy';

export const makeDbRegisterCustomerMock = () => {
  const customerRepositoryStub = new InMemoryCustomerRepository();
  const sut = new DbRegisterCustomer(customerRepositoryStub);
  return { sut, customerRepositoryStub };
};
