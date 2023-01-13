import { Injectable, Inject } from '@nestjs/common';
import { CustomerValidators } from '@domain/entities/customer/validators/customer-validators';
import {
  CpfValidator,
  EmailValidator,
  PhoneValidator,
} from '@domain/protocols';

@Injectable()
export class NestCustomerValidator extends CustomerValidators {
  constructor(
    @Inject('EmailValidator') emailValidator: EmailValidator,
    @Inject('PhoneValidator') phoneValidator: PhoneValidator,
    @Inject('CpfValidator') cpfValidator: CpfValidator,
  ) {
    super({ emailValidator, phoneValidator, cpfValidator });
  }
}
