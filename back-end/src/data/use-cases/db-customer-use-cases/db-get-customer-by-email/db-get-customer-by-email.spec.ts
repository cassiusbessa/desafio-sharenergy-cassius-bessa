import { defaultPersistenceCustomer } from '@tests/customer/mocks/entities/default-entitie';
import { makeDbGetByEmailCustomerMock as makeSut } from '@tests/customer/mocks/use-cases/db-get-customer-by-email.mock';

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

  it('3 - should return null if email does not exists', async () => {
    const { sut } = makeSut();
    const customer = await sut.get('non_existent_email');
    expect(customer).toBeNull();
  });

  it('4 - should return customer on success', async () => {
    const { sut, registerCustomer } = makeSut();
    await registerCustomer.register(defaultPersistenceCustomer);
    const customer = await sut.get('any_email');
    expect(customer).toEqual(defaultPersistenceCustomer);
  });
});
