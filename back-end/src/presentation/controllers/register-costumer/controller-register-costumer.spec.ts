import { httpRequest } from '@tests/customer/mocks/controller/http-register-customer.mock';
import { makeDefaultAddressValidator } from '@tests/customer/mocks/entities/validators/default-address-validator.mock';
import { makeDefaultCustomerValidator } from '@tests/customer/mocks/entities/validators/default-customer-validator.mock';
import { makeDbRegisterCustomerMock } from '@tests/customer/mocks/use-cases/db-register-customer.mock';
import { MissingParamError } from '../../errors/missing-param-error';
import { ControllerRegisterCustomer } from './controller-register-costumer';

const makeSut = () => {
  const { sut: registerCustomer } = makeDbRegisterCustomerMock();
  const { sut: customerValidator } = makeDefaultCustomerValidator();
  const { sut: addressValidator } = makeDefaultAddressValidator();
  const sut = new ControllerRegisterCustomer(
    registerCustomer,
    customerValidator,
    addressValidator,
  );
  return { sut, registerCustomer, customerValidator, addressValidator };
};

describe('RegisterCostumerController', () => {
  it('1 - should return 400 if any parameters not provided', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email',
        phone: 'any_phone',
        cpf: 'any_cpf',
      },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('address'));
  });

  it('2 - should call customer validate method with correct params', async () => {
    const { sut, customerValidator } = makeSut();
    const validateSpy = jest.spyOn(customerValidator, 'validate');
    await sut.handle(httpRequest);
    expect(validateSpy).toHaveBeenCalledWith(
      'any_name',
      'any_email',
      'any_phone',
      'any_cpf',
    );
  });
});
