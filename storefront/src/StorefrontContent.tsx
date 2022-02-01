import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Product } from './models/product';
import {ProductsService} from './services/products';
import ProductCard from './components/ProductCard';
import { FavoritesService } from './services/favorites';
import {useHistory} from 'react-router-dom';

const StorefrontContent = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const productsService = new ProductsService();
    productsService.getProducts().then(setProducts);
  }, []);
  
  const addProductToFavorites = async (product: Product) => {
    const favoriteService = new FavoritesService();
    await favoriteService.addFavorites(product.id);
    const channel = new BroadcastChannel('navigation');
    channel.postMessage({type: 'UPDATE_FAVORITES'});
    channel.close();
  };

  return (
    <Grid container spacing={5}>
        {
          products.map((product) => (
              <Grid key={product.id} item xs={3}>
                <ProductCard product={product} addProductToFavorites={addProductToFavorites}/>
              </Grid>
            )
          )
        }
    </Grid>
  );
};

export default StorefrontContent;