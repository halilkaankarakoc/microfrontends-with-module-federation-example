import React, { useEffect, useState } from 'react';
import { Basket } from './models/basket';
import BasketService from './services/basket';

const FavoritesContent = () => {
  const [basket, setBasket] = useState<Basket>({basketItems: []});
  const basketService = new BasketService();

  useEffect(() => {
    basketService.getBasket().then((res) => setBasket(res));
    return () => {};
  }, []);

  const clearBasket = async () => {
    basketService.clearBasket().then((res) => {
      setBasket(res)
      new BroadcastChannel('navigation').postMessage({type: 'UPDATE_BASKET'});
    });
    
  };

  return (
    <div>
      <h1>Basket</h1>
      {
        basket.basketItems.map((basketItem) => <h3 key={basketItem.id}>{basketItem.name} - {basketItem.quantity}</h3>)
      }
      {
        basket.basketItems.length > 0 && 
        <button onClick={clearBasket}
        >
          Clear Basket
        </button>}
    </div>
  );
};

export default FavoritesContent;