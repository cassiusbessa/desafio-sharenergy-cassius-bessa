import { defaultPersistenceCustomer } from '@tests/customer/mocks/entities/default-entitie.mock';
import { makeDbGetAllCustomerMock } from '@tests/customer/mocks/use-cases/db-get-all-customer.mock';
import { ControllerGetAllCustomer } from './controller-get-all-customer';

const makeSut = () => {
  const { sut: getAllCustomer } = makeDbGetAllCustomerMock();
  const sut = new ControllerGetAllCustomer(getAllCustomer);
  return { sut, getAllCustomer };
};

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
});
