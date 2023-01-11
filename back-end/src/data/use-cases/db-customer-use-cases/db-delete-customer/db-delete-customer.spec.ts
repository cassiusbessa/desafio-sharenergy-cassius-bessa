import { defaultPersistenceCustomer } from '@tests/customer/mocks/entities/default-entitie.mock';
import { makeDbDeleteCustomerMock as makeSut } from '@tests/customer/mocks/use-cases/db-delete-customer.mock';

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
