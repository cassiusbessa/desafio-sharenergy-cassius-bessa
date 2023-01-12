import { NotFound } from '@presentation/errors';
import { defaultControllerDeleteCustomerMock as makeSut } from '@tests/customer/mocks/controller/default-controller-delete-customer.mock';

describe('DeleteCustomerController', () => {
  it('1 - should return 404 if customer not found', async () => {
    const { sut, deleteCustomer } = makeSut();
    jest.spyOn(deleteCustomer, 'delete').mockResolvedValueOnce(false);
    const httpResponse = await sut.handle({ params: { id: 'any_id' } });
    expect(httpResponse.statusCode).toBe(404);
    expect(httpResponse.body).toEqual(new NotFound('Customer'));
  });
  it('2 - should return 200 if customer is deleted', async () => {
    const { sut, deleteCustomer } = makeSut();
    jest.spyOn(deleteCustomer, 'delete').mockResolvedValueOnce(true);
    const httpResponse = await sut.handle({ params: { id: 'any_id' } });
    expect(httpResponse.statusCode).toBe(200);
  });
  it('3 - should return 500 if deleteCustomer throws', async () => {
    const { sut, deleteCustomer } = makeSut();
    jest.spyOn(deleteCustomer, 'delete').mockRejectedValueOnce(new Error());
    const httpResponse = await sut.handle({ params: { id: 'any_id' } });
    expect(httpResponse.statusCode).toBe(500);
  });
});
