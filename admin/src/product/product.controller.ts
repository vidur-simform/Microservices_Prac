import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller('products')
export class ProductController {
    constructor(
        private productService: ProductService,
        @Inject('PRODUCT_SERVICE') private readonly client:ClientProxy
        ) { }
    @Get()
    all() {
        this.client.emit('all','')
        return this.productService.all();
    }

    @Post()
    async create(
        @Body('title') title: String,
        @Body('image') image: String,
    ) {
        const product = await this.productService.create({
            title,
            image
        });
        this.client.emit('create_product',product);
        return product;
    }
    @Get(':id')
    get(@Param('id') id:number){
        return this.productService.get(id);
    }
    @Put(':id')
    async update(
        @Param('id') id:number,
        @Body('title') title:string,
        @Body('image') image:string
        ){

        await this.productService.update(id,{
            title,
            image
        });
        this.client.emit('update_product',{id,title,image}).subscribe(console.log)
        return "product updated";
    }
    @Delete(':id')
    async delete(@Param('id') id:number){
        await this.productService.delete(id);
        this.client.emit('delete_product',id);
        return `product deleted`;
    }
}
