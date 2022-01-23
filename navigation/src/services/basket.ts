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

export default class BasketService {
  async getBasket(): Promise<Basket> {
    return fetch(`http://localhost:3006/basket`)
      .then((res) => res.json())
      .then((res) => {
        return res;
      });
  }

  async addBasket(id: number) {
    return fetch(`http://localhost:3006/basket`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
  }

  async clearBasket() {
    return fetch(`http://localhost:3006/basket`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
  }
}