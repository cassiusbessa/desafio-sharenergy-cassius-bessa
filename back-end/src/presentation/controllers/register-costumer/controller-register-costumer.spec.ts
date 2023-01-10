import {
  CustomerFactory,
  CustomerFactoryReturn,
} from '@domain/protocols/customer-factory';
import { Address } from '@domain/entities/address/address';
import { anyAddressProps } from '@domain/entities/address/address.spec';
import {
  Customer,
  CustomerProps,
  PersistenceCustomer,
} from '@domain/entities/customer/customer';
import { makeSut as makeCustomerValidor } from '@domain/entities/customer/validators/customer-validators.spec';
import { RegisterCustomer } from '@domain/use-cases/customer-use-cases/register-customer';
import { MissingParamError } from '../../errors';
import { ControllerRegisterCustomer } from './controller-register-costumer';
import { PropsValidators } from '@domain/entities/customer/validators/customer-validators';

const defaultHttpRequest = {
  body: {
    name: 'any_name',
    email: 'any_email',
    phone: 'any_phone',
    cpf: 'any_cpf',
    address: new Address(anyAddressProps),
  },
};
const customerFactory = (): CustomerFactory => {
  class CustomerFactoryStub implements CustomerFactory {
    public propsValidator: PropsValidators;

    public create(customerProps: CustomerProps): CustomerFactoryReturn {
      const { sut: validator } = makeCustomerValidor();
      const customer = new Customer(customerProps, validator);
      return { customer, validator };
    }
  }
  return new CustomerFactoryStub();
};

const makeRegisterCustomer = (): RegisterCustomer => {
  class RegisterCustomerStub implements RegisterCustomer {
    async register(customer: PersistenceCustomer): Promise<boolean> {
      return await new Promise((resolve) => resolve(true));
    }
  }
  return new RegisterCustomerStub();
};

const makeSut = () => {
  const registerCustomer = makeRegisterCustomer();
  const factory = customerFactory();
  const sut = new ControllerRegisterCustomer(registerCustomer, factory);
  return { sut, registerCustomer, factory };
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

  it('2 - should create entities with correct parameters', async () => {
    const { sut, factory } = makeSut();
    const customerFactory = jest.spyOn(factory, 'create');
    await sut.handle(defaultHttpRequest);
    expect(customerFactory).toHaveBeenCalledWith(defaultHttpRequest.body);
  });
});
