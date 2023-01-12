import { GetAllCustomer } from '@domain/use-cases/customer-use-cases/get-all-customer';
import { ok, serverError } from '@presentation/helpers/http-helper';

export class ControllerGetAllCustomer {
  private readonly getAllCustomer: GetAllCustomer;
  constructor(getAllCustomer: GetAllCustomer) {
    this.getAllCustomer = getAllCustomer;
  }
  async handle() {
    try {
      const customer = await this.getAllCustomer.getAll();
      return ok(customer, 200, 'Customer list successfully');
    } catch (error) {
      return serverError();
    }
  }
}
