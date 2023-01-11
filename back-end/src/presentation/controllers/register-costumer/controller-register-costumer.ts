import { MissingParamError, InvalidParamError } from '../../errors';
import { badRequest } from '../../helpers/http-helper';
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
    const requiredFields = ['name', 'email', 'phone', 'cpf', 'address'];
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }
    const { name, email, phone, cpf, address } = httpRequest.body;
    const isValid = this.customerValidator.validate(name, email, phone, cpf);
    if (!isValid.result) {
      return badRequest(new InvalidParamError('customer: ' + isValid.message));
    }
    const isValidAddress = this.addressValidator.validate(address);

    return { statusCode: 201, body: { message: 'created' } };
  }
}
