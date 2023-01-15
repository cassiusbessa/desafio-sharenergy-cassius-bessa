import { ApiProperty } from '@nestjs/swagger';
import { ResponseCreateCustomer } from './response-create-customer';

export class ResponseUpdateCustomer extends ResponseCreateCustomer {
  @ApiProperty({
    description: 'Mensagem de sucesso',
    example: 'Customer updated successfully',
  })
  message: string;
}
