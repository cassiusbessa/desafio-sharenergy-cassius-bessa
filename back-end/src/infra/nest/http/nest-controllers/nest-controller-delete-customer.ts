import { DeleteCustomer } from '@domain/use-cases/customer-use-cases/delete-customer';
import { Controller, Delete, Inject, Req, Res } from '@nestjs/common';
import {
  ApiHeader,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { ControllerDeleteCustomer } from '@presentation/controllers/delete-customer/controller-delete-customer';
import { HttpRequest, HttpResponse } from '@presentation/protocols';

@ApiTags('Customers')
@Controller('/customers')
export class NestControllerDeleteCustomer extends ControllerDeleteCustomer {
  constructor(
    @Inject('DeleteCustomer')
    deleteCustomer: DeleteCustomer,
  ) {
    super(deleteCustomer);
  }

  @ApiHeader({
    name: 'Authorization',
    description: 'Token de acesso',
    required: true,
  })
  @ApiParam({
    name: 'id',
    description: 'Id do cliente',
    required: true,
  })
  @ApiOkResponse({
    description: 'Cliente deletado com sucesso',
    schema: {
      example: {
        message: 'Customer deleted successfully',
      },
    },
  })
  @ApiNotFoundResponse({
    description: 'Cliente não encontrado',
  })
  @Delete('/:id')
  async handle(
    @Req() httpRequest: HttpRequest,
    @Res() res: any,
  ): Promise<HttpResponse> {
    const result = await super.handle(httpRequest);
    return res.status(result.statusCode).json({ message: result.body.message });
  }
}
