import { Customer, CustomerProps } from './customer';
import { EmailValidator } from '../protocols/email-validator';
import { PhoneValidator } from '../protocols/phone-validator';
import { CpfValidator } from '../protocols/cpf-validator';

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

interface SutTypes {
  sut: Customer;
  emailValidatorStub: EmailValidator;
  phoneValidatorStub: PhoneValidator;
  cpfValidatorStub: CpfValidator;
}

const makeSut = (CustomerProps: CustomerProps): SutTypes => {
  const emailValidatorStub = makeEmailValidator();
  const phoneValidatorStub = makePhoneValidator();
  const cpfValidatorStub = makeCpfValidator();

  const sut = new Customer(
    CustomerProps,
    emailValidatorStub,
    phoneValidatorStub,
    cpfValidatorStub,
  );
  return { sut, emailValidatorStub, phoneValidatorStub, cpfValidatorStub };
};

describe('Customer', () => {
  it('1 - should be able to create a Customer', () => {
    const sutProps: CustomerProps = {
      name: 'valid_name',
      email: 'valid_email',
      phone: 'valid_phone',
      cpf: 'valid_cpf',
      address: 'valid_address',
    };
    const { sut } = makeSut(sutProps);
    expect(sut).toBeTruthy();
  });

  it('2 - should not be able to create a Customer name with less than 3 characters', () => {
    const sutProps: CustomerProps = {
      name: '12',
      email: 'valid_email',
      phone: 'valid_phone',
      cpf: 'valid_cpf',
      address: 'valid_address',
    };
    expect(
      () =>
        new Customer(
          sutProps,
          makeEmailValidator(),
          makePhoneValidator(),
          makeCpfValidator(),
        ),
    ).toThrowError('Name must have at least 3 characters');
  });

  it('3 - should throw if emailValidator.isValid returns false', () => {
    const sutProps: CustomerProps = {
      name: 'any_name',
      email: 'invalid_email',
      phone: 'any_phone',
      cpf: 'any_cpf',
      address: 'any_address',
    };
    const { emailValidatorStub } = makeSut(sutProps);
    jest.spyOn(emailValidatorStub, 'isValid').mockReturnValueOnce(false);
    expect(
      () =>
        new Customer(
          sutProps,
          emailValidatorStub,
          makePhoneValidator(),
          makeCpfValidator(),
        ),
    ).toThrowError('Invalid email');
  });

  it('4 - should throw if emailValidator.isValid throws', () => {
    const sutProps: CustomerProps = {
      name: 'any_name',
      email: 'any_email',
      phone: 'any_phone',
      cpf: 'any_cpf',
      address: 'any_address',
    };
    const { emailValidatorStub, phoneValidatorStub, cpfValidatorStub } =
      makeSut(sutProps);
    jest.spyOn(emailValidatorStub, 'isValid').mockImplementationOnce(() => {
      throw new Error('Internal error');
    });
    expect(
      () =>
        new Customer(
          sutProps,
          emailValidatorStub,
          phoneValidatorStub,
          cpfValidatorStub,
        ),
    ).toThrowError('Internal error');
  });

  it("5 - shouldn't throw if emailValidator.isValid returns true", () => {
    const sutProps: CustomerProps = {
      name: 'any_name',
      email: 'valid_email',
      phone: 'any_phone',
      cpf: 'any_cpf',
      address: 'any_address',
    };
    const { emailValidatorStub, phoneValidatorStub, cpfValidatorStub } =
      makeSut(sutProps);
    expect(
      () =>
        new Customer(
          sutProps,
          emailValidatorStub,
          phoneValidatorStub,
          cpfValidatorStub,
        ),
    ).not.toThrow();
  });

  it('6 - should throw if phoneValidator.isValid returns false', () => {
    const sutProps: CustomerProps = {
      name: 'any_name',
      email: 'any_email',
      phone: 'invalid_phone',
      cpf: 'any_cpf',
      address: 'any_address',
    };
    const { phoneValidatorStub, emailValidatorStub, cpfValidatorStub } =
      makeSut(sutProps);
    jest.spyOn(phoneValidatorStub, 'isValid').mockReturnValueOnce(false);
    expect(
      () =>
        new Customer(
          sutProps,
          emailValidatorStub,
          phoneValidatorStub,
          cpfValidatorStub,
        ),
    ).toThrowError('Invalid phone');
  });

  it('7 - should throw if phoneValidator.isValid throws', () => {
    const sutProps: CustomerProps = {
      name: 'any_name',
      email: 'any_email',
      phone: 'any_phone',
      cpf: 'any_cpf',
      address: 'any_address',
    };
    const { phoneValidatorStub, emailValidatorStub, cpfValidatorStub } =
      makeSut(sutProps);
    jest.spyOn(phoneValidatorStub, 'isValid').mockImplementationOnce(() => {
      throw new Error('Internal error');
    });
    expect(
      () =>
        new Customer(
          sutProps,
          emailValidatorStub,
          phoneValidatorStub,
          cpfValidatorStub,
        ),
    ).toThrowError('Internal error');
  });

  it("8 - shouldn't throw if phoneValidator.isValid returns true", () => {
    const sutProps: CustomerProps = {
      name: 'any_name',
      email: 'any_email',
      phone: 'valid_phone',
      cpf: 'any_cpf',
      address: 'any_address',
    };
    const { phoneValidatorStub, emailValidatorStub, cpfValidatorStub } =
      makeSut(sutProps);
    expect(
      () =>
        new Customer(
          sutProps,
          emailValidatorStub,
          phoneValidatorStub,
          cpfValidatorStub,
        ),
    ).not.toThrow();
  });

  it('9 - should throw if cpfValidator.isValid returns false', () => {
    const sutProps: CustomerProps = {
      name: 'any_name',
      email: 'any_email',
      phone: 'any_phone',
      cpf: 'invalid_cpf',
      address: 'any_address',
    };
    const { cpfValidatorStub, emailValidatorStub, phoneValidatorStub } =
      makeSut(sutProps);
    jest.spyOn(cpfValidatorStub, 'isValid').mockReturnValueOnce(false);
    expect(
      () =>
        new Customer(
          sutProps,
          emailValidatorStub,
          phoneValidatorStub,
          cpfValidatorStub,
        ),
    ).toThrowError('Invalid cpf');
  });
});
