import { Custumer, CustumerProps } from './custumer';
import { EmailValidator } from '../protocols/email-validator';

const makeEmailValidator = (): EmailValidator => {
  class EmailValidatorStub implements EmailValidator {
    isValid(_email: string): boolean {
      return true;
    }
  }
  return new EmailValidatorStub();
};

interface SutTypes {
  sut: Custumer;
  emailValidatorStub: EmailValidator;
}

const makeSut = (custumerProps: CustumerProps): SutTypes => {
  const emailValidatorStub = makeEmailValidator();
  const sut = new Custumer(custumerProps, emailValidatorStub);
  return { sut, emailValidatorStub };
};

describe('Custumer', () => {
  it('1 - should be able to create a custumer', () => {
    const sutProps: CustumerProps = {
      name: 'valid_name',
      email: 'valid_email',
      phone: 'valid_phone',
      cpf: 'valid_cpf',
      address: 'valid_address',
    };
    const { sut } = makeSut(sutProps);
    expect(sut).toBeTruthy();
  });

  it('2 - should not be able to create a custume name with less than 3 characters', () => {
    const sutProps: CustumerProps = {
      name: 'na',
      email: 'valid_email',
      phone: 'valid_phone',
      cpf: 'valid_cpf',
      address: 'valid_address',
    };
    expect(() => new Custumer(sutProps, makeEmailValidator())).toThrowError();
  });
});