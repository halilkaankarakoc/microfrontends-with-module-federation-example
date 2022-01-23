import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product';
import productsData from './data/products';

@Injectable()
export class ProductsService {
  private readonly products = productsData;

  async getProducts(): Promise<Product[]> {
    return this.products;
  }

  async getProductById(id: string): Promise<Product | undefined> {
    return this.products.find((product) => product.id.toString() === id);
  }
}
