import { Custumer } from './custumer';

describe('Custumer', () => {
  it('1 - should be able to create a custumer', () => {
    const custumer = new Custumer({
      name: 'valid_name',
      email: 'valid_email',
      phone: 'valid_phone',
      cpf: 'valid_cpf',
      address: 'valid_address',
    });
    expect(custumer).toBeTruthy();
  });

  it('2 - should not be able to create a custume name with less than 3 characters', () => {
    expect(
      () =>
        new Custumer({
          name: '12',
          email: 'valid_email',
          phone: 'valid_phone',
          cpf: 'valid_cpf',
          address: 'valid_address',
        }),
    ).toThrowError();
  });
});
