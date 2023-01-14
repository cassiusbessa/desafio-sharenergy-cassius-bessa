import { GetAllCustomer } from '@domain/use-cases/customer-use-cases/get-all-customer';
import { Controller, Get, Inject, Req, Res } from '@nestjs/common';
import { ControllerGetAllCustomer } from '@presentation/controllers/get-all-customer/controller-get-all-customer';
import { HttpRequest } from '@presentation/protocols';

@Controller('/customers')
export class NestControllerGetAllCustomer extends ControllerGetAllCustomer {
  constructor(
    @Inject('GetAllCustomer')
    getAllCustomer: GetAllCustomer,
  ) {
    super(getAllCustomer);
  }
  @Get()
  async handle(@Req() httpRequest: HttpRequest, @Res() res: any) {
    const result = await super.handle();
    return res.status(result.statusCode).json(result.body);
  }
}
