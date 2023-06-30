import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { EventPattern } from '@nestjs/microservices';

@Controller('products')
export class ProductController {
    constructor(
        private productService:ProductService
        ){}
    @Get()
    @EventPattern('all')
    async all(){
        return this.productService.all();
    }
    @EventPattern('find_product')
    async findOne(id){
        return this.productService.findOne(id);
    }
    @EventPattern('like_post')
    async likePost(id){

    }
    @EventPattern('create_product')
    async create(product:any){
        await this.productService.create({
            id:product.id,
            title:product.title,
            image:product.image,
            likes:product.likes
        });
    }
    @EventPattern('update_product')
    async update(product:any){
        await this.productService.update(product.id,{
            id:product.id,
            title:product.title,
            image:product.image
        });
        return "updated successfully!"
    }
    @EventPattern('delete_product')
    async delete(id){
        await this.productService.delete(id);
    }
}
