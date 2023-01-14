import { defaultPersistenceCustomer } from '@tests/customer/mocks/entities/default-entitie.mock';
import { httpRequest } from '@tests/customer/mocks/controller/http-update-customer.mock';
import { makeDefaultControllerUpdateCustomer as makeSut } from '@tests/customer/mocks/controller/default-controller-update-customer.mock';

describe('UpdateCustomerController', () => {
  it('1 - should return 400 if any parameters not provided', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: {},
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual({
      message: 'Missing param: Update must be at least one field',
    });
  });

  it('2 - should call customer update validate method with correct params', async () => {
    const { sut, customerValidator } = makeSut();
    const validateSpy = jest.spyOn(customerValidator, 'updateValidate');
    await sut.handle(httpRequest);
    const { name, cpf } = httpRequest.body;
    expect(validateSpy).toHaveBeenCalledWith(name, undefined, undefined, cpf);
  });

  it('3 - should return 400 if customer update validate method returns false', async () => {
    const { sut, customerValidator } = makeSut();
    jest
      .spyOn(customerValidator, 'updateValidate')
      .mockReturnValueOnce({ result: false, message: 'any_message' });
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual({
      message: 'Invalid param: customer: any_message',
    });
  });

  it('4 - should call address update validate method with correct params', async () => {
    const { sut, addressValidator } = makeSut();
    const validateSpy = jest.spyOn(addressValidator, 'updateValidate');
    await sut.handle(httpRequest);
    const { address } = httpRequest.body;
    expect(validateSpy).toHaveBeenCalledWith(address);
  });

  it('5 - should return 400 if address update validate method returns false', async () => {
    const { sut, addressValidator } = makeSut();
    jest
      .spyOn(addressValidator, 'updateValidate')
      .mockReturnValueOnce({ result: false, message: 'any_message' });
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual({
      message: 'Invalid param: address: any_message',
    });
  });
  it('6 - should call updateCustomer with correct params', async () => {
    const { sut, updateCustomer } = makeSut();
    const updateSpy = jest.spyOn(updateCustomer, 'update');
    await sut.handle(httpRequest);
    const { id } = httpRequest.params;
    expect(updateSpy).toHaveBeenCalledWith(httpRequest.body, id);
  });

  it('7 - should return 404 if updateCustomer returns null', async () => {
    const { sut, updateCustomer } = makeSut();
    jest.spyOn(updateCustomer, 'update').mockReturnValueOnce(null);
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(404);
    expect(httpResponse.body).toEqual({ message: 'Customer not found' });
  });

  it('8 - should return 200 if updateCustomer returns a customer', async () => {
    const { sut, updateCustomer } = makeSut();
    jest
      .spyOn(updateCustomer, 'update')
      .mockReturnValueOnce(Promise.resolve(defaultPersistenceCustomer));
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(200);
    expect(httpResponse.body).toEqual({
      data: defaultPersistenceCustomer,
      message: 'Customer updated successfully',
    });
  });

  it('9 - should return 500 if updateCustomer throws', async () => {
    const { sut, updateCustomer } = makeSut();
    jest.spyOn(updateCustomer, 'update').mockImplementationOnce(() => {
      throw new Error();
    });
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(500);
    expect(httpResponse.body).toEqual({ message: 'Internal server error' });
  });

  it('10 - should return 500 if customerValidator throws', async () => {
    const { sut, customerValidator } = makeSut();
    jest
      .spyOn(customerValidator, 'updateValidate')
      .mockImplementationOnce(() => {
        throw new Error();
      });
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(500);
    expect(httpResponse.body).toEqual({ message: 'Internal server error' });
  });

  it('11 - should return 500 if addressValidator throws', async () => {
    const { sut, addressValidator } = makeSut();
    jest
      .spyOn(addressValidator, 'updateValidate')
      .mockImplementationOnce(() => {
        throw new Error();
      });
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(500);
    expect(httpResponse.body).toEqual({ message: 'Internal server error' });
  });
});
