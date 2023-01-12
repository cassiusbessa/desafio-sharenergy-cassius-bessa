import { ServerError } from '@presentation/errors';
import { makeDefaultControllerGetAllCustomer as makeSut } from '@tests/customer/mocks/controller/default-controller-get-all-customer.mock';
import { defaultPersistenceCustomer } from '@tests/customer/mocks/entities/default-entitie.mock';

describe('GetAllCustomerController', () => {
  it('1 - should return 200 with repository result', async () => {
    const { sut, getAllCustomer } = makeSut();
    jest
      .spyOn(getAllCustomer, 'getAll')
      .mockResolvedValueOnce([defaultPersistenceCustomer]);
    const httpResponse = await sut.handle();
    expect(httpResponse.statusCode).toBe(200);
    expect(httpResponse.body).toEqual({
      data: [defaultPersistenceCustomer],
      message: 'Customer list successfully',
    });
  });
  it('2 - should return 500 if repository throws', async () => {
    const { sut, getAllCustomer } = makeSut();
    jest.spyOn(getAllCustomer, 'getAll').mockRejectedValueOnce(new Error());
    const httpResponse = await sut.handle();
    expect(httpResponse.statusCode).toBe(500);
    expect(httpResponse.body).toEqual(new ServerError());
  });
});
