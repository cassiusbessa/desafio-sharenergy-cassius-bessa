import { TokenPayload, TokenService } from '@domain/protocols/token-service';
import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { verify } from 'jsonwebtoken';
dotenv.config();

@Injectable()
export class NestTokenService implements TokenService {
  async verifyToken(token: string) {
    try {
      const payload = verify(token, process.env.JWT_SECRET) as TokenPayload;
      return payload;
    } catch (error) {
      return false;
    }
  }
}
