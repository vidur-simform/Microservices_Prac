import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    all(): Promise<import("./product.model").Product[]>;
    findOne(id: any): Promise<import("./product.model").Product>;
    likePost(id: any): Promise<void>;
    create(product: any): Promise<void>;
    update(product: any): Promise<string>;
    delete(id: any): Promise<void>;
}
