import { LoginRequest, LoginOkResponse } from "../../interfaces/";
import api from "./api";

export const login = async (admin: LoginRequest): Promise<LoginOkResponse> => {
  const response =  (await api.post('/login', admin)).data as LoginOkResponse;
  return response;
};

