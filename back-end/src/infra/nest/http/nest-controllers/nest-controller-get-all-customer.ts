import { GetAllCustomer } from '@domain/use-cases/customer-use-cases/get-all-customer';
import { Controller, Get, Inject, Req, Res } from '@nestjs/common';
import { ApiHeader, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ControllerGetAllCustomer } from '@presentation/controllers/get-all-customer/controller-get-all-customer';
import { HttpRequest } from '@presentation/protocols';
import { ResponseGetAllCustomer } from '../dtos';

@ApiTags('Customers')
@Controller('/customers')
export class NestControllerGetAllCustomer extends ControllerGetAllCustomer {
  constructor(
    @Inject('GetAllCustomer')
    getAllCustomer: GetAllCustomer,
  ) {
    super(getAllCustomer);
  }

  @ApiHeader({
    name: 'Authorization',
    description: 'Token de acesso',
    required: true,
  })
  @ApiOkResponse({
    description: 'Clientes listados com sucesso',
    status: 200,
    type: ResponseGetAllCustomer,
  })
  @Get()
  async handle(@Req() httpRequest: HttpRequest, @Res() res: any) {
    const result = await super.handle();
    return res.status(result.statusCode).json(result.body);
  }
}
