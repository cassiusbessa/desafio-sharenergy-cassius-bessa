import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AddressDocument = HydratedDocument<MongoAddress>;

@Schema()
export class MongoAddress {
  @Prop()
  id: string;

  @Prop({ required: true })
  street: string;

  @Prop({ required: true })
  number: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  state: string;

  @Prop({ required: true })
  country: string;

  @Prop({ required: true })
  zipcode: string;
}

export const MongoAddressSchema = SchemaFactory.createForClass(MongoAddress);
