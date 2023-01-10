import { CustomerValidators } from '@domain/entities/customer/validators/customer-validators';
import {
  EmailValidator,
  PhoneValidator,
  CpfValidator,
} from '@domain/protocols';

const makeEmailValidator = (): EmailValidator => {
  class EmailValidatorStub implements EmailValidator {
    isValid(email: string): boolean {
      return true;
    }
  }
  return new EmailValidatorStub();
};

const makePhoneValidator = (): PhoneValidator => {
  class PhoneValidatorStub implements PhoneValidator {
    isValid(phone: string): boolean {
      return true;
    }
  }
  return new PhoneValidatorStub();
};

const makeCpfValidator = (): CpfValidator => {
  class CpfValidatorStub implements CpfValidator {
    isValid(cpf: string): boolean {
      return true;
    }
  }
  return new CpfValidatorStub();
};

export const makeDefaultCustomerValidator = () => {
  const emailValidatorStub = makeEmailValidator();
  const phoneValidatorStub = makePhoneValidator();
  const cpfValidatorStub = makeCpfValidator();
  const sut = new CustomerValidators({
    emailValidator: emailValidatorStub,
    phoneValidator: phoneValidatorStub,
    cpfValidator: cpfValidatorStub,
  });
  return {
    sut,
    emailValidatorStub,
    phoneValidatorStub,
    cpfValidatorStub,
  };
};
