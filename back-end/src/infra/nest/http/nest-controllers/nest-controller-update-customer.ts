import { CustomerValidator, AddressValidator } from '@domain/protocols';
import { UpdateCustomer } from '@domain/use-cases/customer-use-cases/update-customer';
import { Controller, Inject, Put, Req, Res } from '@nestjs/common';
import {
  ApiHeader,
  ApiBody,
  ApiForbiddenResponse,
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiTags,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { ControllerUpdateCustomer } from '@presentation/controllers/update-customer/controller-update-customer';
import { HttpRequest, HttpResponse } from '@presentation/protocols';
import { ResponseUpdateCustomer, UpdateCustomerBody } from '../dtos';

@ApiTags('Customers')
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

  @ApiHeader({
    name: 'Authorization',
    description: 'Token de acesso',
    required: true,
  })
  @ApiBody({ type: UpdateCustomerBody })
  @ApiOkResponse({
    description: 'Cliente atualizado com sucesso',
    type: ResponseUpdateCustomer,
  })
  @ApiForbiddenResponse({
    description: 'Email já cadastrado',
  })
  @ApiBadRequestResponse({
    description: 'Dados inválidos',
  })
  @ApiNotFoundResponse({
    description: 'Cliente não encontrado',
  })
  @Put('/:id')
  async handle(
    @Req() httpRequest: HttpRequest,
    @Res() res: any,
  ): Promise<HttpResponse> {
    const result = await super.handle(httpRequest);
    return res.status(result.statusCode).json(result.body);
  }
}
