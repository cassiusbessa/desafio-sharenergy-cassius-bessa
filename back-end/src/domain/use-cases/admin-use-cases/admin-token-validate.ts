export interface AdminTokenValidate {
  validate: (token: string) => Promise<boolean>;
}
