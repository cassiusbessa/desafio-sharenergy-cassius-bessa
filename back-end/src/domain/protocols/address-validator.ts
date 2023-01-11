import { AddressProps } from '@domain/entities/address/address';
import { ValidatorResult } from '.';

export interface AddressValidator {
  validate: (address: AddressProps) => ValidatorResult;
}
