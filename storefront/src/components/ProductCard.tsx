import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Product } from "../models/product";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";

type ProductCardProps = {
  product: Product;
  addProductToFavorites: (product: Product) => void;
}

const ProductCard = ({ product, addProductToFavorites }: ProductCardProps) => {
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
          {product.price} $
        </Typography>
      </CardContent>

      <CardActions>
        <IconButton onClick={() => addProductToFavorites(product)}>
          <i style={{color: 'orange'}} className="ri-heart-add-line ri-2x"></i>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;