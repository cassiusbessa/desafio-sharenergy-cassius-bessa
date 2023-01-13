import { Controller, Delete } from '@nestjs/common';
import { ControllerDeleteCustomer } from '@presentation/controllers/delete-customer/controller-delete-customer';
import { HttpRequest } from '@presentation/protocols';

@Controller('/customers')
export class NestControllerDeleteCustomer extends ControllerDeleteCustomer {
  @Delete()
  async handle(httpRequest: HttpRequest) {
    return super.handle(httpRequest);
  }
}
