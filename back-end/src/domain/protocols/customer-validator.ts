import { ValidatorResult } from '.';

export interface CustomerValidator {
  validate: (
    name: string,
    email: string,
    phone: string,
    cpf: string,
  ) => ValidatorResult;
}
