import { CustomerValidator, AddressValidator } from '@domain/protocols';
import { RegisterCustomer } from '@domain/use-cases/customer-use-cases/register-customer';
import { Controller, Inject, Post, Req, Res } from '@nestjs/common';
import { ControllerRegisterCustomer } from '@presentation/controllers/register-costumer/controller-register-costumer';
import { HttpRequest } from '@presentation/protocols';

@Controller('/customers')
export class NestControllerRegisterCustomer extends ControllerRegisterCustomer {
  constructor(
    @Inject('RegisterCustomer')
    registerCustomer: RegisterCustomer,
    @Inject('CustomerValidator')
    customerValidator: CustomerValidator,
    @Inject('AddressValidator')
    addressValidator: AddressValidator,
  ) {
    super(registerCustomer, customerValidator, addressValidator);
  }
  @Post()
  async handle(@Req() httpRequest: HttpRequest, @Res() res: any) {
    const result = await super.handle(httpRequest);
    return res.status(result.statusCode).json(result.body);
  }
}
