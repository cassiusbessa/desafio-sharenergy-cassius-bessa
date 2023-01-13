import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CustomerRepository } from '@domain/repositories/customer-repository';
import { CustomerDocument, MongoCustomer } from '../schemas';
import {
  CustomerProps,
  PersistenceCustomer,
} from '@domain/entities/customer/customer';

@Injectable()
export class MongoCustomerRepository implements CustomerRepository {
  constructor(
    @InjectModel('Customer')
    private readonly customerModel: Model<CustomerDocument>,
  ) {}

  async register(customer: CustomerProps): Promise<PersistenceCustomer> {
    const newCustomer = new this.customerModel(customer);
    newCustomer.save();
    return newCustomer.toObject();
  }

  async update(
    customer: CustomerProps,
    id: string,
  ): Promise<PersistenceCustomer> {
    const updatedCustomer = await this.customerModel.findOneAndUpdate(
      { _id: id },
      customer,
      { new: true },
    );
    return updatedCustomer.toObject();
  }

  async delete(id: string): Promise<boolean> {
    const deletedCustomer = await this.customerModel.findOneAndDelete({
      _id: id,
    });
    return deletedCustomer ? true : false;
  }

  async getByEmail(email: string): Promise<PersistenceCustomer | null> {
    const customer = await this.customerModel.findOne({ email });
    return customer ? customer.toObject() : null;
  }

  async getAll(): Promise<PersistenceCustomer[]> {
    const customers = await this.customerModel.find();
    return customers.map((customer) => customer.toObject());
  }
}
