import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ProductsProvider } from './contexts/products.context';
import { CartProvider, WishlistProvider, ThemeProvider } from './contexts';
import './stylesheet/style.css'

ReactDOM.render(
  <ThemeProvider>
    <ProductsProvider>
      <CartProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </CartProvider>
    </ProductsProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
