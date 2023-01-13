import { AddressValidators } from '@domain/entities/address/validators/address-validators';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NestAddressValidator extends AddressValidators {}
