import { LoginRequest, LoginOkResponse } from "../../interfaces/";

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


