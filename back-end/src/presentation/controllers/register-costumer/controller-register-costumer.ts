import { Controller, HttpRequest } from 'src/presentation/protocols';

export class ControllerRegisterCustomer implements Controller {
  async handle(httpRequest: HttpRequest) {
    const requiredFields = ['name', 'email', 'phone', 'cpf', 'address'];
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return {
          statusCode: 400,
          body: { message: `Missing param: ${field}` },
        };
      }
    }
    return { statusCode: 201, body: { message: 'created' } };
  }
}
