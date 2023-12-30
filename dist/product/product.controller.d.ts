import { ProductService } from './product.service';
import { Product } from './product.model';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
    create(createProductDto: any): Promise<Product>;
    update(id: string, updateProductDto: any): Promise<Product>;
    delete(id: string): Promise<any>;
}
