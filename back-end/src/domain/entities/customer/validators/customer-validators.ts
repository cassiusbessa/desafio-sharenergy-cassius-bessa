import {
  EmailValidator,
  PhoneValidator,
  CpfValidator,
} from '@domain/protocols';

export interface ValidatorResult {
  result: boolean;
  message: string;
}
export interface PropsValidators {
  emailValidator: EmailValidator;
  phoneValidator: PhoneValidator;
  cpfValidator: CpfValidator;
}

export class CustomerValidators {
  private readonly emailValidator: EmailValidator;
  private readonly phoneValidator: PhoneValidator;
  private readonly cpfValidator: CpfValidator;
  private validatorResult: ValidatorResult = {
    result: true,
    message: 'Valid',
  };

  constructor(validators: PropsValidators) {
    this.emailValidator = validators.emailValidator;
    this.phoneValidator = validators.phoneValidator;
    this.cpfValidator = validators.cpfValidator;
  }

  private validateNameLength(name: string) {
    if (name.length < 3) {
      this.validatorResult = {
        result: false,
        message: 'Name must have at least 3 characters',
      };
    }
  }

  private validateEmail(email: string) {
    if (!this.emailValidator.isValid(email)) {
      this.validatorResult = {
        result: false,
        message: 'Invalid email',
      };
    }
  }

  private validatePhone(phone: string) {
    if (!this.phoneValidator.isValid(phone)) {
      this.validatorResult = {
        result: false,
        message: 'Invalid phone',
      };
    }
  }

  private validateCpf(cpf: string) {
    if (!this.cpfValidator.isValid(cpf)) {
      this.validatorResult = {
        result: false,
        message: 'Invalid cpf',
      };
    }
  }

  validate(name: string, email: string, phone: string, cpf: string) {
    this.validateNameLength(name);
    this.validateEmail(email);
    this.validatePhone(phone);
    this.validateCpf(cpf);
    return this.validatorResult;
  }
}
