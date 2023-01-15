import { ApiProperty } from '@nestjs/swagger';
export class CreateCustomerBody {
  @ApiProperty({
    description: 'Nome do cliente',
    example: 'Cássius Bessa',
  })
  name: string;

  @ApiProperty({
    description: 'E-mail do cliente',
    example: 'cassius@email.com',
  })
  email: string;

  @ApiProperty({
    description:
      'Telefone do cliente no formato "+InternationalCodeNumberDDDNumberPhone"',
    example: '+5511999999999',
  })
  phone: string;

  @ApiProperty({
    description: 'CPF do cliente. Precisa ser um CPF nacional válido.',
    example: '123.456.789-00',
  })
  cpf: string;

  @ApiProperty({
    description: 'Endereço do cliente',
    example: {
      street: 'Rua dos Bobos',
      number: '0',
      complement: 'Apto 0',
      city: 'São Paulo',
      state: 'SP',
      country: 'Brasil',
      zipcode: '00000-000',
    },
  })
  address: {
    street: string;
    number: string;
    complement?: string;
    city: string;
    state: string;
    country: string;
    zipcode: string;
  };
}
