import * as dotenv from 'dotenv';
import { LoginValidator } from '@domain/protocols';
import { Injectable } from '@nestjs/common';
dotenv.config();

@Injectable()
export class NestLoginAdminValidator implements LoginValidator {
  validate(username: string, password: string): boolean {
    const isUsernameValid = username === process.env.ADMIN_USERNAME;
    const isPasswordValid = password === process.env.ADMIN_PASSWORD;
    return isUsernameValid && isPasswordValid;
  }
}
