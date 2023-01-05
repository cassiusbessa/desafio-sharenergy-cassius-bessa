import { Address, AddressProps } from './address';

export const anyAddressProps: AddressProps = {
  street: 'any_street',
  number: 'any_number',
  complement: 'any_complement',
  neighborhood: 'any_neighborhood',
  city: 'any_city',
  state: 'any_state',
  country: 'any_country',
  zipcode: 'any_zipcode',
};

class SutFactory {
  public sutProps: AddressProps;
  constructor(sutProps: AddressProps) {
    this.sutProps = sutProps;
  }
  makeSut(): Address {
    return new Address(this.sutProps);
  }
}

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
    const sut = new SutFactory(sutProps).makeSut();
    expect(sut).toBeTruthy();
  });

  it("2 - shouldn't be able to create a Address with street less than 1 characters", () => {
    const sutProps: AddressProps = { ...anyAddressProps, street: '' };
    const sut = new SutFactory(sutProps);
    expect(() => sut.makeSut()).toThrowError(
      'Street must have at least 1 character',
    );
  });

  it("3 - shouldn't be able to create a Address with number less than 1 characters", () => {
    const sutProps: AddressProps = { ...anyAddressProps, number: '' };
    const sut = new SutFactory(sutProps);
    expect(() => sut.makeSut()).toThrowError(
      'Number must have at least 1 character',
    );
  });

  it("4 - shouldn't be able to create a Address with neighborhood less than 3 characters", () => {
    const sutProps: AddressProps = { ...anyAddressProps, neighborhood: '12' };
    const sut = new SutFactory(sutProps);
    expect(() => sut.makeSut()).toThrowError(
      'Neighborhood must have at least 3 characters',
    );
  });

  it("5 - shouldn't be able to create a Address with city less than 3 characters", () => {
    const sutProps: AddressProps = { ...anyAddressProps, city: '12' };
    const sut = new SutFactory(sutProps);
    expect(() => sut.makeSut()).toThrowError(
      'City must have at least 3 characters',
    );
  });

  it("6 - shouldn't be able to create a Address with state less than 2 characters", () => {
    const sutProps: AddressProps = { ...anyAddressProps, state: '1' };
    expect(() => new Address(sutProps)).toThrowError(
      'State must have at least 2 characters',
    );
  });

  it("7 - shouldn't be able to create a Address with country less than 3 characters", () => {
    const sutProps: AddressProps = { ...anyAddressProps, country: '12' };
    const sut = new SutFactory(sutProps);
    expect(() => sut.makeSut()).toThrowError(
      'Country must have at least 3 characters',
    );
  });

  it("8 - shouldn't be able to create a Address with zipcode less than 8 characters", () => {
    const sutProps: AddressProps = { ...anyAddressProps, zipcode: '1234567' };
    const sut = new SutFactory(sutProps);
    expect(() => sut.makeSut()).toThrowError(
      'Zipcode must have at least 8 characters',
    );
  });

  it('9 - should be able to get the full address', () => {
    const sut = new SutFactory(anyAddressProps).makeSut();
    expect(sut.getFullAddress()).toBe(
      'any_street, any_number, any_complement, any_neighborhood, any_city, any_state, any_country, any_zipcode',
    );
  });
});
