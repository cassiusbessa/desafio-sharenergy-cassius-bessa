import { Address, AddressProps } from './address';

const anyAddressProps: AddressProps = {
  street: 'any_street',
  number: 'any_number',
  complement: 'any_complement',
  neighborhood: 'any_neighborhood',
  city: 'any_city',
  state: 'any_state',
  country: 'any_country',
  zipcode: 'any_zipcode',
};

interface SutTypes {
  sut: Address;
}

const makeSut = (AddressProps: AddressProps = anyAddressProps): SutTypes => {
  const sut = new Address(AddressProps);
  return { sut };
};

describe('Address', () => {
  it('1 - should be able to create a Address', () => {
    const sutProps: AddressProps = {
      street: 'valid_street',
      number: 'valid_number',
      complement: 'valid_complement',
      neighborhood: 'valid_neighborhood',
      city: 'valid_city',
      state: 'valid_state',
      country: 'valid_country',
      zipcode: 'valid_zipcode',
    };
    const sut = new Address(sutProps);
    expect(sut).toBeTruthy();
  });

  it("2 - shouldn't be able to create a Address with street less than 1 characters", () => {
    const sutProps: AddressProps = { ...anyAddressProps, street: '' };
    expect(() => new Address(sutProps)).toThrowError(
      'Street must have at least 1 character',
    );
  });

  it("3 - shouldn't be able to create a Address with number less than 1 characters", () => {
    const sutProps: AddressProps = { ...anyAddressProps, number: '' };
    expect(() => new Address(sutProps)).toThrowError(
      'Number must have at least 1 character',
    );
  });

  it("4 - shouldn't be able to create a Address with neighborhood less than 3 characters", () => {
    const sutProps: AddressProps = { ...anyAddressProps, neighborhood: '12' };
    expect(() => new Address(sutProps)).toThrowError(
      'Neighborhood must have at least 3 characters',
    );
  });

  it("5 - shouldn't be able to create a Address with city less than 3 characters", () => {
    const sutProps: AddressProps = { ...anyAddressProps, city: '12' };
    expect(() => new Address(sutProps)).toThrowError(
      'City must have at least 3 characters',
    );
  });
});
