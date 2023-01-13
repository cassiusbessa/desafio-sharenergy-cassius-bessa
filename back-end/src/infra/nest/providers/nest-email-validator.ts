import { Injectable } from '@nestjs/common';
import { EmailValidator } from '@domain/protocols';

@Injectable()
export class NestEmailValidator implements EmailValidator {
  isValid(email: string): boolean {
    const pattern = new RegExp(
      '^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$',
    );
    return pattern.test(email);
  }
}
