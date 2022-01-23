import {Product} from '../models/product';

export class ProductsService {
  async getProducts(): Promise<Product[]> {
    return fetch(`http://localhost:3006/products`).then((res) => res.json());
  }
}