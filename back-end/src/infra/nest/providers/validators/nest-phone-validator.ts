import { PhoneValidator } from '@domain/protocols';
import { PhoneNumberUtil } from 'google-libphonenumber';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NestPhoneValidator implements PhoneValidator {
  isValid(phone: string): boolean {
    console.log('validando phone');
    const phoneUtil = PhoneNumberUtil.getInstance();
    const countryCode = phoneUtil.getCountryCodeForRegion(phone).toString();
    const phoneNumber = phoneUtil.parse(phone, countryCode);
    return phoneUtil.isValidNumber(phoneNumber);
  }
}
