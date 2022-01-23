export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
};

export interface Basket  {
  basketItems: BasketItem[];
};

export interface BasketItem extends Product { 
  quantity: number;
}