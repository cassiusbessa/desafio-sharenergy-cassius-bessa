import { Custumer } from './custumer';

describe('Custumer', () => {
  it('should be able to create a custumer', () => {
    const custumer = new Custumer({
      name: 'valid_name',
      email: 'valid_email',
      phone: 'valid_phone',
      cpf: 'valid_cpf',
      address: 'valid_address',
    });
    expect(custumer).toBeTruthy();
  });
});
