import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ProductsProvider } from './contexts/products.context';
import { ThemeProvider } from './contexts/theme.context';
import { CartProvider } from './contexts/cart.context';
import { WishListProvider } from './contexts/wishlist.context';
import './stylesheet/style.css'
import './stylesheet/wishlist.css'

ReactDOM.render(
  <ThemeProvider>
    <ProductsProvider>
      <CartProvider>
        <WishListProvider>
          <App />
        </WishListProvider>
      </CartProvider>
    </ProductsProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
