import { randomUUID } from 'crypto';
import { EmailValidator, PhoneValidator, CpfValidator } from '../../protocols';
import { Address, AddressProps } from '../address/address';

export interface CustomerProps {
  name: string;
  email: string;
  phone: string;
  cpf: string;
  address: AddressProps;
}

export interface PersistenceCustomer extends CustomerProps {
  id: string;
}

export class Customer {
  private props: CustomerProps;
  private readonly _id: string;
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

  private validateNameLength(name: string) {
    if (name.length < 3) {
      throw new Error('Name must have at least 3 characters');
    }
  }

  private validateEmail(email: string) {
    if (!this.emailValidator.isValid(email)) {
      throw new Error('Invalid email');
    }
  }

  private validatePhone(phone: string) {
    if (!this.phoneValidator.isValid(phone)) {
      throw new Error('Invalid phone');
    }
  }

  private validateCpf(cpf: string) {
    if (!this.cpfValidator.isValid(cpf)) {
      throw new Error('Invalid cpf');
    }
  }

  public getAllProps(): PersistenceCustomer {
    return {
      ...this.props,
      id: this._id,
    };
  }

  public updateProps(props: CustomerProps): void {
    this.validateCpf(props.cpf);
    this.validateEmail(props.email);
    this.validateNameLength(props.name);
    this.validatePhone(props.phone);
    this.props = props;
  }
}
