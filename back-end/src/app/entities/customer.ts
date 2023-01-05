import { EmailValidator, PhoneValidator, CpfValidator } from '../protocols';

export interface CustomerProps {
  name: string;
  email: string;
  phone: string;
  cpf: string;
  address: string;
}

export class Customer {
  private props: CustomerProps;
  private readonly emailValidator: EmailValidator;
  private readonly phoneValidator: PhoneValidator;
  private readonly cpfValidator: CpfValidator;

  constructor(
    props: CustomerProps,
    emailValidator: EmailValidator,
    phoneValidator: PhoneValidator,
    cpfValidator: CpfValidator,
  ) {
    this.emailValidator = emailValidator;
    this.phoneValidator = phoneValidator;
    this.cpfValidator = cpfValidator;
    this.props = props;
    this.validateNameLength(props.name);
    this.validateEmail(props.email);
    this.validatePhone(props.phone);
    this.validateCpf(props.cpf);
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

  private validatePhone(phone: string) {
    if (!this.phoneValidator.isValid(phone)) {
      throw new Error('Invalid phone');
    }
  }

  get cpf(): string {
    return this.props.cpf;
  }

  private validateCpf(cpf: string) {
    if (!this.cpfValidator.isValid(cpf)) {
      throw new Error('Invalid cpf');
    }
  }

  get address(): string {
    return this.props.address;
  }
}
