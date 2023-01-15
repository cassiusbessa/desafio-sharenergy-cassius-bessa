import { ApiProperty } from '@nestjs/swagger';

export class LoginAdminBody {
  @ApiProperty({
    description: 'Login da aplicação',
    example: 'admin',
  })
  username: string;

  @ApiProperty({
    description: 'Senha da aplicação',
    example: 'admin_senha',
  })
  password: string;
}
