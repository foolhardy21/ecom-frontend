import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ProductsProvider } from './contexts/products.context';
import { ThemeProvider } from './contexts/theme.context';
import { CartProvider } from './contexts/cart.context';
import './stylesheet/style.css'

ReactDOM.render(
  <ThemeProvider>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
