export interface LoginValidator {
  validate: (email: string, password: string) => boolean;
}
