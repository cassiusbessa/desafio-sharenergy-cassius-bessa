import { defaultControllerLoginAdminMock } from '@tests/customer/mocks/controller/default-controller-login-admin.mock';

describe('LoginAdminController', () => {
  it('1 - should return 400 if any parameters not provided', async () => {
    const { sut } = defaultControllerLoginAdminMock();
    const httpRequest = {
      body: {},
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual({
      message: 'Missing param: email',
    });
  });
});
