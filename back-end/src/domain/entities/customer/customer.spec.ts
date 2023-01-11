import { Customer, CustomerProps } from './customer';
import { anyAddressProps } from '@tests/customer/mocks/entities/default-address.mock';

describe('Customer', () => {
  it('1 - should be able to create a Customer', () => {
    const sutProps: CustomerProps = {
      name: 'any_name',
      email: 'any_email',
      phone: 'any_phone',
      cpf: 'any_cpf',
      address: anyAddressProps,
    };
    const sut = new Customer(sutProps);
    expect(sut).toBeTruthy();
  });
  it('2 - should call create with correct param', () => {
    const sutProps: CustomerProps = {
      name: 'any_name',
      email: 'any_email',
      phone: 'any_phone',
      cpf: 'any_cpf',
      address: anyAddressProps,
    };
    const createSpy = jest.spyOn(Customer, 'create');
    Customer.create(sutProps);
    expect(createSpy).toHaveBeenCalledWith(sutProps);
  });
});
