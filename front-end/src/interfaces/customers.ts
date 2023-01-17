export interface Customer {
  _id: string;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  address: Address;
}

export interface Address {
  street: string;
  number: string;
  complement: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  _id: string;
}