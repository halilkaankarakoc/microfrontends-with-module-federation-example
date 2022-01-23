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