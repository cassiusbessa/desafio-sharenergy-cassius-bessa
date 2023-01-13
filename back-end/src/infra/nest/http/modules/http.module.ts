import { Module } from '@nestjs/common';
import { RegisterCustomerModule } from './module-register-customer';
import { UpdateCustomerModule } from './module-update-customer';
import { DeleteCustomerModule } from './module-delete-customer';
import { GetAllCustomerModule } from './module-get-all-customer';

@Module({
  imports: [
    RegisterCustomerModule,
    UpdateCustomerModule,
    DeleteCustomerModule,
    GetAllCustomerModule,
  ],
})
export class HttpModule {}
