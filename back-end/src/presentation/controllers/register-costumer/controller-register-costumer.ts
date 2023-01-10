import { MissingParamError } from '../../errors';
import { badRequest } from '../../helpers/http-helper';
import { Controller, HttpRequest } from 'src/presentation/protocols';
import { RegisterCustomer } from '@domain/use-cases/customer-use-cases/register-customer';
import { CustomerFactory } from '@domain/protocols';

export class ControllerRegisterCustomer implements Controller {
  private readonly registerCustomer: RegisterCustomer;
  customerFactory: CustomerFactory;
  constructor(
    registerCustomer: RegisterCustomer,
    customerFactory: CustomerFactory,
  ) {
    this.registerCustomer = registerCustomer;
    this.customerFactory = customerFactory;
  }
  async handle(httpRequest: HttpRequest) {
    const requiredFields = ['name', 'email', 'phone', 'cpf', 'address'];
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }
    const { name, email, phone, cpf, address } = httpRequest.body;
    const { customer } = this.customerFactory.create({
      name,
      email,
      phone,
      cpf,
      address,
    });
    return { statusCode: 201, body: { message: 'created' } };
  }
}
