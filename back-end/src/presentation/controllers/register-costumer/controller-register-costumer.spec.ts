import { httpRequest } from '@tests/customer/mocks/controller/http-register-customer.mock';
import {
  MissingParamError,
  InvalidParamError,
  EmailInUseError,
  ServerError,
} from '@presentation/errors';
import { makeDefaultControllerRegisterCustomer as makeSut } from '@tests/customer/mocks/controller/default-controller-register-customer.mock';

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

  it('3 - should return 400 if customer validate method returns false', async () => {
    const { sut, customerValidator } = makeSut();
    jest
      .spyOn(customerValidator, 'validate')
      .mockReturnValueOnce({ result: false, message: 'any_message' });
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(
      new InvalidParamError('customer: any_message'),
    );
  });

  it('4 - shoud call address validate method with correct params', async () => {
    const { sut, addressValidator } = makeSut();
    const validateSpy = jest.spyOn(addressValidator, 'validate');
    await sut.handle(httpRequest);
    expect(validateSpy).toHaveBeenCalledWith({
      street: 'any_street',
      number: 'any_number',
      city: 'any_city',
      state: 'any_state',
      country: 'any_country',
      zipcode: 'any_zipcode',
    });
  });

  it('5 - should return 400 if address validate method returns false', async () => {
    const { sut, addressValidator } = makeSut();
    jest
      .spyOn(addressValidator, 'validate')
      .mockReturnValueOnce({ result: false, message: 'any_message' });
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(
      new InvalidParamError('address: any_message'),
    );
  });

  it('6 - should call registerCustomer with correct params', async () => {
    const { sut, registerCustomer } = makeSut();
    const registerSpy = jest.spyOn(registerCustomer, 'register');
    await sut.handle(httpRequest);
    expect(registerSpy).toHaveBeenCalledWith(httpRequest.body);
  });

  it('7 - should return 403 if registerCustomer returns false', async () => {
    const { sut, registerCustomer } = makeSut();
    jest
      .spyOn(registerCustomer, 'register')
      .mockReturnValueOnce(new Promise((resolve) => resolve(false)));
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(403);
    expect(httpResponse.body).toEqual(new EmailInUseError());
  });

  it('8 - should return 201 if registerCustomer returns true', async () => {
    const { sut } = makeSut();
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(201);
    expect(httpResponse.body.message).toEqual(
      'Customer registered successfully',
    );
  });

  it('9 - should return 500 if registerCustomer throws', async () => {
    const { sut, registerCustomer } = makeSut();
    jest
      .spyOn(registerCustomer, 'register')
      .mockReturnValueOnce(
        new Promise((resolve, reject) => reject(new Error())),
      );
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(500);
    expect(httpResponse.body).toEqual(new ServerError());
  });

  it('10 - should return 500 if customerValidator throws', async () => {
    const { sut, customerValidator } = makeSut();
    jest.spyOn(customerValidator, 'validate').mockImplementationOnce(() => {
      throw new Error();
    });
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(500);
    expect(httpResponse.body).toEqual(new ServerError());
  });

  it('11 - should return 500 if addressValidator throws', async () => {
    const { sut, addressValidator } = makeSut();
    jest.spyOn(addressValidator, 'validate').mockImplementationOnce(() => {
      throw new Error();
    });
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(500);
    expect(httpResponse.body).toEqual(new ServerError());
  });
});
