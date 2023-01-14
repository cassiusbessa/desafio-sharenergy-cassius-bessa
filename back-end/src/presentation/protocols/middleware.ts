import { HttpRequest, HttpResponse } from './http';
export interface Middleware {
  handle: (httpRequest?: HttpRequest, response?: any) => Promise<HttpResponse>;
}
