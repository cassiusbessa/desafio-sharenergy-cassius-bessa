import { InMemoryCustomerRepository } from '@infra/in-memory-repositories/in-memory-customer-repositoriy';
import { DbRegisterCustomer } from '../db-register-customer/db-register-customer';
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
});
