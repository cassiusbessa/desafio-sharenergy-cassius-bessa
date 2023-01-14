import { DeleteCustomer } from '@domain/use-cases/customer-use-cases/delete-customer';
import { Controller, Delete, Inject, Req, Res } from '@nestjs/common';
import { ControllerDeleteCustomer } from '@presentation/controllers/delete-customer/controller-delete-customer';
import { HttpRequest, HttpResponse } from '@presentation/protocols';

@Controller('/customers')
export class NestControllerDeleteCustomer extends ControllerDeleteCustomer {
  constructor(
    @Inject('DeleteCustomer')
    deleteCustomer: DeleteCustomer,
  ) {
    super(deleteCustomer);
  }
  @Delete('/:id')
  async handle(
    @Req() httpRequest: HttpRequest,
    @Res() res: any,
  ): Promise<HttpResponse> {
    const result = await super.handle(httpRequest);
    return res.status(result.statusCode).json(result.body);
  }
}
