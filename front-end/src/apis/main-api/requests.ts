import { LoginRequest, LoginOkResponse } from "../../interfaces/";
import { Customer } from "../../interfaces/customers";

export const login = async (admin: LoginRequest): Promise<LoginOkResponse> => {
  const response =  await fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(admin),
  });
  const result = await response.json();
  return result;
};

export const validateAdminToken = async (token: string): Promise<Boolean> => {
  const response = await fetch('http://localhost:3001/admin/me', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    }}
  );
  const result = await response.json();
  return result.data;
};

export const getCustomers = async (token: string): Promise<Customer[]> => {
  const response = await fetch('http://localhost:3001/customers', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    }}
  );
  const result = await response.json();
  return result.data;
}

export const deleteCustomer = async (token: string, id: string): Promise<void> => {
  await fetch(`http://localhost:3001/customers/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    }}
  );
}

export const updateCustomer = async (token: string, customer: Customer): Promise<Customer> => {
  const response = await fetch(`http://localhost:3001/customers/${customer._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
    body: JSON.stringify(customer),
  });
  const result = await response.json();
  return result.data;
}


