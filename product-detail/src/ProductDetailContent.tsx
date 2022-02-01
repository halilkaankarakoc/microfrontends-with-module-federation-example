import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FavoritesService } from './services/favorites';
import ProductDetail from './components/ProductDetail';
import { Product } from './models/product';
import { ProductDetailService } from './services/product-detail';

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
    const channel = new BroadcastChannel('navigation');
    channel.postMessage({type: 'UPDATE_FAVORITES'});
    channel.close();
  };

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
      <ProductDetail product={product} addProductToFavorites={addProductToFavorites} />
    </div>
  );
};

export default ProductDetailContent;