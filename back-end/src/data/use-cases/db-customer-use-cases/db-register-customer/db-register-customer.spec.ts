import { Customer } from '@domain/entities/customer/customer';
import { defaultPersistenceCustomer } from '@tests/customer/mocks/entities/default-entitie.mock';
import { makeDbRegisterCustomerMock as makeSut } from '@tests/customer/mocks/use-cases/db-register-customer.mock';

describe('DbRegisterCustomer', () => {
  it('1 - should call static create method with correct values', async () => {
    const { sut } = makeSut();
    const createSpy = jest.spyOn(Customer, 'create');
    await sut.register(defaultPersistenceCustomer);
    expect(createSpy).toHaveBeenCalledWith(defaultPersistenceCustomer);
  });
  it('2 - should call CustomerRepository with correct values', async () => {
    const { sut, customerRepositoryStub } = makeSut();
    const registerSpy = jest.spyOn(customerRepositoryStub, 'register');
    await sut.register(defaultPersistenceCustomer);
    expect(registerSpy).toHaveBeenCalledWith(defaultPersistenceCustomer);
  });

  it('3 - should throw if CustomerRepository throws', async () => {
    const { sut, customerRepositoryStub } = makeSut();
    jest
      .spyOn(customerRepositoryStub, 'register')
      .mockReturnValueOnce(Promise.reject(new Error()));
    expect(sut.register(defaultPersistenceCustomer)).rejects.toThrow();
  });

  it('4 - should return false on if email already exists', async () => {
    const { sut, customerRepositoryStub } = makeSut();
    jest
      .spyOn(customerRepositoryStub, 'register')
      .mockReturnValueOnce(Promise.resolve(false));
    const isValid = await sut.register(defaultPersistenceCustomer);
    expect(isValid).toBe(false);
  });

  it('5 - should return true on success', async () => {
    const { sut } = makeSut();
    const isValid = await sut.register(defaultPersistenceCustomer);
    expect(isValid).toBe(true);
  });
});
