import { ApiProperty } from '@nestjs/swagger';

export class ResponseLoginAdmin {
  @ApiProperty({
    description: 'Mensagem de sucesso',
    example: 'Login successful',
  })
  message: string;

  @ApiProperty({
    description: 'Token de acesso',
    example: 'token',
  })
  data: {
    accessToken: string;
  };
}
