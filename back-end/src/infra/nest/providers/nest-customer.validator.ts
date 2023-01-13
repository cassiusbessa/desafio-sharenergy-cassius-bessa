import { Injectable } from '@nestjs/common';
import { CustomerValidators } from '@domain/entities/customer/validators/customer-validators';

@Injectable()
export class NestCustomerValidator extends CustomerValidators {}
