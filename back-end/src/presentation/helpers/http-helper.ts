import { ServerError } from '../errors/server-error';
import { HttpResponse } from '../protocols';

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
});

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  body: error,
});

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(),
});

export const notFound = (error: Error): HttpResponse => ({
  statusCode: 404,
  body: error,
});

export const ok = (
  data: any,
  statusCode?: number,
  message?: string,
): HttpResponse => ({
  statusCode: statusCode ?? 200,
  body: { message, data },
});
