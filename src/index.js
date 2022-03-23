import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, CartProvider, WishlistProvider } from './contexts';
import './stylesheet/style.css'

ReactDOM.render(
  <ThemeProvider>
    <CartProvider>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </CartProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
