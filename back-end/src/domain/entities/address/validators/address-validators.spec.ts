import { anyAddressProps } from '@tests/customer/mocks/entities/default-address.mock';
import { AddressValidators } from './address-validators';
const sut = new AddressValidators();

describe('AddressValidators', () => {
  it('1 - should return false if street is less than 1 character', () => {
    const { result, message } = sut.validate({
      ...anyAddressProps,
      street: '',
    });
    expect(result).toBeFalsy();
    expect(message).toBe('Street must have at least 1 character');
  });

  it('2 - should return false if number is less than 1 character', () => {
    const { result, message } = sut.validate({
      ...anyAddressProps,
      number: '',
    });
    expect(result).toBeFalsy();
    expect(message).toBe('Number must have at least 1 character');
  });

  it('3 - should return false if city is less than 3 characters', () => {
    const { result, message } = sut.validate({
      ...anyAddressProps,
      city: '12',
    });
    expect(result).toBeFalsy();
    expect(message).toBe('City must have at least 3 characters');
  });

  it('4 - should return false if state is less than 2 characters', () => {
    const { result, message } = sut.validate({
      ...anyAddressProps,
      state: '1',
    });
    expect(result).toBeFalsy();
    expect(message).toBe('State must have at least 2 characters');
  });

  it('5 - should return false if country is less than 3 characters', () => {
    const { result, message } = sut.validate({
      ...anyAddressProps,
      country: '12',
    });
    expect(result).toBeFalsy();
    expect(message).toBe('Country must have at least 3 characters');
  });

  it('6 - should return false if zipcode is less than 8 characters', () => {
    const { result, message } = sut.validate({
      ...anyAddressProps,
      zipcode: '1234567',
    });
    expect(result).toBeFalsy();
    expect(message).toBe('ZipCode must have at least 8 characters');
  });
});
