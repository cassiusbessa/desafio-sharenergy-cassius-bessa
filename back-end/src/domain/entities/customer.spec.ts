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

export const anyCustomerProps: CustomerProps = {
  name: 'any_name',
  email: 'any_email',
  phone: 'any_phone',
  cpf: 'any_cpf',
  address: new Address(anyAddressProps),
};

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
    const sut = new SutFactory(sutProps);
    expect(() => sut.makeSut()).toThrowError(
      'Name must have at least 3 characters',
    );
  });

  it('3 - should emailValidator.isValid calls with correct email', () => {
    const sutProps: CustomerProps = anyCustomerProps;
    const sut = new SutFactory(sutProps);
    const isValidSpy = jest.spyOn(sut.emailValidatorStub, 'isValid');
    sut.makeSut();
    expect(isValidSpy).toHaveBeenCalledWith(sutProps.email);
  });

  it('4 - should throw if emailValidator.isValid returns false', () => {
    const sutProps: CustomerProps = {
      ...anyCustomerProps,
      email: 'invalid_email',
    };
    const sut = new SutFactory(sutProps);
    jest.spyOn(sut.emailValidatorStub, 'isValid').mockReturnValueOnce(false);
    expect(() => sut.makeSut()).toThrowError('Invalid email');
  });

  it('5 - should throw if emailValidator.isValid throws', () => {
    const sutProps: CustomerProps = anyCustomerProps;
    const sut = new SutFactory(sutProps);
    jest.spyOn(sut.emailValidatorStub, 'isValid').mockImplementationOnce(() => {
      throw new Error('Internal error');
    });
    expect(() => sut.makeSut()).toThrowError('Internal error');
  });

  it("6 - shouldn't throw if emailValidator.isValid returns true", () => {
    const sutProps: CustomerProps = {
      ...anyCustomerProps,
      email: 'valid_email',
    };
    const sut = new SutFactory(sutProps);
    expect(() => sut.makeSut()).not.toThrow();
  });

  it('7 - should phoneValidator.isValid calls with correct phone', () => {
    const sutProps: CustomerProps = anyCustomerProps;
    const sut = new SutFactory(sutProps);
    const isValidSpy = jest.spyOn(sut.phoneValidatorStub, 'isValid');
    sut.makeSut();
    expect(isValidSpy).toHaveBeenCalledWith(sutProps.phone);
  });

  it('8 - should throw if phoneValidator.isValid returns false', () => {
    const sutProps: CustomerProps = {
      ...anyCustomerProps,
      phone: 'invalid_phone',
    };
    const sut = new SutFactory(sutProps);
    jest.spyOn(sut.phoneValidatorStub, 'isValid').mockReturnValueOnce(false);
    expect(() => sut.makeSut()).toThrowError('Invalid phone');
  });

  it('9 - should throw if phoneValidator.isValid throws', () => {
    const sutProps: CustomerProps = anyCustomerProps;
    const sut = new SutFactory(sutProps);
    jest.spyOn(sut.phoneValidatorStub, 'isValid').mockImplementationOnce(() => {
      throw new Error('Internal error');
    });
    expect(() => sut.makeSut()).toThrowError('Internal error');
  });

  it("10 - shouldn't throw if phoneValidator.isValid returns true", () => {
    const sutProps: CustomerProps = {
      ...anyCustomerProps,
      phone: 'valid_phone',
    };
    const sut = new SutFactory(sutProps);
    expect(() => sut.makeSut()).not.toThrow();
  });

  it('11 - should cpfValidator.isValid calls with correct cpf', () => {
    const sutProps: CustomerProps = anyCustomerProps;
    const sut = new SutFactory(sutProps);
    const isValidSpy = jest.spyOn(sut.cpfValidatorStub, 'isValid');
    sut.makeSut();
    expect(isValidSpy).toHaveBeenCalledWith(sutProps.cpf);
  });

  it('11 - should throw if cpfValidator.isValid returns false', () => {
    const sutProps: CustomerProps = {
      ...anyCustomerProps,
      cpf: 'invalid_cpf',
    };
    const sut = new SutFactory(sutProps);
    jest.spyOn(sut.cpfValidatorStub, 'isValid').mockReturnValueOnce(false);
  });

  it('12 - should throw if cpfValidator.isValid throws', () => {
    const sutProps: CustomerProps = anyCustomerProps;
    const sut = new SutFactory(sutProps);
    jest.spyOn(sut.cpfValidatorStub, 'isValid').mockImplementationOnce(() => {
      throw new Error('Internal error');
    });
    expect(() => sut.makeSut()).toThrowError('Internal error');
  });

  it("13 - shouldn't throw if cpfValidator.isValid returns true", () => {
    const sutProps: CustomerProps = {
      ...anyCustomerProps,
      cpf: 'valid_cpf',
    };
    const sut = new SutFactory(sutProps);
    expect(() => sut.makeSut()).not.toThrow();
  });

  it('14 - should be able update a Customer', () => {
    const sutProps: CustomerProps = anyCustomerProps;
    const sut = new SutFactory(sutProps);
    const customer = sut.makeSut();
    const newProps: CustomerProps = {
      ...anyCustomerProps,
      name: 'new_valid_name',
      email: 'new_valid_email',
      phone: 'new_valid_phone',
      cpf: 'new_valid_cpf',
      address: new Address(anyAddressProps),
    };
    customer.updateProps(newProps);
    expect(customer.getAllProps()).toMatchObject(newProps);
  });

  it('15 - must call all validations with correct values when updating a Customer', () => {
    const sutProps: CustomerProps = anyCustomerProps;
    const sut = new SutFactory(sutProps);
    const customer = sut.makeSut();
    const newProps: CustomerProps = {
      ...anyCustomerProps,
      name: 'new_valid_name',
      email: 'new_valid_email',
      phone: 'new_valid_phone',
      cpf: 'new_valid_cpf',
      address: new Address(anyAddressProps),
    };
    const cpfSpy = jest.spyOn(sut.cpfValidatorStub, 'isValid');
    const emailSpy = jest.spyOn(sut.emailValidatorStub, 'isValid');
    const phoneSpy = jest.spyOn(sut.phoneValidatorStub, 'isValid');
    customer.updateProps(newProps);
    expect(cpfSpy).toHaveBeenCalledWith(newProps.cpf);
    expect(emailSpy).toHaveBeenCalledWith(newProps.email);
    expect(phoneSpy).toHaveBeenCalledWith(newProps.phone);
  });

  it('16 - should not be able to update a Customer with name with less than 3 characters', () => {
    const sutProps: CustomerProps = anyCustomerProps;
    const sut = new SutFactory(sutProps);
    const customer = sut.makeSut();
    const newProps: CustomerProps = {
      ...anyCustomerProps,
      name: 'ab',
    };
    expect(() => customer.updateProps(newProps)).toThrowError(
      'Name must have at least 3 characters',
    );
  });

  it('17 - should be able get all customer props and id ', () => {
    const sutProps: CustomerProps = anyCustomerProps;
    const sut = new SutFactory(sutProps);
    const customer = sut.makeSut();
    const customerProps = customer.getAllProps();
    expect(customerProps).toMatchObject({
      ...sutProps,
      id: customer.getAllProps().id,
      address: anyAddressProps,
    });
  });
});
