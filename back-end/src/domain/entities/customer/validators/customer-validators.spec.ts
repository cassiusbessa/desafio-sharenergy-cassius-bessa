import {
  EmailValidator,
  PhoneValidator,
  CpfValidator,
} from '@domain/protocols';
import { CustomerValidators } from './customer-validators';

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

export const makeSut = () => {
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

describe('Customer Validators', () => {
  it('1 - should return false if name is less than 3 characters', () => {
    const { sut } = makeSut();
    const { result, message } = sut.validate(
      'na',
      'any_email',
      'any_phone',
      'any_cpf',
    );
    expect(result).toBe(false);
    expect(message).toBe('Name must have at least 3 characters');
  });

  it('2 - should call EmailValidator.isValid with correct email', () => {
    const { sut, emailValidatorStub } = makeSut();
    const isValidSpy = jest.spyOn(emailValidatorStub, 'isValid');
    sut.validate('any_name', 'any_email', 'any_phone', 'any_cpf');
    expect(isValidSpy).toHaveBeenCalledWith('any_email');
  });

  it('3 - should throw if EmailValidator.isValid throws', () => {
    const { sut, emailValidatorStub } = makeSut();
    jest.spyOn(emailValidatorStub, 'isValid').mockImplementationOnce(() => {
      throw new Error();
    });
    expect(() => {
      sut.validate('any_name', 'any_email', 'any_phone', 'any_cpf');
    }).toThrow();
  });

  it('4 - should return false if EmailValidator.isValid returns false', () => {
    const { sut, emailValidatorStub } = makeSut();
    jest.spyOn(emailValidatorStub, 'isValid').mockReturnValueOnce(false);
    const { result, message } = sut.validate(
      'any_name',
      'any_email',
      'any_phone',
      'any_cpf',
    );
    expect(result).toBe(false);
    expect(message).toBe('Invalid email');
  });

  it('5 - should return true if EmailValidator.isValid returns true', () => {
    const { sut } = makeSut();
    const { result, message } = sut.validate(
      'any_name',
      'any_email',
      'any_phone',
      'any_cpf',
    );
    expect(result).toBe(true);
    expect(message).toBe('Valid');
  });

  it('6 - should call PhoneValidator.isValid with correct phone', () => {
    const { sut, phoneValidatorStub } = makeSut();
    const isValidSpy = jest.spyOn(phoneValidatorStub, 'isValid');
    sut.validate('any_name', 'any_email', 'any_phone', 'any_cpf');
    expect(isValidSpy).toHaveBeenCalledWith('any_phone');
  });

  it('7 - should throw if PhoneValidator.isValid throws', () => {
    const { sut, phoneValidatorStub } = makeSut();
    jest.spyOn(phoneValidatorStub, 'isValid').mockImplementationOnce(() => {
      throw new Error();
    });
    expect(() => {
      sut.validate('any_name', 'any_email', 'any_phone', 'any_cpf');
    }).toThrow();
  });

  it('8 - should return false if PhoneValidator.isValid returns false', () => {
    const { sut, phoneValidatorStub } = makeSut();
    jest.spyOn(phoneValidatorStub, 'isValid').mockReturnValueOnce(false);
    const { result, message } = sut.validate(
      'any_name',
      'any_email',
      'any_phone',
      'any_cpf',
    );
    expect(result).toBe(false);
    expect(message).toBe('Invalid phone');
  });

  it('9 - should return true if PhoneValidator.isValid returns true', () => {
    const { sut } = makeSut();
    const { result, message } = sut.validate(
      'any_name',
      'any_email',
      'any_phone',
      'any_cpf',
    );
    expect(result).toBe(true);
    expect(message).toBe('Valid');
  });

  it('10 - should call CpfValidator.isValid with correct cpf', () => {
    const { sut, cpfValidatorStub } = makeSut();
    const isValidSpy = jest.spyOn(cpfValidatorStub, 'isValid');
    sut.validate('any_name', 'any_email', 'any_phone', 'any_cpf');
    expect(isValidSpy).toHaveBeenCalledWith('any_cpf');
  });

  it('11 - should throw if CpfValidator.isValid throws', () => {
    const { sut, cpfValidatorStub } = makeSut();
    jest.spyOn(cpfValidatorStub, 'isValid').mockImplementationOnce(() => {
      throw new Error();
    });
    expect(() => {
      sut.validate('any_name', 'any_email', 'any_phone', 'any_cpf');
    }).toThrow();
  });

  it('12 - should return false if CpfValidator.isValid returns false', () => {
    const { sut, cpfValidatorStub } = makeSut();
    jest.spyOn(cpfValidatorStub, 'isValid').mockReturnValueOnce(false);
    const { result, message } = sut.validate(
      'any_name',
      'any_email',
      'any_phone',
      'any_cpf',
    );
    expect(result).toBe(false);
    expect(message).toBe('Invalid cpf');
  });

  it('13 - should return true if CpfValidator.isValid returns true', () => {
    const { sut } = makeSut();
    const { result, message } = sut.validate(
      'any_name',
      'any_email',
      'any_phone',
      'any_cpf',
    );
    expect(result).toBe(true);
    expect(message).toBe('Valid');
  });
});
