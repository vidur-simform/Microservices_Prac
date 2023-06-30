import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.model';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private readonly productModel: Model<Product>){}
    async all():Promise<Product[]>{
        return this.productModel.find();
    }

    async create(data):Promise<Product>{
        return new this.productModel(data).save();
    }
    async update(id,data):Promise<Product>{
        const product = await this.productModel.findOneAndUpdate({id},data)
        return product;
    }
    async findOne(id):Promise<Product>{
        return await this.productModel.findOne({id});
    }
    async delete(id){
        return await this.productModel.findOneAndDelete({id});
    }
}
