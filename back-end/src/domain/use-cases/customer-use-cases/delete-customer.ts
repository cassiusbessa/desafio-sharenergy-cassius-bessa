export interface DeleteCustomer {
  delete: (id: string) => Promise<boolean>;
}
