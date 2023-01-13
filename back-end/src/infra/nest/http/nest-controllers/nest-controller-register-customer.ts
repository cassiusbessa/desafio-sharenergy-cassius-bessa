import { Controller, Post } from '@nestjs/common';
import { ControllerRegisterCustomer } from '@presentation/controllers/register-costumer/controller-register-costumer';
import { HttpRequest } from '@presentation/protocols';

@Controller('/customers')
export class NestControllerRegisterCustomer extends ControllerRegisterCustomer {
  @Post()
  async handle(httpRequest: HttpRequest) {
    return super.handle(httpRequest);
  }
}
