import { CustomerValidator, ValidatorResult } from '@domain/protocols';
import { randomUUID } from 'crypto';
import { AddressProps } from '../address/address';

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
  private customerValidator: CustomerValidator;

  constructor(
    props: CustomerProps,
    customerValidator: CustomerValidator,
    id?: string,
  ) {
    this.customerValidator = customerValidator;
    this.props = props;
    this._id = id ?? randomUUID();
  }

  public isValid(): ValidatorResult {
    return this.customerValidator.validate(
      this.props.name,
      this.props.email,
      this.props.phone,
      this.props.cpf,
    );
  }

  public getAllProps(): PersistenceCustomer {
    return {
      ...this.props,
      id: this._id,
    };
  }
}
