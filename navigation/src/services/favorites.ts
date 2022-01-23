export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
};

export interface Favorites  {
  favoriteItems: FavoriteItem[];
};

export interface FavoriteItem extends Product { }

export default class FavoritesService {
  async getFavorites(): Promise<Favorites> {
    return fetch(`http://localhost:3006/favorites`)
      .then((res) => res.json())
      .then((res) => {
        return res;
      });
  }
}