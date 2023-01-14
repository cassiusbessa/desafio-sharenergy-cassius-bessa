export interface LoginAdmin {
  login: (email: string, password: string) => Promise<string>;
}
