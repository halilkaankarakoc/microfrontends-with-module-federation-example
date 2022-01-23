import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Basket } from './interfaces/basket';
import { BasketService } from './basket.service';
import productsData from '../products/data/products';

const initialBasket = (indexes: number[]): Basket => ({
  basketItems: indexes.map((index) => ({
    ...productsData[index],
    quantity: 0,
  })),
});

@Controller('basket')
export class BasketController {
  constructor(private readonly basketService: BasketService) {}

  private basket: Basket = initialBasket([]);

  @Get()
  getBasket() {
    return this.basket;
  }

  @Post()
  addToBasket(@Body('id') id: string) {
    const basketItem = this.basket.basketItems.find((basketItem) => basketItem.id === parseInt(id));
    if (!basketItem) {
      this.basket.basketItems.push({...productsData.find((product) => product.id === parseInt(id)), quantity: 1});
    } else {
      basketItem.quantity += 1;
    }
    return this.basket;
  }

  @Patch()
  removeFromBasket(@Body('id') id: string) {
    const basketItemIndex = this.basket.basketItems.findIndex((basketItem) => basketItem.id === parseInt(id));
    if (basketItemIndex > -1) {
      this.basket.basketItems.splice(basketItemIndex, 1);
    }
    return this.basket;
  }

  @Delete()
  clearBasket() {
    this.basket.basketItems = [];
    return this.basket;
  }
}
