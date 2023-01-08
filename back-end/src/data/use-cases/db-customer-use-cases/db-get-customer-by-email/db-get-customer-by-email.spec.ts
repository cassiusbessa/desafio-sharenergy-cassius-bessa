import { defaultPersistenceCustomer } from './../db-register-customer/db-register-customer.spec';
import { DbRegisterCustomer } from './../db-register-customer/db-register-customer';
import { InMemoryCustomerRepository } from '@infra/in-memory-repositories/in-memory-customer-repositoriy';
import { DbGetCustomerByEmail } from './db-get-customer-by-email';

const makeSut = () => {
  const customerRepositoryStub = new InMemoryCustomerRepository();
  const registerCustomer = new DbRegisterCustomer(customerRepositoryStub);
  const sut = new DbGetCustomerByEmail(customerRepositoryStub);
  return { sut, customerRepositoryStub, registerCustomer };
};

describe('DbGetCustomerByEmail', () => {
  it('1 - should call CustomerRepository with correct values', async () => {
    const { sut, customerRepositoryStub, registerCustomer } = makeSut();
    const getByEmailSpy = jest.spyOn(customerRepositoryStub, 'getByEmail');
    await registerCustomer.register(defaultPersistenceCustomer);
    await sut.get('any_email');
    expect(getByEmailSpy).toHaveBeenCalledWith('any_email');
  });

  it('2 - should throw if CustomerRepository throws', async () => {
    const { sut, customerRepositoryStub } = makeSut();
    jest
      .spyOn(customerRepositoryStub, 'getByEmail')
      .mockReturnValueOnce(Promise.reject(new Error()));
    expect(sut.get('any_email')).rejects.toThrow();
  });
});
