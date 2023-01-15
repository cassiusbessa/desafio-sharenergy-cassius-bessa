export interface TokenPayload {
  username: string;
  password?: string;
}

export interface TokenService {
  verifyToken: (token: string) => Promise<TokenPayload | false>;
}
