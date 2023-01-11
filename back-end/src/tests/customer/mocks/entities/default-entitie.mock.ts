import { PersistenceCustomer } from '@domain/entities/customer/customer';

export const defaultPersistenceCustomer: PersistenceCustomer = {
  id: 'any_id',
  name: 'any_name',
  email: 'any_email',
  cpf: 'any_cpf',
  phone: 'any_phone',
  address: {
    street: 'any_street',
    number: 'any_number',
    complement: 'any_complement',
    city: 'any_city',
    state: 'any_state',
    country: 'any_country',
    zipcode: 'any_zipcode',
  },
};
