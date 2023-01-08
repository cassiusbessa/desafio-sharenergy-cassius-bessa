import { InMemoryCustomerRepository } from '@infra/in-memory-repositories/in-memory-customer-repositoriy';
import { DbRegisterCustomer } from '../db-register-customer/db-register-customer';
import { defaultPersistenceCustomer } from '../db-register-customer/db-register-customer.spec';
import { DbGetAllCustomer } from './db-get-all-customer';

const makeSut = () => {
  const customerRepositoryStub = new InMemoryCustomerRepository();
  const registerCustomer = new DbRegisterCustomer(customerRepositoryStub);
  const sut = new DbGetAllCustomer(customerRepositoryStub);
  return { sut, customerRepositoryStub, registerCustomer };
};

describe('DbGetAllCustomer', () => {
  it('1 - should call CustomerRepository with correct values', async () => {
    const { sut, customerRepositoryStub } = makeSut();
    const getAllSpy = jest.spyOn(customerRepositoryStub, 'getAll');
    await sut.getAll();
    expect(getAllSpy).toHaveBeenCalled();
  });

  it('2 - should throw if CustomerRepository throws', async () => {
    const { sut, customerRepositoryStub } = makeSut();
    jest
      .spyOn(customerRepositoryStub, 'getAll')
      .mockReturnValueOnce(Promise.reject(new Error()));
    expect(sut.getAll()).rejects.toThrow();
  });

  it('3 - should return a list of customers on success', async () => {
    const { sut, registerCustomer } = makeSut();
    await registerCustomer.register(defaultPersistenceCustomer);
    const result = await sut.getAll();
    expect(result).toEqual([defaultPersistenceCustomer]);
  });
});
