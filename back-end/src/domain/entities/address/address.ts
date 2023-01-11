export interface AddressProps {
  street: string;
  number: string;
  complement?: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
}

export class Address {
  private props: AddressProps;

  constructor(props: AddressProps) {
    this.props = props;
    this.validateStreetLength(props.street);
    this.validateNumberLength(props.number);
    this.validateCityLength(props.city);
    this.validateStateLength(props.state);
    this.validateCountryLength(props.country);
    this.validateZipcodeLength(props.zipcode);
  }

  private validateStreetLength(street: string) {
    if (street.length < 1) {
      throw new Error('Street must have at least 1 character');
    }
  }

  private validateNumberLength(number: string) {
    if (number.length < 1) {
      throw new Error('Number must have at least 1 character');
    }
  }

  private validateCityLength(city: string) {
    if (city.length < 3) {
      throw new Error('City must have at least 3 characters');
    }
  }

  private validateStateLength(state: string) {
    if (state.length < 2) {
      throw new Error('State must have at least 2 characters');
    }
  }

  private validateCountryLength(country: string) {
    if (country.length < 3) {
      throw new Error('Country must have at least 3 characters');
    }
  }

  public validateZipcodeLength(zipcode: string) {
    if (zipcode.length < 8) {
      throw new Error('Zipcode must have at least 8 characters');
    }
  }

  public getProps(): AddressProps {
    return this.props;
  }

  public getFullAddress(): string {
    const { street, number, complement, city, state, country, zipcode } =
      this.props;
    return `${street}, ${number}, ${complement}, ${city}, ${state}, ${country}, ${zipcode}`;
  }
}
