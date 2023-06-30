import { ProductService } from './product.service';
import { ClientProxy } from '@nestjs/microservices';
export declare class ProductController {
    private productService;
    private readonly client;
    constructor(productService: ProductService, client: ClientProxy);
    all(): Promise<import("./product.entity").Product[]>;
    create(title: String, image: String): Promise<import("./product.entity").Product>;
    get(id: number): Promise<import("./product.entity").Product>;
    update(id: number, title: string, image: string): Promise<string>;
    delete(id: number): Promise<string>;
}
