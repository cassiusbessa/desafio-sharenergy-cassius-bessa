import { CustomerValidator, AddressValidator } from '@domain/protocols';
import { UpdateCustomer } from '@domain/use-cases/customer-use-cases/update-customer';
import { InvalidParamError, MissingParamError } from '@presentation/errors';
import { badRequest } from '@presentation/helpers/http-helper';
import { HttpRequest } from '@presentation/protocols';

export class ControllerUpdateCustomer {
  private readonly updateCustomer: UpdateCustomer;
  private readonly customerValidator: CustomerValidator;
  private readonly addressValidator: AddressValidator;
  constructor(
    updateCustomer: UpdateCustomer,
    customerValidator: CustomerValidator,
    addressValidator: AddressValidator,
  ) {
    this.addressValidator = addressValidator;
    this.updateCustomer = updateCustomer;
    this.customerValidator = customerValidator;
  }
  async handle(httpRequest: HttpRequest) {
    if (Object.keys(httpRequest.body).length === 0) {
      return badRequest(
        new MissingParamError('Update must be at least one field'),
      );
    }
    const { name, email, phone, cpf, address } = httpRequest.body;
    const isValid = this.customerValidator.updateValidate(
      name,
      email,
      phone,
      cpf,
    );
    if (!isValid.result) {
      return badRequest(new InvalidParamError('customer: ' + isValid.message));
    }
    const isValidAddress = this.addressValidator.updateValidate(address);
    if (!isValidAddress.result) {
      return badRequest(
        new InvalidParamError('address: ' + isValidAddress.message),
      );
    }
  }
}
