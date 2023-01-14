import * as dotenv from 'dotenv';
import { sign } from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';
import { LoginAdmin } from '@domain/use-cases/admin-use-cases/login-admin';
dotenv.config();

@Injectable()
export class NestLoginAdmin implements LoginAdmin {
  async login(username: string): Promise<string> {
    return sign({ username }, process.env.JWT_SECRET, {
      expiresIn: '7d',
      algorithm: 'HS256',
    });
  }
}
