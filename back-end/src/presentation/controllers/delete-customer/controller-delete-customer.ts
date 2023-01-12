import { DeleteCustomer } from '@domain/use-cases/customer-use-cases/delete-customer';
import { NotFound } from '@presentation/errors';
import { notFound, ok, serverError } from '@presentation/helpers/http-helper';
import { Controller, HttpRequest } from '@presentation/protocols';

export class ControllerDeleteCustomer implements Controller {
  private readonly deleteCustomer: DeleteCustomer;
  constructor(deleteCustomer: DeleteCustomer) {
    this.deleteCustomer = deleteCustomer;
  }
  async handle(httpRequest: HttpRequest) {
    const { id } = httpRequest.params;
    const deleted = await this.deleteCustomer.delete(id);
    if (!deleted) {
      return notFound(new NotFound('Customer'));
    }
    return ok(deleted, 200, 'Customer deleted successfully');
  }
}
