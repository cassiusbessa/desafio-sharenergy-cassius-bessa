import { AdminTokenValidate } from '@domain/use-cases/admin-use-cases/admin-token-validate';
import { Controller, Get, Inject, Req, Res } from '@nestjs/common';
import { ControllerAdminTokenValidator } from '@presentation/controllers/admin-token-validate/controller-admin-token-validator';
import { HttpRequest } from '@presentation/protocols';

@Controller('/admin/me')
export class NestControllerTokenValidatorAdmin extends ControllerAdminTokenValidator {
  constructor(
    @Inject('TokenValidatorAdmin')
    tokenValidatorAdmin: AdminTokenValidate,
  ) {
    super(tokenValidatorAdmin);
  }

  @Get()
  async handle(@Req() httpRequest: HttpRequest, @Res() res: any) {
    const result = await super.handle(httpRequest);
    return res.status(result.statusCode).json(result.body);
  }
}
