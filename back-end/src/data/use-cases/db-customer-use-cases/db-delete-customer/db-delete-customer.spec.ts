import { InMemoryCustomerRepository } from '@infra/in-memory-repositories/in-memory-customer-repositoriy';
import { DbRegisterCustomer } from '../db-register-customer/db-register-customer';
import { defaultPersistenceCustomer } from '../db-register-customer/db-register-customer.spec';
import { DbDeleteCustomer } from './db-delete-customer';

const makeSut = () => {
  const customerRepositoryStub = new InMemoryCustomerRepository();
  const registerCustomer = new DbRegisterCustomer(customerRepositoryStub);
  const sut = new DbDeleteCustomer(customerRepositoryStub);
  return { sut, customerRepositoryStub, registerCustomer };
};

describe('DbDeleteCustomer', () => {
  it('1 - should call CustomerRepository with correct values', async () => {
    const { sut, customerRepositoryStub } = makeSut();
    const deleteSpy = jest.spyOn(customerRepositoryStub, 'delete');
    await sut.delete('any_id');
    expect(deleteSpy).toHaveBeenCalledWith('any_id');
  });

  it('2 - should throw if CustomerRepository throws', async () => {
    const { sut, customerRepositoryStub } = makeSut();
    jest
      .spyOn(customerRepositoryStub, 'delete')
      .mockReturnValueOnce(Promise.reject(new Error()));
    expect(sut.delete('any_id')).rejects.toThrow();
  });

  it('3 - should return true on success', async () => {
    const { sut, registerCustomer } = makeSut();
    await registerCustomer.register(defaultPersistenceCustomer);
    const result = await sut.delete('any_id');
    expect(result).toBe(true);
  });
});
