import { LoginValidator } from '@domain/protocols';
import { LoginAdmin } from '@domain/use-cases/admin-use-cases/login-admin';
import { ControllerLoginAdmin } from '@presentation/controllers/login-admin/controller-login.admin';

export const defaultControllerLoginAdminMock = () => {
  class LoginValidatorMock implements LoginValidator {
    validate(email: string, password: string): boolean {
      return true;
    }
  }
  class LoginAdminMock implements LoginAdmin {
    async login(email: string, password: string): Promise<string> {
      return 'any_token';
    }
  }
  const loginAdmin = new LoginAdminMock();
  const loginValidator = new LoginValidatorMock();
  const sut = new ControllerLoginAdmin(loginAdmin, loginValidator);
  return { sut, loginAdmin, loginValidator };
};
