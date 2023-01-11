import { defaultPersistenceCustomer } from '@tests/customer/mocks/entities/default-entitie.mock';
import { makeDbRegisterCustomerMock as makeSut } from '@tests/customer/mocks/use-cases/db-register-customer.mock';

describe('DbRegisterCustomer', () => {
  it('1 - should call CustomerRepository with correct values', async () => {
    const { sut, customerRepositoryStub } = makeSut();
    const registerSpy = jest.spyOn(customerRepositoryStub, 'register');
    await sut.register(defaultPersistenceCustomer);
    expect(registerSpy).toHaveBeenCalledWith(defaultPersistenceCustomer);
  });

  it('2 - should throw if CustomerRepository throws', async () => {
    const { sut, customerRepositoryStub } = makeSut();
    jest
      .spyOn(customerRepositoryStub, 'register')
      .mockReturnValueOnce(Promise.reject(new Error()));
    expect(sut.register(defaultPersistenceCustomer)).rejects.toThrow();
  });

  it('3 - should return false on if email already exists', async () => {
    const { sut, customerRepositoryStub } = makeSut();
    jest
      .spyOn(customerRepositoryStub, 'register')
      .mockReturnValueOnce(Promise.resolve(false));
    const isValid = await sut.register(defaultPersistenceCustomer);
    expect(isValid).toBe(false);
  });

  it('4 - should return true on success', async () => {
    const { sut } = makeSut();
    const isValid = await sut.register(defaultPersistenceCustomer);
    expect(isValid).toBe(true);
  });
});
