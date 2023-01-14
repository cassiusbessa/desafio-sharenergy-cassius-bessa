import { defaultMiddlewareAuthMock as makeSut } from '@tests/admin/mocks/middleware/default-middleware-auth.mock';

describe('AuthMiddleware', () => {
  it('1 - should return 401 if no authorization header is found', async () => {
    const { sut } = makeSut();
    const httpResponse = await sut.handle({ headers: {} });
    expect(httpResponse.statusCode).toBe(401);
    expect(httpResponse.body).toEqual({
      message: 'Unauthorized',
    });
  });
});
