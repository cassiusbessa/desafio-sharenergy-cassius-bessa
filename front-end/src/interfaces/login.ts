export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginOkResponse {
  message: string;
  data: {accessToken: string}
}

export interface LoginNotAuthorizedResponse {
  message: string;
}