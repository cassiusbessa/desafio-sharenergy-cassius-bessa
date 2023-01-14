import { defaultMiddlewareAuthMock as makeSut } from '@tests/admin/mocks/middleware/default-middleware-auth.mock';

describe('AuthMiddleware', () => {
  it('1 - should return 401 if no authorization header is found', async () => {
    const { sut } = makeSut();
    const httpResponse = await sut.handle({ headers: {} });
    expect(httpResponse.statusCode).toBe(401);
    expect(httpResponse.body).toEqual({
      message: 'No token provided',
    });
  });
  it('2 - should call TokenService with correct token', async () => {
    const { sut, auth } = makeSut();
    const token = 'any_token';
    const verifyTokenSpy = jest.spyOn(auth, 'verifyToken');
    await sut.handle({ headers: { authorization: token } });
    expect(verifyTokenSpy).toHaveBeenCalledWith(token);
  });
  it('3 - should return 401 if TokenService returns false', async () => {
    const { sut, auth } = makeSut();
    const token = 'invalid_token';
    jest.spyOn(auth, 'verifyToken').mockReturnValueOnce(Promise.resolve(false));
    const httpResponse = await sut.handle({
      headers: { authorization: token },
    });
    expect(httpResponse.statusCode).toBe(401);
    expect(httpResponse.body).toEqual({
      message: 'Invalid token',
    });
  });
});
