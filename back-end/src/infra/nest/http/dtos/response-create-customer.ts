import { ApiProperty } from '@nestjs/swagger';

export class ResponseCreateCustomer {
  @ApiProperty({
    description: 'Mensagem de sucesso',
    example: 'Customer registered successfully',
  })
  message: string;

  @ApiProperty({
    description: 'Dados do cliente',
    example: {
      id: '1',
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
  })
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
