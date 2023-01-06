import { PhoneNumberUtil } from 'google-libphonenumber';
import { PhoneValidator } from 'src/domain/protocols';
export class PhoneValidatorAdapter implements PhoneValidator {
  isValid(phone: string): boolean {
    const phoneUtil = PhoneNumberUtil.getInstance();
    const countryCode = phoneUtil.getCountryCodeForRegion(phone).toString();
    const phoneNumber = phoneUtil.parse(phone, countryCode);
    return phoneUtil.isValidNumber(phoneNumber);
  }
}
