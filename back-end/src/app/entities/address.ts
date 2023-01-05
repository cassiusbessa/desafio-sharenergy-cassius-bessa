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

  get city(): string {
    return this.props.city;
  }

  get state(): string {
    return this.props.state;
  }

  get country(): string {
    return this.props.country;
  }

  get zipcode(): string {
    return this.props.zipcode;
  }
}
