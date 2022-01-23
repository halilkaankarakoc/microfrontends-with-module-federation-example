import { Injectable } from '@nestjs/common';

@Injectable()
export class BasketService {
  private readonly basket = [];
}
