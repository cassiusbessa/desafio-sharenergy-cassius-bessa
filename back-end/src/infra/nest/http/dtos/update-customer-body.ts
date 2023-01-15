import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateCustomerBody {
  @ApiPropertyOptional({
    description: 'Nome do cliente',
    example: 'Cássius Bessa',
  })
  name?: string;

  @ApiPropertyOptional({
    description: 'E-mail do cliente',
    example: 'cassius@email.com',
  })
  email?: string;

  @ApiPropertyOptional({
    description: 'Telefone do cliente',
    example: '+5511999999999',
  })
  phone?: string;

  @ApiPropertyOptional({
    description: 'CPF do cliente',
    example: '123.456.789-00',
  })
  cpf?: string;

  @ApiPropertyOptional({
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
  address?: {
    street?: string;
    number?: string;
    complement?: string;
    city?: string;
    state?: string;
    country?: string;
    zipcode?: string;
  };
}
