import { Controller, Put, Req, Res } from '@nestjs/common';
import { ControllerUpdateCustomer } from '@presentation/controllers/update-customer/controller-update-customer';
import { HttpRequest, HttpResponse } from '@presentation/protocols';

@Controller('/customers')
export class NestControllerUpdateCustomer extends ControllerUpdateCustomer {
  @Put()
  async handle(
    @Req() httpRequest: HttpRequest,
    @Res() res: any,
  ): Promise<HttpResponse> {
    const result = await super.handle(httpRequest);
    return res.status(result.statusCode).json(result.body);
  }
}
