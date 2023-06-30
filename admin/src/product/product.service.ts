import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { ObjectId, Repository } from 'typeorm';
@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product) private readonly productRepository: Repository<Product>
    ) { }

    async all(): Promise<Product[]> {
        return this.productRepository.find();
    }

    async create(data): Promise<Product> {
        return this.productRepository.save(data)
    }
    async get(id: number): Promise<Product> {
        if (!id) {
            return null;
        }
        return this.productRepository.findOneBy({ id });
    }
    async update(id: number, data): Promise<any> {
        // const product = await this.productRepository.findOneBy({ id });
        // if (!product) {
        //     throw new NotFoundException('Product not found!');
        // }
        // Object.assign(product, data);
        return this.productRepository.update(id, {...data});
    }
    async delete(id:number):Promise<any> {
        return this.productRepository.delete(id);
    }
}
