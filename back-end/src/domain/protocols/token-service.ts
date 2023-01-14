export interface TokenPayload {
  username: string;
  password: string;
}

export interface TokenService {
  generateToken: (payload: TokenPayload) => Promise<string>;
  verifyToken: (token: string) => Promise<TokenPayload | false>;
}
