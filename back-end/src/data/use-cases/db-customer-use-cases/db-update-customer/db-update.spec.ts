import { PersistenceCustomer } from '@domain/entities/customer/customer';
import { defaultPersistenceCustomer } from '@tests/customer/mocks/entities/default-entitie.mock';
import { makeDbUpdateCustomerMock as makeSut } from '@tests/customer/mocks/use-cases/db-update-customer.mock';

const updatedCustomer: Partial<PersistenceCustomer> = {
  name: 'updated name',
  email: 'updated email',
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

  it('2 - should throw if CustomerRepository throws', async () => {
    const { sut, customerRepositoryStub, registerCustomer } = makeSut();
    jest
      .spyOn(customerRepositoryStub, 'update')
      .mockReturnValueOnce(Promise.reject(new Error()));
    await registerCustomer.register(defaultPersistenceCustomer);
    expect(
      sut.update(updatedCustomer, defaultPersistenceCustomer.email),
    ).rejects.toThrow();
  });

  it('3 - should return a updated customer on success', async () => {
    const { sut, registerCustomer } = makeSut();
    await registerCustomer.register(defaultPersistenceCustomer);
    const isUpdated = await sut.update(
      updatedCustomer,
      defaultPersistenceCustomer.email,
    );
    expect(isUpdated).toMatchObject({
      ...defaultPersistenceCustomer,
      ...updatedCustomer,
    });
  });
});
