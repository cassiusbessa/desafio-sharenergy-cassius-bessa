import {
  MissingParamError,
  InvalidParamError,
  EmailInUseError,
} from '../../errors';
import {
  badRequest,
  forbidden,
  ok,
  serverError,
} from '../../helpers/http-helper';
import { Controller, HttpRequest } from 'src/presentation/protocols';
import { RegisterCustomer } from '@domain/use-cases/customer-use-cases/register-customer';
import { CustomerValidator, AddressValidator } from '@domain/protocols';

export class ControllerRegisterCustomer implements Controller {
  private readonly registerCustomer: RegisterCustomer;
  private readonly customerValidator: CustomerValidator;
  private readonly addressValidator: AddressValidator;
  constructor(
    registerCustomer: RegisterCustomer,
    customerValidator: CustomerValidator,
    addressValidator: AddressValidator,
  ) {
    this.addressValidator = addressValidator;
    this.registerCustomer = registerCustomer;
    this.customerValidator = customerValidator;
  }
  async handle(httpRequest: HttpRequest) {
    try {
      const requiredFields = ['name', 'email', 'phone', 'cpf', 'address'];
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field));
        }
      }
      const { name, email, phone, cpf, address } = httpRequest.body;
      const isValid = this.customerValidator.validate(name, email, phone, cpf);
      if (!isValid.result) {
        return badRequest(
          new InvalidParamError('customer: ' + isValid.message),
        );
      }
      const isValidAddress = this.addressValidator.validate(address);
      if (!isValidAddress.result) {
        return badRequest(
          new InvalidParamError('address: ' + isValidAddress.message),
        );
      }
      const registered = await this.registerCustomer.register(httpRequest.body);

      if (!registered) {
        return forbidden(new EmailInUseError());
      }

      return ok(registered, 201, 'Customer registered successfully');
    } catch (error) {
      return serverError();
    }
  }
}
