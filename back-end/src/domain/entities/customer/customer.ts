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

  constructor(props: CustomerProps, id?: string) {
    this.props = props;
    this._id = id ?? randomUUID();
  }

  public static create(props: CustomerProps, id?: string): Customer {
    return new Customer(props, id);
  }

  public getAllProps(): PersistenceCustomer {
    return {
      ...this.props,
      id: this._id,
    };
  }
}
