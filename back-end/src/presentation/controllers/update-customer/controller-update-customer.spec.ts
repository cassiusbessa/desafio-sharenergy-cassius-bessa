import { httpRequest } from '@tests/customer/mocks/controller/http-update-customer.mock';
import { makeDefaultAddressValidator } from '@tests/customer/mocks/entities/validators/default-address-validator.mock';
import { makeDefaultCustomerValidator } from '@tests/customer/mocks/entities/validators/default-customer-validator.mock';
import { makeDbUpdateCustomerMock } from '@tests/customer/mocks/use-cases/db-update-customer.mock';
import { MissingParamError } from '../../errors';
import { ControllerUpdateCustomer } from './controller-update-customer';

const makeSut = () => {
  const { sut: updateCustomer } = makeDbUpdateCustomerMock();
  const { sut: customerValidator } = makeDefaultCustomerValidator();
  const { sut: addressValidator } = makeDefaultAddressValidator();
  const sut = new ControllerUpdateCustomer(
    updateCustomer,
    customerValidator,
    addressValidator,
  );
  return { sut, updateCustomer, customerValidator, addressValidator };
};

describe('UpdateCustomerController', () => {
  it('1 - should return 400 if any parameters not provided', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: {},
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(
      new MissingParamError('Update must be at least one field'),
    );
  });

  it('2 - should call customer update validate method with correct params', async () => {
    const { sut, customerValidator } = makeSut();
    const validateSpy = jest.spyOn(customerValidator, 'updateValidate');
    await sut.handle(httpRequest);
    const { name, cpf } = httpRequest.body;
    expect(validateSpy).toHaveBeenCalledWith(name, undefined, undefined, cpf);
  });
});
