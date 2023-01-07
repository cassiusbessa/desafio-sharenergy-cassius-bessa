import { randomUUID } from 'crypto';
import { EmailValidator, PhoneValidator, CpfValidator } from '../protocols';
import { Address } from './address';

export interface CustomerProps {
  name: string;
  email: string;
  phone: string;
  cpf: string;
  address: Address;
}

export interface PersistenceCustomer {
  name: string;
  id: string;
  email: string;
  phone: string;
  cpf: string;
  address: Address;
}

export class Customer {
  private props: CustomerProps;
  private _id: string;
  private readonly emailValidator: EmailValidator;
  private readonly phoneValidator: PhoneValidator;
  private readonly cpfValidator: CpfValidator;

  constructor(
    props: CustomerProps,
    emailValidator: EmailValidator,
    phoneValidator: PhoneValidator,
    cpfValidator: CpfValidator,
    id?: string,
  ) {
    this.emailValidator = emailValidator;
    this.phoneValidator = phoneValidator;
    this.cpfValidator = cpfValidator;
    this.props = props;
    this._id = id ?? randomUUID();
    this.validateNameLength(props.name);
    this.validateEmail(props.email);
    this.validatePhone(props.phone);
    this.validateCpf(props.cpf);
  }

  get name(): string {
    return this.props.name;
  }

  get id(): string {
    return this._id;
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

  get address(): Address {
    return this.props.address;
  }

  public getAllProps(): PersistenceCustomer {
    return { ...this.props, id: this._id };
  }

  public updateProps(props: CustomerProps): void {
    this.validateCpf(props.cpf);
    this.validateEmail(props.email);
    this.validateNameLength(props.name);
    this.validatePhone(props.phone);
    this.props = props;
  }
}
