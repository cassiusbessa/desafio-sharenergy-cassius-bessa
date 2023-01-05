import { anyAddressProps } from './address.spec';
import { Customer, CustomerProps } from './customer';
import { EmailValidator, PhoneValidator, CpfValidator } from '../protocols';
import { Address } from './address';

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
  address: new Address(anyAddressProps),
};

interface SutTypes {
  sut: Customer;
  emailValidatorStub: EmailValidator;
  phoneValidatorStub: PhoneValidator;
  cpfValidatorStub: CpfValidator;
}

class SutFactory {
  public emailValidatorStub: EmailValidator;
  public phoneValidatorStub: PhoneValidator;
  public cpfValidatorStub: CpfValidator;
  public sutProps: CustomerProps;
  constructor(sutProps: CustomerProps) {
    this.sutProps = sutProps;
    this.emailValidatorStub = makeEmailValidator();
    this.phoneValidatorStub = makePhoneValidator();
    this.cpfValidatorStub = makeCpfValidator();
  }

  makeSut(): Customer {
    return new Customer(
      this.sutProps,
      this.emailValidatorStub,
      this.phoneValidatorStub,
      this.cpfValidatorStub,
    );
  }
}

describe('Customer', () => {
  it('1 - should be able to create a Customer', () => {
    const sutProps: CustomerProps = {
      name: 'valid_name',
      email: 'valid_email',
      phone: 'valid_phone',
      cpf: 'valid_cpf',
      address: new Address(anyAddressProps),
    };
    const sut = new SutFactory(sutProps);
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
    const sut = new SutFactory(sutProps);
    jest.spyOn(sut.emailValidatorStub, 'isValid').mockReturnValueOnce(false);
    expect(() => sut.makeSut()).toThrowError('Invalid email');
  });

  it('4 - should throw if emailValidator.isValid throws', () => {
    const sutProps: CustomerProps = anyCustomerProps;
    const sut = new SutFactory(sutProps);
    jest.spyOn(sut.emailValidatorStub, 'isValid').mockImplementationOnce(() => {
      throw new Error('Internal error');
    });
    expect(() => sut.makeSut()).toThrowError('Internal error');
  });

  it("5 - shouldn't throw if emailValidator.isValid returns true", () => {
    const sutProps: CustomerProps = {
      ...anyCustomerProps,
      email: 'valid_email',
    };
    const sut = new SutFactory(sutProps);
    expect(() => sut.makeSut()).not.toThrow();
  });

  it('6 - should throw if phoneValidator.isValid returns false', () => {
    const sutProps: CustomerProps = {
      ...anyCustomerProps,
      phone: 'invalid_phone',
    };
    const sut = new SutFactory(sutProps);
    jest.spyOn(sut.phoneValidatorStub, 'isValid').mockReturnValueOnce(false);
    expect(() => sut.makeSut()).toThrowError('Invalid phone');
  });

  it('7 - should throw if phoneValidator.isValid throws', () => {
    const sutProps: CustomerProps = anyCustomerProps;
    const sut = new SutFactory(sutProps);
    jest.spyOn(sut.phoneValidatorStub, 'isValid').mockImplementationOnce(() => {
      throw new Error('Internal error');
    });
    expect(() => sut.makeSut()).toThrowError('Internal error');
  });

  it("8 - shouldn't throw if phoneValidator.isValid returns true", () => {
    const sutProps: CustomerProps = {
      ...anyCustomerProps,
      phone: 'valid_phone',
    };
    const sut = new SutFactory(sutProps);
    expect(() => sut.makeSut()).not.toThrow();
  });

  it('9 - should throw if cpfValidator.isValid returns false', () => {
    const sutProps: CustomerProps = {
      ...anyCustomerProps,
      cpf: 'invalid_cpf',
    };
    const sut = new SutFactory(sutProps);
    jest.spyOn(sut.cpfValidatorStub, 'isValid').mockReturnValueOnce(false);
  });

  it('10 - should throw if cpfValidator.isValid throws', () => {
    const sutProps: CustomerProps = anyCustomerProps;
    const sut = new SutFactory(sutProps);
    jest.spyOn(sut.cpfValidatorStub, 'isValid').mockImplementationOnce(() => {
      throw new Error('Internal error');
    });
    expect(() => sut.makeSut()).toThrowError('Internal error');
  });

  it("11 - shouldn't throw if cpfValidator.isValid returns true", () => {
    const sutProps: CustomerProps = {
      ...anyCustomerProps,
      cpf: 'valid_cpf',
    };
    const sut = new SutFactory(sutProps);
    expect(() => sut.makeSut()).not.toThrow();
  });
});
