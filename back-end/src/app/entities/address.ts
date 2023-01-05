export interface AddressProps {
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
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
    this.validateNeighborhoodLength(props.neighborhood);
    this.validateCityLength(props.city);
    this.validateStateLength(props.state);
  }

  get street(): string {
    return this.props.street;
  }

  private validateStreetLength(street: string) {
    if (street.length < 1) {
      throw new Error('Street must have at least 1 character');
    }
  }

  get number(): string {
    return this.props.number;
  }

  private validateNumberLength(number: string) {
    if (number.length < 1) {
      throw new Error('Number must have at least 1 character');
    }
  }

  get complement(): string {
    return this.props.complement;
  }

  get neighborhood(): string {
    return this.props.neighborhood;
  }

  private validateNeighborhoodLength(neighborhood: string) {
    if (neighborhood.length < 3) {
      throw new Error('Neighborhood must have at least 3 characters');
    }
  }

  get city(): string {
    return this.props.city;
  }

  private validateCityLength(city: string) {
    if (city.length < 3) {
      throw new Error('City must have at least 3 characters');
    }
  }

  get state(): string {
    return this.props.state;
  }

  private validateStateLength(state: string) {
    if (state.length < 2) {
      throw new Error('State must have at least 2 characters');
    }
  }

  get country(): string {
    return this.props.country;
  }

  get zipcode(): string {
    return this.props.zipcode;
  }
}
