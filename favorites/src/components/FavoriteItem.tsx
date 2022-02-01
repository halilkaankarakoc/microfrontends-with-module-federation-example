import React from 'react';
import {Button, IconButton} from "@mui/material";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
};

type FavoriteItem = Product;

type FavoriteItemProps = {
  item: FavoriteItem;
  removeFromFavorites: (id: number) => void;
};

export const FavoriteItem = ({item, removeFromFavorites}: FavoriteItemProps) => {
  return (
    <div style={{padding: '25px'}}>
        {/*<Link to={`/product/${product.id}`}>*/}
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
            <Link to={`/product/${item.id}`}>
              <span>
                <img
                  style={{height: '60px'}}
                  src={item.image}
                  alt={item.name}
                />
              </span>
            </Link>

            <div>
              <div style={{fontWeight: 'bold'}}>
                {item.name}
              </div>
              <span>{item.longDescription}</span>
            </div>
          </div>

          <div>
            <IconButton onClick={() => removeFromFavorites(item.id)}>
              <i style={{color: 'orange'}} className="ri-delete-bin-line"></i>
            </IconButton>
          </div>
        </div>

        {/*</Link>*/}
    </div>
  );
};