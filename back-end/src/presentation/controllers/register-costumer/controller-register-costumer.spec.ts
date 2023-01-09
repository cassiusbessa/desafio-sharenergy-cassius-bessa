import { Address } from '@domain/entities/address/address';
import { anyAddressProps } from '@domain/entities/address/address.spec';
import {
  Customer,
  CustomerProps,
  PersistenceCustomer,
} from '@domain/entities/customer/customer';
import { makeSut as makeCustomerValidor } from '@domain/entities/customer/validators/customer-validators.spec';
import { RegisterCustomer } from '@domain/use-cases/customer-use-cases/register-customer';
import { ControllerRegisterCustomer } from './controller-register-costumer';

const entitieProps: CustomerProps = {
  name: 'any_name',
  email: 'any_email',
  phone: 'any_phone',
  cpf: 'any_cpf',
  address: new Address(anyAddressProps),
};
const makeEntitie = (customer: CustomerProps) => {
  const { sut: customerValidator } = makeCustomerValidor();
  return new Customer(entitieProps, customerValidator);
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
  const entite = makeEntitie(entitieProps);
  const registerCustomer = makeRegisterCustomer();
  const sut = new ControllerRegisterCustomer();
  return { sut, registerCustomer, entite };
};

describe('RegisterCostumerController', () => {
  it('Should return 400 if any parameters not provided', async () => {
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
    expect(httpResponse.body.message).toBe('Missing param: address');
  });
});
