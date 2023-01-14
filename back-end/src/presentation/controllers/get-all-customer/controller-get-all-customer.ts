import { GetAllCustomer } from '@domain/use-cases/customer-use-cases/get-all-customer';
import { ok, serverError } from '@presentation/helpers/http-helper';
import { Controller, HttpRequest, HttpResponse } from '@presentation/protocols';

export class ControllerGetAllCustomer implements Controller {
  private readonly getAllCustomer: GetAllCustomer;
  constructor(getAllCustomer: GetAllCustomer) {
    this.getAllCustomer = getAllCustomer;
  }
  async handle(httpRequest?: HttpRequest, httpResponse?: HttpResponse) {
    try {
      const customer = await this.getAllCustomer.getAll();
      return ok(customer, 200, 'Customer list successfully');
    } catch (error) {
      console.error(error);
      return serverError();
    }
  }
}
