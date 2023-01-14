import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { MongoAddress, MongoAddressSchema } from './address-schema';

export type CustomerDocument = HydratedDocument<MongoCustomerModel>;

@Schema({ collection: 'customers', versionKey: false })
export class MongoCustomerModel {
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

export const CustomerSchema = SchemaFactory.createForClass(MongoCustomerModel);
