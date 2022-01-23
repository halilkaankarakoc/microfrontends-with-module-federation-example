import { Product } from '../../products/interfaces/product';

export interface Favorites  {
  favoriteItems: FavoriteItem[];
};

export interface FavoriteItem extends Product { }