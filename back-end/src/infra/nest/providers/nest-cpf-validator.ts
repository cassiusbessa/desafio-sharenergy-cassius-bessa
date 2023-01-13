import { Injectable } from '@nestjs/common';
import { cpf } from 'cpf-cnpj-validator';
import { CpfValidator } from '@domain/protocols';

@Injectable()
export class NestCpfValidator implements CpfValidator {
  isValid(cpfNumber: string): boolean {
    return cpf.isValid(cpfNumber);
  }
}
