import { AddressValidators } from '@domain/entities/address/validators/address-validators';

export const makeDefaultAddressValidator = () => {
  const sut = new AddressValidators();
  return { sut };
};
