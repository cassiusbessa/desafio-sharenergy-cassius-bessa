import { AdminTokenValidate } from '@domain/use-cases/admin-use-cases/admin-token-validate';
import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { verify } from 'jsonwebtoken';
dotenv.config();

@Injectable()
export class NestAdminTokenValidate implements AdminTokenValidate {
  async validate(token: string) {
    try {
      const payload = verify(token, process.env.JWT_SECRET);
      if (payload) return true;
    } catch (error) {
      return false;
    }
  }
}
