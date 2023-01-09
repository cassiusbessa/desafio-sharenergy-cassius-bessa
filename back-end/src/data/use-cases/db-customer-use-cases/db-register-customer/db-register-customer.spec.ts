import { InMemoryCustomerRepository } from '@infra/in-memory-repositories/in-memory-customer-repositoriy';
import { DbRegisterCustomer } from './db-register-customer';
import { PersistenceCustomer } from '@domain/entities/customer/customer';

export const defaultPersistenceCustomer: PersistenceCustomer = {
  id: 'any_id',
  name: 'any_name',
  email: 'any_email',
  cpf: 'any_cpf',
  phone: 'any_phone',
  address: {
    street: 'any_street',
    number: 'any_number',
    complement: 'any_complement',
    neighborhood: 'any_neighborhood',
    city: 'any_city',
    state: 'any_state',
    country: 'any_country',
    zipcode: 'any_zipcode',
  },
};

const makeSut = () => {
  const customerRepositoryStub = new InMemoryCustomerRepository();
  const sut = new DbRegisterCustomer(customerRepositoryStub);
  return { sut, customerRepositoryStub };
};

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
