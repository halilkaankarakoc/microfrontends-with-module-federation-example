import { Product } from '../../products/interfaces/product';

export interface Basket  {
  basketItems: BasketItem[];
};

export interface BasketItem extends Product { 
  quantity: number;
}