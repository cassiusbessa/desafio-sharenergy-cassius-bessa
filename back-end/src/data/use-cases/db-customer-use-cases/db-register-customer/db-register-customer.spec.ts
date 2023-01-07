import { InMemoryCustomerRepository } from '@infra/in-memory-repositories/in-memory-customer-repositoriy';
import { anyCustomerProps } from '@domain/entities/customer.spec';
import { makeCustomer } from '../../../../factories/makeCustomer';
import { DbRegisterCustomer } from './db-register-customer';
import { PersistenceCustomer } from '@domain/entities/customer';

const defaultPersistenceCustomer: PersistenceCustomer = {
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

jest.mock('../../../../factories/makeCustomer', () => ({
  makeCustomer: jest.fn().mockImplementation(() => ({
    getAllProps: jest.fn().mockReturnValue(defaultPersistenceCustomer),
  })),
}));

const makeSut = () => {
  const customerRepositoryStub = new InMemoryCustomerRepository();
  const sut = new DbRegisterCustomer(customerRepositoryStub);
  return { sut, customerRepositoryStub };
};

describe('DbRegisterCustomer', () => {
  it('should call CustomerRepository with correct values', async () => {
    const { sut, customerRepositoryStub } = makeSut();
    const registerSpy = jest.spyOn(customerRepositoryStub, 'register');
    makeCustomer(anyCustomerProps);
    sut.register(anyCustomerProps);
    expect(registerSpy).toHaveBeenCalledWith(defaultPersistenceCustomer);
  });
});
