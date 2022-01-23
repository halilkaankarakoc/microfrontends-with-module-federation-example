import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { Product } from "../models/product";
import { Link } from "react-router-dom";

type ProductDetailProps = {
  product: Product;
  addProductToFavorites: (product: Product) => void;
  addProductToBasket: (product: Product) => void;
}

const ProductDetail = ({ product, addProductToFavorites, addProductToBasket }: ProductDetailProps) => {
  if (!product) return null;
  return (
    <Card sx={{ maxWidth: 345}}>
      <Link to={`/product/${product.id}`}>
        <CardMedia
          component="img"
          height="350"
          image={product.image}
          alt={product.name}
        />
      </Link>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.price} $
        </Typography>
      </CardContent>

      <CardActions>
        <IconButton onClick={() => addProductToFavorites(product)}>
          <i style={{color: 'orange'}} className="ri-heart-add-line ri-2x"></i>
        </IconButton>
        <Button onClick={() => addProductToBasket(product)}>
          Add to Basket
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductDetail;