import { defaultControllerAdminTokenValidatorMock as makeSut } from '@tests/admin/mocks/controller/default-controller-admin-token-validator.mock';

describe('AdminTokenValidateController', () => {
  it('1 - should return 401 if no token is provided', async () => {
    const { sut } = makeSut();
    const httpResponse = await sut.handle({ headers: {} });
    expect(httpResponse.statusCode).toBe(401);
  });
});
