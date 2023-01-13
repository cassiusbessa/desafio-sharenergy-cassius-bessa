import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { MongoAddress, MongoAddressSchema } from './address-schema';

export type CustomerDocument = HydratedDocument<MongoCustomer>;

@Schema()
export class MongoCustomer {
  @Prop()
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  cpf: string;

  @Prop({ required: true, type: MongoAddressSchema })
  address: MongoAddress;
}

export const CustomerSchema = SchemaFactory.createForClass(MongoCustomer);
