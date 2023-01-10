import { anyAddressProps } from '../address/address.spec';
import { Customer, CustomerProps } from './customer';
import { Address } from '../address/address';
import { makeSut as makeCustomerValidor } from './validators/customer-validators.spec';

const makeSut = (props: CustomerProps) => {
  const { sut: customerValidator } = makeCustomerValidor();
  const sut = new Customer(props, customerValidator);
  return { sut, customerValidator };
};

describe('Customer', () => {
  it('1 - should be able to create a Customer', () => {
    const sutProps: CustomerProps = {
      name: 'any_name',
      email: 'any_email',
      phone: 'any_phone',
      cpf: 'any_cpf',
      address: new Address(anyAddressProps),
    };
    const { sut } = makeSut(sutProps);
    expect(sut).toBeTruthy();
  });

  it('2 - should call isValid with correct parameters', () => {
    const sutProps: CustomerProps = {
      name: 'any_name',
      email: 'any_email',
      phone: 'any_phone',
      cpf: 'any_cpf',
      address: new Address(anyAddressProps),
    };
    const { sut, customerValidator } = makeSut(sutProps);
    const isValidSpy = jest.spyOn(customerValidator, 'validate');
    sut.isValid();
    expect(isValidSpy).toHaveBeenCalledWith(
      sutProps.name,
      sutProps.email,
      sutProps.phone,
      sutProps.cpf,
    );
  });
});
