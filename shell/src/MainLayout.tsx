import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeContent from "storefront/StorefrontContent";
import Navigation from "navigation/NavigationContent";
import FavoritesContent from 'favorites/FavoritesContent';
import ProductDetailContent from 'product_detail/ProductDetailContent';
import BasketContent from 'basket/BasketContent';
import "remixicon/fonts/remixicon.css";

const MainLayout = () => (
  <Router>
    <div style={{marginBottom: '55px'}}>
      <Navigation />
    </div>
    <div>
      <Switch>
        <Route exact path="/" component={HomeContent} />
        <Route path="/product/:id" component={ProductDetailContent} />
        <Route path="/favorites" component={FavoritesContent} />
        <Route path="/basket" component={BasketContent} />
      </Switch>
    </div>
  </Router>
);

export default MainLayout;