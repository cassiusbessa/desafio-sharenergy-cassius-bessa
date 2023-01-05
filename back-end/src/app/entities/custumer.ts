import { EmailValidator } from '../protocols/email-validator';

export interface CustumerProps {
  name: string;
  email: string;
  phone: string;
  cpf: string;
  address: string;
}

export class Custumer {
  private props: CustumerProps;
  private readonly emailValidator: EmailValidator;

  constructor(props: CustumerProps, emailValidator: EmailValidator) {
    this.emailValidator = emailValidator;
    this.props = props;
    this.validateEmail(props.email);
    this.validateNameLength(props.name);
  }

  get name(): string {
    return this.props.name;
  }

  private validateNameLength(name: string) {
    if (name.length < 3) {
      throw new Error('Name must have at least 3 characters');
    }
  }

  get email(): string {
    return this.props.email;
  }

  private validateEmail(email: string) {
    if (!this.emailValidator.isValid(email)) {
      throw new Error('Invalid email');
    }
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
