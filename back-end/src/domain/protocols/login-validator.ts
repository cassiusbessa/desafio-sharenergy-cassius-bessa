export interface LoginValidator {
  validate: (username: string, password: string) => boolean;
}
