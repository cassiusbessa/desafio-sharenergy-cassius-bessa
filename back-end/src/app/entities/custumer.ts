export interface CustumerProps {
  name: string;
  email: string;
  phone: string;
  cpf: string;
  address: string;
}

export class Custumer {
  private props: CustumerProps;

  constructor(props: CustumerProps) {
    this.props = props;
    this.validateNameLength(props.name);
  }

  get name(): string {
    return this.props.name;
  }

  validateNameLength(name: string) {
    console.log('name.length', name.length);
    if (name.length < 3) {
      throw new Error('Name must have at least 3 characters');
    }
  }

  get email(): string {
    return this.props.email;
  }

  get phone(): string {
    return this.props.phone;
  }

  get cpf(): string {
    return this.props.cpf;
  }

  get address(): string {
    return this.props.address;
  }
}
