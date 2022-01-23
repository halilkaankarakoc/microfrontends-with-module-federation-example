import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Favorites } from './interfaces/favorites';
import { FavoritesService } from './favorites.service';
import productsData from '../products/data/products';

const initialFavorites = (indexes: number[]): Favorites => ({
  favoriteItems: indexes.map((index) => productsData[index])
});

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  private favorites: Favorites = initialFavorites([]);

  @Get()
  getFavorites() {
    return this.favorites;
  }

  @Post()
  addToFavorites(@Body('id') id: string) {
    const favoritesItem = this.favorites.favoriteItems.find((favoriteItem) => favoriteItem.id === parseInt(id));
    if (!favoritesItem) {
      this.favorites.favoriteItems.push(productsData.find((product) => product.id === parseInt(id)));
    }
    return this.favorites;
  }

  @Patch()
  removeFromFavorites(@Body('id') id: string) {
    const favoritesItemIndex = this.favorites.favoriteItems.findIndex((favoriteItem) => favoriteItem.id === parseInt(id));
    if (favoritesItemIndex > -1) {
      this.favorites.favoriteItems.splice(favoritesItemIndex, 1);
    }
    return this.favorites;
  }

  @Delete()
  clearFavorites() {
    this.favorites.favoriteItems = [];
    return this.favorites;
  }
}
