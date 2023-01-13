import { Controller, Get } from '@nestjs/common';
import { ControllerGetAllCustomer } from '@presentation/controllers/get-all-customer/controller-get-all-customer';

@Controller('/customers')
export class NestControllerGetAllCustomer extends ControllerGetAllCustomer {
  @Get()
  async handle() {
    return super.handle();
  }
}
