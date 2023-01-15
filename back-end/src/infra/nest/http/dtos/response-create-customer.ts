import { ApiProperty } from '@nestjs/swagger';
export class ResponseCreateCustomer {
  @ApiProperty({
    description: 'Cliente criado',
    example: {
      message: 'Customer registered successfully',
      data: {
        id: 'c9b5e8a0-5b9f-4b9c-9c9c-0c9c9c9c9c9c',
        name: 'Cássius Bessa',
        email: 'cassius@email.com',
        phone: '+5511999999999',
        cpf: '123.456.789-00',
        address: {
          street: 'Rua dos Bobos',
          number: '0',
          complement: 'Apto 0',
          city: 'São Paulo',
          state: 'SP',
          country: 'Brasil',
          zipcode: '00000-000',
        },
      },
    },
  })
  message: string;
  data: {
    id: string;
    name: string;
    email: string;
    phone: string;
    cpf: string;
    address: {
      street: string;
      number: string;
      complement?: string;
      city: string;
      state: string;
      country: string;
      zipcode: string;
    };
  };
}
