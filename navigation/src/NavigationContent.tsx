import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import FavoritesService from './services/favorites';
import BasketService from './services/basket';

const Navigation = () => {
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [basketCount, setBasketCount] = useState(0);

  useEffect(() => {
    const favoritesService = new FavoritesService();
    favoritesService.getFavorites().then(res => setFavoritesCount(res.favoriteItems.length));

    const basketService = new BasketService();
    basketService.getBasket().then(res => setBasketCount(res.basketItems.reduce((prev, current) => prev + current.quantity, 0)));

    new BroadcastChannel('navigation').onmessage = (event) => {
      if (event.data.type === 'UPDATE_FAVORITES') {
        favoritesService.getFavorites().then(res => setFavoritesCount(res.favoriteItems.length));
      }
      if (event.data.type === 'UPDATE_BASKET') {
        basketService.getBasket().then(res => setBasketCount(res.basketItems.reduce((prev, current) => prev + current.quantity, 0)));
      }
    }
  }, []);
  
  return (
      <div style={{display: 'flex', alignItems: 'center'}}>
        <span style={{padding: '20px'}}>
          <Link style={{ textDecoration: 'none' }} to="/">Sticker Shop</Link>
        </span>
        <span style={{padding: '20px'}}>
          <Link style={{ textDecoration: 'none' }} to="/favorites">
            <div style={{display: 'flex', alignItems: 'center'}}>
              <i className="ri-heart-2-line ri-lg"></i>
              <span style={{marginLeft: '10px'}}>My Favorites {favoritesCount === 0 ? '' : `(${favoritesCount})`}</span>
            </div>
          </Link>
        </span>
        <span style={{padding: '20px'}}>
          <Link style={{ textDecoration: 'none' }} to="/basket">
            <div style={{display: 'flex', alignItems: 'center'}}>
              <i className="ri-shopping-basket-line ri-lg"></i>
              <span style={{marginLeft: '10px'}}>My Basket {basketCount === 0 ? '' : `(${basketCount})`}</span>
            </div>
          </Link>
        </span>
      </div>
  );
};

export default Navigation;