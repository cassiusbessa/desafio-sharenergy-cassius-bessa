import { TokenService } from '@domain/protocols/token-service';
import { UnauthorizedError } from '@presentation/errors';
import { unauthorized } from '@presentation/helpers/http-helper';
import { HttpRequest, HttpResponse, Middleware } from '@presentation/protocols';

export class AuthMiddleware implements Middleware {
  private readonly tokenService: TokenService;
  constructor(tokenService: TokenService) {
    this.tokenService = tokenService;
  }
  async handle(httpRequest: HttpRequest, httpResponse?: HttpResponse) {
    const { authorization } = httpRequest.headers;
    if (!authorization) {
      return unauthorized(new UnauthorizedError('No token provided'));
    }
    const isValid = await this.tokenService.verifyToken(authorization);
    if (!isValid) {
      return unauthorized(new UnauthorizedError('Invalid token'));
    }
  }
}
