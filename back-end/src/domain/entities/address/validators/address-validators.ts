import { ValidatorResult } from '@domain/protocols';
import { AddressValidator } from '@domain/protocols/address-validator';
import { AddressProps } from '../address';

export class AddressValidators implements AddressValidator {
  private validatorResult: ValidatorResult = {
    result: true,
    message: 'Valid',
  };

  private validateStreetLength(street: string) {
    if (street.length < 1) {
      this.validatorResult = {
        result: false,
        message: 'Street must have at least 1 character',
      };
    }
  }

  private validateNumberLength(number: string) {
    if (number.length < 1) {
      this.validatorResult = {
        result: false,
        message: 'Number must have at least 1 character',
      };
    }
  }

  private validateCityLength(city: string) {
    if (city.length < 3) {
      this.validatorResult = {
        result: false,
        message: 'City must have at least 3 characters',
      };
    }
  }

  private validateStateLength(state: string) {
    if (state.length < 2) {
      this.validatorResult = {
        result: false,
        message: 'State must have at least 2 characters',
      };
    }
  }

  private validateCountryLength(country: string) {
    if (country.length < 3) {
      this.validatorResult = {
        result: false,
        message: 'Country must have at least 3 characters',
      };
    }
  }

  private validateZipCodeLength(zipCode: string) {
    if (zipCode.length < 8) {
      this.validatorResult = {
        result: false,
        message: 'ZipCode must have at least 8 characters',
      };
    }
  }

  validate(address: AddressProps): ValidatorResult {
    this.validatorResult = {
      result: true,
      message: 'Valid',
    };
    this.validateStreetLength(address.street);
    this.validateNumberLength(address.number);
    this.validateCityLength(address.city);
    this.validateStateLength(address.state);
    this.validateCountryLength(address.country);
    this.validateZipCodeLength(address.zipcode);

    return this.validatorResult;
  }

  updateValidate(address: Partial<AddressProps>): ValidatorResult {
    this.validatorResult = {
      result: true,
      message: 'Valid',
    };
    if (!address || Object.keys(address).length === 0) {
      return this.validatorResult;
    }
    if (address.street) {
      this.validateStreetLength(address.street);
    }

    if (address.number) {
      this.validateNumberLength(address.number);
    }

    if (address.city) {
      this.validateCityLength(address.city);
    }

    if (address.state) {
      this.validateStateLength(address.state);
    }

    if (address.country) {
      this.validateCountryLength(address.country);
    }

    if (address.zipcode) {
      this.validateZipCodeLength(address.zipcode);
    }

    return this.validatorResult;
  }
}
