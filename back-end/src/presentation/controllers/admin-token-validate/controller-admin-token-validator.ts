import { AdminTokenValidate } from '@domain/use-cases/admin-use-cases/admin-token-validate';
import { MissingParamError, UnauthorizedError } from '@presentation/errors';
import { unauthorized } from '@presentation/helpers/http-helper';
import { Controller, HttpRequest, HttpResponse } from '@presentation/protocols';

export class ControllerAdminTokenValidator implements Controller {
  constructor(private readonly adminTokenValidate: AdminTokenValidate) {}

  async handle(httpRequest: HttpRequest, httpResponse?: HttpResponse) {
    const { authorization } = httpRequest.headers;
    if (!authorization) {
      return unauthorized(new UnauthorizedError('No token provided'));
    }
  }
}
