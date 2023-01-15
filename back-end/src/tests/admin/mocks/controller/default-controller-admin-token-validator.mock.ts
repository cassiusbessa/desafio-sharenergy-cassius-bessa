import { AdminTokenValidate } from '@domain/use-cases/admin-use-cases/admin-token-validate';
import { ControllerAdminTokenValidator } from '@presentation/controllers/admin-token-validate/controller-admin-token-validator';

export const defaultControllerAdminTokenValidatorMock = () => {
  class TokenServiceMock implements AdminTokenValidate {
    async validate(token: string): Promise<boolean> {
      return true;
    }
  }
  const tokenService = new TokenServiceMock();
  const sut = new ControllerAdminTokenValidator(tokenService);
  return { sut, tokenService };
};
