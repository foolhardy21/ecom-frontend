import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './stylesheet/style.css'
import { ThemeProvider, CartProvider, WishlistProvider, ProductsProvider } from './contexts';
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
