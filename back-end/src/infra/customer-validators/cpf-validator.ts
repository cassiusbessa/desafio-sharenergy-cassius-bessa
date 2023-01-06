import { cpf } from 'cpf-cnpj-validator';
import { CpfValidator } from 'src/domain/protocols';

export class CpfValidatorAdapter implements CpfValidator {
  isValid(cpfNumber: string): boolean {
    return cpf.isValid(cpfNumber);
  }
}
