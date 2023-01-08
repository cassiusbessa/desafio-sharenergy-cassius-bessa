import { PersistenceCustomer } from './../../../../domain/entities/customer';
import { DbUpdateCustomer } from './db-update-customer';
import { InMemoryCustomerRepository } from '@infra/in-memory-repositories/in-memory-customer-repositoriy';
import { DbRegisterCustomer } from '../db-register-customer/db-register-customer';
import { defaultPersistenceCustomer } from '../db-register-customer/db-register-customer.spec';

const updatedCustomer: Partial<PersistenceCustomer> = {
  name: 'updated name',
  email: 'updated email',
};

const makeSut = () => {
  const customerRepositoryStub = new InMemoryCustomerRepository();
  const registerCustomer = new DbRegisterCustomer(customerRepositoryStub);
  const sut = new DbUpdateCustomer(customerRepositoryStub);
  return { sut, customerRepositoryStub, registerCustomer };
};
describe('DbUpdateCustomer', () => {
  it('1 - should call CustomerRepository with correct values', async () => {
    const { sut, customerRepositoryStub, registerCustomer } = makeSut();
    const updateSpy = jest.spyOn(customerRepositoryStub, 'update');
    await registerCustomer.register(defaultPersistenceCustomer);
    await sut.update(updatedCustomer, defaultPersistenceCustomer.email);
    expect(updateSpy).toHaveBeenCalledWith(
      updatedCustomer,
      defaultPersistenceCustomer.email,
    );
  });
});