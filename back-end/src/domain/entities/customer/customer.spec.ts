import { anyAddressProps } from '../address/address.spec';
import { Customer, CustomerProps } from './customer';
import { Address } from '../address/address';

describe('Customer', () => {
  it('1 - should be able to create a Customer', () => {
    const sutProps: CustomerProps = {
      name: 'any_name',
      email: 'any_email',
      phone: 'any_phone',
      cpf: 'any_cpf',
      address: new Address(anyAddressProps),
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
      address: new Address(anyAddressProps),
    };
    const createSpy = jest.spyOn(Customer, 'create');
    Customer.create(sutProps);
    expect(createSpy).toHaveBeenCalledWith(sutProps);
  });
});
