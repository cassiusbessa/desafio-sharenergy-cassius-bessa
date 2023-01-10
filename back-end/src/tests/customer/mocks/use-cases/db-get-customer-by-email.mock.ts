import { DbGetCustomerByEmail } from '@data/use-cases/db-customer-use-cases/db-get-customer-by-email/db-get-customer-by-email';
import { DbRegisterCustomer } from '@data/use-cases/db-customer-use-cases/db-register-customer/db-register-customer';
import { InMemoryCustomerRepository } from '@infra/in-memory-repositories/in-memory-customer-repositoriy';

export const makeDbGetByEmailCustomerMock = () => {
  const customerRepositoryStub = new InMemoryCustomerRepository();
  const registerCustomer = new DbRegisterCustomer(customerRepositoryStub);
  const sut = new DbGetCustomerByEmail(customerRepositoryStub);
  return { sut, customerRepositoryStub, registerCustomer };
};
