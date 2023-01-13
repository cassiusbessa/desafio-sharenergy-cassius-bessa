import { Controller, Post, Req, Res } from '@nestjs/common';
import { ControllerRegisterCustomer } from '@presentation/controllers/register-costumer/controller-register-costumer';
import { HttpRequest } from '@presentation/protocols';

@Controller('/customers')
export class NestControllerRegisterCustomer extends ControllerRegisterCustomer {
  @Post()
  async handle(@Req() httpRequest: HttpRequest, @Res() res: any) {
    const result = await super.handle(httpRequest);
    return res.status(result.statusCode).json(result.body);
  }
}
