import {
  EmailValidator,
  PhoneValidator,
  CpfValidator,
  ValidatorResult,
  CustomerValidator,
} from '@domain/protocols';

export interface PropsValidators {
  emailValidator: EmailValidator;
  phoneValidator: PhoneValidator;
  cpfValidator: CpfValidator;
}

export class CustomerValidators implements CustomerValidator {
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

  updateValidate(name?: string, email?: string, phone?: string, cpf?: string) {
    if (name) {
      this.validateNameLength(name);
    }
    if (email) {
      this.validateEmail(email);
    }
    if (phone) {
      this.validatePhone(phone);
    }
    if (cpf) {
      this.validateCpf(cpf);
    }
    return this.validatorResult;
  }
}
