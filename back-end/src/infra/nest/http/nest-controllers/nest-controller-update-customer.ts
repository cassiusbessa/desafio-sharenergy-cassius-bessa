import { CustomerValidator, AddressValidator } from '@domain/protocols';
import { RegisterCustomer } from '@domain/use-cases/customer-use-cases/register-customer';
import { UpdateCustomer } from '@domain/use-cases/customer-use-cases/update-customer';
import { Controller, Inject, Put, Req, Res } from '@nestjs/common';
import { ControllerUpdateCustomer } from '@presentation/controllers/update-customer/controller-update-customer';
import { HttpRequest, HttpResponse } from '@presentation/protocols';

@Controller('/customers')
export class NestControllerUpdateCustomer extends ControllerUpdateCustomer {
  constructor(
    @Inject('UpdateCustomer')
    updateCustomer: UpdateCustomer,
    @Inject('CustomerValidator')
    customerValidator: CustomerValidator,
    @Inject('AddressValidator')
    addressValidator: AddressValidator,
  ) {
    super(updateCustomer, customerValidator, addressValidator);
  }
  @Put('/:id')
  async handle(
    @Req() httpRequest: HttpRequest,
    @Res() res: any,
  ): Promise<HttpResponse> {
    const result = await super.handle(httpRequest);
    return res.status(result.statusCode).json(result.body);
  }
}
