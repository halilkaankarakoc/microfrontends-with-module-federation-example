import React, { useEffect, useState } from 'react';
import { Favorites } from './models/favorites';
import FavoritesService from './services/favorites';
import {FavoriteItem} from "./components/FavoriteItem";
import {IconButton} from "@mui/material";

const FavoritesContent = () => {
  const [favorites, setFavorites] = useState<Favorites>({favoriteItems: []});
  const favoritesService = new FavoritesService();

  useEffect(() => {
    favoritesService.getFavorites().then((res) => setFavorites(res));
    return () => {};
  }, []);

  const removeFromFavorites = (id: number) => {
    favoritesService.removeFromFavorites(id).then((res) => {
      setFavorites(res);
      const channel = new BroadcastChannel('navigation');
      channel.postMessage({type: 'UPDATE_FAVORITES'});
      channel.close();
    });
  };

  const clearFavorites = () => {
    favoritesService.clearFavorites().then((res) => {
      setFavorites(res);
      const channel = new BroadcastChannel('navigation');
      channel.postMessage({type: 'UPDATE_FAVORITES'});
      channel.close();
    });
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <div style={{width: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div style={{display: 'flex', justifyContent: 'center' }}>
          <h1>Favorites</h1>
        </div>
        {favorites.favoriteItems.length > 0 && <IconButton onClick={clearFavorites}>
          <i style={{color: 'orange'}} className="ri-delete-bin-line ri-lg"/>
        </IconButton>}
        <div style={{width: '700px'}}>
          <div >
            {
              favorites.favoriteItems.map((favoriteItem) => {
                return (
                  <div key={favoriteItem.id}>
                    <FavoriteItem item={favoriteItem} removeFromFavorites={removeFromFavorites} />
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritesContent;