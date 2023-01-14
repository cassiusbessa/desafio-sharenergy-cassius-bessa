import { ServerError } from '../errors/server-error';
import { HttpResponse } from '../protocols';

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: { message: error.message },
});

export const unauthorized = (error: Error): HttpResponse => ({
  statusCode: 401,
  body: { message: error.message },
});

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  body: { message: error.message },
});

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: { message: new ServerError().message },
});

export const notFound = (error: Error): HttpResponse => ({
  statusCode: 404,
  body: { message: error.message },
});

export const ok = (
  data: any,
  statusCode?: number,
  message?: string,
): HttpResponse => ({
  statusCode: statusCode ?? 200,
  body: { message, data },
});
