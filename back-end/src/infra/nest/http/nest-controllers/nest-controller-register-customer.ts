import { CustomerValidator, AddressValidator } from '@domain/protocols';
import { RegisterCustomer } from '@domain/use-cases/customer-use-cases/register-customer';
import { Controller, Inject, Post, Req, Res } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiHeader,
  ApiTags,
} from '@nestjs/swagger';
import { ControllerRegisterCustomer } from '@presentation/controllers/register-costumer/controller-register-costumer';
import { HttpRequest } from '@presentation/protocols';
import { ResponseCreateCustomer, CreateCustomerBody } from '../dtos';

@ApiTags('Customers')
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

  @ApiHeader({
    name: 'Authorization',
    description: 'Token de acesso',
    required: true,
  })
  @ApiBody({ type: CreateCustomerBody })
  @ApiCreatedResponse({
    description: 'Cliente criado com sucesso',
    type: ResponseCreateCustomer,
    status: 201,
  })
  @ApiForbiddenResponse({
    description: 'Email já cadastrado',
  })
  @ApiBadRequestResponse({
    description: 'Dados inválidos',
  })
  @Post()
  async handle(@Req() httpRequest: HttpRequest, @Res() res: any) {
    const result = await super.handle(httpRequest);
    return res.status(result.statusCode).json(result.body);
  }
}
