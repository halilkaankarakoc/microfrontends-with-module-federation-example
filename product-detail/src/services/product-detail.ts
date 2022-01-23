import { Product } from '../models/product';

export class ProductDetailService {
  async getProductById(id: string): Promise<Product> {
    return fetch(`http://localhost:3006/products/${id}`).then((res) => res.json());
  }
}