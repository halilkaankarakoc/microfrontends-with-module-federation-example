import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Product } from "../models/product";
import { Link } from "react-router-dom";

type ProductDetailProps = {
  product: Product;
  addProductToFavorites: (product: Product) => void;
}

const ProductDetail = ({ product, addProductToFavorites}: ProductDetailProps) => {
  if (!product) return null;
  return (
    <div style={{width: '490px'}}>
      <Card>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Link to={`/product/${product.id}`}>
          <CardMedia
            component="img"
            // height="450"
            image={product.image}
            alt={product.name}
          />
        </Link>

        <CardContent>

          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <hr/>
          <Typography variant="body2" color="text.secondary">
            {product.longDescription}
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
    </div>
  );
};

export default ProductDetail;