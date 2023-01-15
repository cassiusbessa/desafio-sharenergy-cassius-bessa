import { TokenService } from '@domain/protocols/token-service';
import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { AuthMiddleware } from '@presentation/middleware/auth-middleware';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class NestMiddlewareAuth
  extends AuthMiddleware
  implements NestMiddleware
{
  constructor(
    @Inject('TokenService')
    tokenService: TokenService,
  ) {
    super(tokenService);
  }
  async use(req: Request, res: Response, next: NextFunction) {
    const response = await super.handle(req, res);
    if (response.statusCode === 401) {
      return res.status(401).json(response.body);
    }
    return next();
  }
}
