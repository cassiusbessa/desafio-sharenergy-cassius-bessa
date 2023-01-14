import {
  ok,
  serverError,
  unauthorized,
} from '@presentation/helpers/http-helper';
import { LoginValidator } from '@domain/protocols';
import { LoginAdmin } from '@domain/use-cases/admin-use-cases/login-admin';
import { Controller } from '@nestjs/common/interfaces';
import { MissingParamError, UnauthorizedError } from '@presentation/errors';
import { badRequest } from '@presentation/helpers/http-helper';
import { HttpRequest, HttpResponse } from '@presentation/protocols';

export class ControllerLoginAdmin implements Controller {
  private readonly loginAdmin: LoginAdmin;
  private readonly loginValidator: LoginValidator;
  constructor(loginAdmin: LoginAdmin, adminValidator: LoginValidator) {
    this.loginAdmin = loginAdmin;
    this.loginValidator = adminValidator;
  }
  async handle(httpRequest: HttpRequest, httpResponse?: HttpResponse) {
    try {
      const requiredFields = ['email', 'password'];
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field));
        }
      }
      const { email, password } = httpRequest.body;
      const isValid = this.loginValidator.validate(email, password);
      if (!isValid) {
        return unauthorized(new UnauthorizedError());
      }
      const accessToken = await this.loginAdmin.login(email, password);
      return ok({ accessToken }, 200, 'Login successful');
    } catch (error) {
      return serverError();
    }
  }
}
