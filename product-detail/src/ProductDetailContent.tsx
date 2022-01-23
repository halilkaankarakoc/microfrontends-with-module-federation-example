import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FavoritesService } from './services/favorites';
import ProductDetail from './components/ProductDetail';
import { Product } from './models/product';
import { ProductDetailService } from './services/product-detail';
import BasketService from './services/basket';

const ProductDetailContent = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>(null);

  useEffect(() => {
    if (id) {
      const productDetailService = new ProductDetailService();
      productDetailService
        .getProductById(id)
        .then(setProduct);
    }
  }, [id]);

  const addProductToFavorites = async (product: Product) => {
    const favoriteService = new FavoritesService();
    await favoriteService.addFavorites(product.id);
    new BroadcastChannel('navigation').postMessage({type: 'UPDATE_FAVORITES'});
  };

  const addProductToBasket = async (product: Product) => {
    const basketService = new BasketService();
    await basketService.addBasket(product.id);
    new BroadcastChannel('navigation').postMessage({type: 'UPDATE_BASKET'});
  };
  
  return (
    <div>
      <ProductDetail product={product} addProductToFavorites={addProductToFavorites} addProductToBasket={addProductToBasket}/>
    </div>
  );
};

export default ProductDetailContent;