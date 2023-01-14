import { defaultControllerLoginAdminMock as makeSut } from '@tests/customer/mocks/controller/default-controller-login-admin.mock';

describe('LoginAdminController', () => {
  it('1 - should return 400 if any parameters not provided', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: {},
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual({
      message: 'Missing param: email',
    });
  });
  it('2 - should call LoginValidator with correct values', async () => {
    const { sut, loginValidator } = makeSut();
    const validateSpy = jest.spyOn(loginValidator, 'validate');
    const httpRequest = {
      body: {
        email: 'any_email',
        password: 'any_password',
      },
    };
    await sut.handle(httpRequest);
    expect(validateSpy).toHaveBeenCalledWith('any_email', 'any_password');
  });
  it('3 - should return 401 if LoginValidator returns false', async () => {
    const { sut, loginValidator } = makeSut();
    jest.spyOn(loginValidator, 'validate').mockReturnValueOnce(false);
    const httpRequest = {
      body: {
        email: 'any_email',
        password: 'any_password',
      },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(401);
    expect(httpResponse.body).toEqual({
      message: 'Unauthorized',
    });
  });
  it('4 - should call LoginAdmin with correct values', async () => {
    const { sut, loginAdmin } = makeSut();
    const loginSpy = jest.spyOn(loginAdmin, 'login');
    const httpRequest = {
      body: {
        email: 'any_email',
        password: 'any_password',
      },
    };
    await sut.handle(httpRequest);
    expect(loginSpy).toHaveBeenCalledWith('any_email', 'any_password');
  });
  it('5 - should return 500 if LoginAdmin throws', async () => {
    const { sut, loginAdmin } = makeSut();
    jest.spyOn(loginAdmin, 'login').mockImplementationOnce(() => {
      throw new Error();
    });
    const httpRequest = {
      body: {
        email: 'any_email',
        password: 'any_password',
      },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(500);
    expect(httpResponse.body).toEqual({
      message: 'Internal server error',
    });
  });
  it('6 - should return 500 if LoginValidator throws', async () => {
    const { sut, loginValidator } = makeSut();
    jest.spyOn(loginValidator, 'validate').mockImplementationOnce(() => {
      throw new Error();
    });
    const httpRequest = {
      body: {
        email: 'any_email',
        password: 'any_password',
      },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(500);
    expect(httpResponse.body).toEqual({
      message: 'Internal server error',
    });
  });
  it('7 - should return 200 if valid data is provided', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: {
        email: 'any_email',
        password: 'any_password',
      },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(200);
    expect(httpResponse.body.message).toEqual('Login successful');
  });
});
