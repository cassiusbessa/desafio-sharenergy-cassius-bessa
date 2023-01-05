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
  }

  get name(): string {
    return this.props.name;
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
