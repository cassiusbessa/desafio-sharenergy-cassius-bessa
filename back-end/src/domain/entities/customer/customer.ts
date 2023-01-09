import { randomUUID } from 'crypto';
import { AddressProps } from '../address/address';
import {
  CustomerValidators,
  ValidatorResult,
} from './validators/customer-validators';

export interface CustomerProps {
  name: string;
  email: string;
  phone: string;
  cpf: string;
  address: AddressProps;
}

export interface PersistenceCustomer extends CustomerProps {
  id: string;
}

export class Customer {
  private props: CustomerProps;
  private readonly _id: string;
  private customerValidator: CustomerValidators;
  private validatorResult: ValidatorResult;

  constructor(
    props: CustomerProps,
    customerValidator: CustomerValidators,
    id?: string,
  ) {
    this.customerValidator = customerValidator;
    this.props = props;
    this._id = id ?? randomUUID();
  }

  public isValid(): ValidatorResult {
    this.validatorResult = this.customerValidator.validate(
      this.props.name,
      this.props.email,
      this.props.phone,
      this.props.cpf,
    );
    return this.validatorResult;
  }

  public getAllProps(): PersistenceCustomer {
    return {
      ...this.props,
      id: this._id,
    };
  }
}
