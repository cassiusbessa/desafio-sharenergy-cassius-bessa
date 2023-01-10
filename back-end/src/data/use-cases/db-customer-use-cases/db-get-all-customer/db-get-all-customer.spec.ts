import { defaultPersistenceCustomer } from '@tests/customer/mocks/entities/default-entitie';
import { makeDbGetAllCustomerMock as makeSut } from '@tests/customer/mocks/use-cases/db-get-all-customer.mock';

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
