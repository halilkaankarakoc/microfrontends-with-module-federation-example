import { Injectable } from '@nestjs/common';
import { Favorites } from './interfaces/favorites';

@Injectable()
export class FavoritesService {
  private readonly favorites = [];
}
