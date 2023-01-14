import { TokenPayload, TokenService } from '@domain/protocols/token-service';
import { AuthMiddleware } from '@presentation/middleware/auth-middleware';

export const defaultMiddlewareAuthMock = () => {
  class TokenServiceMock implements TokenService {
    async generateToken(payload: TokenPayload): Promise<string> {
      return 'any_token';
    }
    async verifyToken(token: string): Promise<TokenPayload | false> {
      return { username: 'any_username', password: 'any_password' };
    }
  }
  const auth = new TokenServiceMock();
  const sut = new AuthMiddleware(auth);
  return { sut, auth };
};
