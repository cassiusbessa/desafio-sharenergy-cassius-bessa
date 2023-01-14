import { PhoneValidator } from '@domain/protocols';
import { PhoneNumberUtil } from 'google-libphonenumber';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NestPhoneValidator implements PhoneValidator {
  isValid(phone: string): boolean {
    const phoneUtil = PhoneNumberUtil.getInstance();
    try {
      const phoneNumber = phoneUtil.parse(phone, '');
      return phoneUtil.isValidNumber(phoneNumber);
    } catch (error) {
      return false;
    }
  }
}
