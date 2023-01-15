import { ApiProperty } from '@nestjs/swagger';

export class ResponseGetAllCustomer {
  @ApiProperty({
    description: 'Mensagem de sucesso',
    example: 'Customers listed successfully',
  })
  message: string;

  @ApiProperty({
    description: 'Clientes',
    example: [
      {
        id: 'id',
        name: 'name',
        email: 'email',
        password: 'password',
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
      },
    ],
  })
  data: {
    customers: {
      id: string;
      name: string;
      email: string;
      password: string;
      createdAt: string;
      updatedAt: string;
    }[];
  };
}
