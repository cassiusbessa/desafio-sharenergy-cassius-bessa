import { EmailValidator } from 'src/app/protocols';

export class EmailValidatorAdapter implements EmailValidator {
  isValid(email: string): boolean {
    const pattern = new RegExp(
      '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$',
    );
    return pattern.test(email);
  }
}
