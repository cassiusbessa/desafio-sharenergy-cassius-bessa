import { Controller, Put } from '@nestjs/common';
import { ControllerUpdateCustomer } from '@presentation/controllers/update-customer/controller-update-customer';
import { HttpRequest } from '@presentation/protocols';

@Controller('/customers')
export class NestControllerUpdateCustomer extends ControllerUpdateCustomer {
  @Put()
  async handle(httpRequest: HttpRequest) {
    return super.handle(httpRequest);
  }
}
