import React, { useEffect, useState } from 'react';
import { Favorites } from './models/favorites';
import FavoritesService from './services/favorites';

const FavoritesContent = () => {
  const [favorites, setFavorites] = useState<Favorites>({favoriteItems: []});
  const favoritesService = new FavoritesService();

  useEffect(() => {
    favoritesService.getFavorites().then((res) => setFavorites(res));
    return () => {};
  }, []);

  const clearFavorites = async () => {
    const favoriteService = new FavoritesService();
    favoriteService.clearFavorites().then((res) => {
      setFavorites(res)
      new BroadcastChannel('navigation').postMessage({type: 'UPDATE_FAVORITES'});
    });
    
  };

  return (
    <div>
      <h1>Favorites</h1>
      {
        favorites.favoriteItems.map((favoriteItem) => <h3 key={favoriteItem.id}>{favoriteItem.name}</h3>)
      }
      {
        favorites.favoriteItems.length > 0 && 
          <button 
            onClick={clearFavorites}
          >
            Clear Favorites
          </button>
      }
    </div>
  );
};

export default FavoritesContent;