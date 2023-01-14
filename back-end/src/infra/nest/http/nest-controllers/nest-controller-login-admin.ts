import { LoginValidator } from '@domain/protocols';
import { LoginAdmin } from '@domain/use-cases/admin-use-cases/login-admin';
import { Controller, Inject, Post, Req, Res } from '@nestjs/common';
import { ControllerLoginAdmin } from '@presentation/controllers/login-admin/controller-login.admin';
import { HttpRequest } from '@presentation/protocols';

@Controller('/login')
export class NestControllerLoginAdmin extends ControllerLoginAdmin {
  constructor(
    @Inject('LoginAdmin')
    loginAdmin: LoginAdmin,
    @Inject('LoginValidator')
    loginValidator: LoginValidator,
  ) {
    super(loginAdmin, loginValidator);
  }
  @Post()
  async handle(@Req() httpRequest: HttpRequest, @Res() res: any) {
    const result = await super.handle(httpRequest);
    return res.status(result.statusCode).json(result.body);
  }
}
