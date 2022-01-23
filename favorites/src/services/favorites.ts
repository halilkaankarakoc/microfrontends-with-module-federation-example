import { Favorites } from '../models/favorites';
import { BehaviorSubject } from 'rxjs';

export const favoritesSubject = new BehaviorSubject<Favorites>({favoriteItems: []});

export default class FavoritesService {
  async getFavorites(): Promise<Favorites> {
    return fetch(`http://localhost:3006/favorites`)
      .then((res) => res.json())
      .then((res) => {
        return res;
      });
  }

  async addFavorites(id: number) {
    return fetch(`http://localhost:3006/favorites`, {
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

  async clearFavorites() {
    return fetch(`http://localhost:3006/favorites`, {
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