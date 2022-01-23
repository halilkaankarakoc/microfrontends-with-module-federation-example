export class FavoritesService {
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

  async getFavorites() {
    return fetch(`http://localhost:3006/favorites`)
      .then((res) => res.json())
      .then((res) => {
        return res;
      });
  }
}