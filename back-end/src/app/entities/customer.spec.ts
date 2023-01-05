import { Customer, CustomerProps } from './customer';
import { EmailValidator, PhoneValidator, CpfValidator } from '../protocols';

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

const anyCustomerProps: CustomerProps = {
  name: 'any_name',
  email: 'any_email',
  phone: 'any_phone',
  cpf: 'any_cpf',
  address: 'any_address',
};

interface SutTypes {
  sut: Customer;
  emailValidatorStub: EmailValidator;
  phoneValidatorStub: PhoneValidator;
  cpfValidatorStub: CpfValidator;
}

const makeSut = (CustomerProps: CustomerProps = anyCustomerProps): SutTypes => {
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
    const sutProps: CustomerProps = { ...anyCustomerProps, name: '12' };
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
      ...anyCustomerProps,
      email: 'invalid_email',
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
    const sutProps: CustomerProps = anyCustomerProps;
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
      ...anyCustomerProps,
      email: 'valid_email',
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
      ...anyCustomerProps,
      phone: 'invalid_phone',
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
    const sutProps: CustomerProps = anyCustomerProps;
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
      ...anyCustomerProps,
      phone: 'valid_phone',
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
      ...anyCustomerProps,
      cpf: 'invalid_cpf',
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

  it('10 - should throw if cpfValidator.isValid throws', () => {
    const sutProps: CustomerProps = anyCustomerProps;
    const { cpfValidatorStub, emailValidatorStub, phoneValidatorStub } =
      makeSut(sutProps);
    jest.spyOn(cpfValidatorStub, 'isValid').mockImplementationOnce(() => {
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

  it("11 - shouldn't throw if cpfValidator.isValid returns true", () => {
    const sutProps: CustomerProps = {
      ...anyCustomerProps,
      cpf: 'valid_cpf',
    };
    const { cpfValidatorStub, emailValidatorStub, phoneValidatorStub } =
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
});
