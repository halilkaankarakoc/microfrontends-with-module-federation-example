import { Favorites } from '../models/favorites';

export default class FavoritesService {
  async getFavorites(): Promise<Favorites> {
    return fetch(`http://localhost:3006/favorites`)
      .then((res) => res.json())
      .then((res) => {
        return res;
      });
  }

  async removeFromFavorites(id: number) {
    return fetch(`http://localhost:3006/favorites`, {
      method: "PATCH",
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