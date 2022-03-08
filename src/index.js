import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider } from './contexts/cart.context';
import { ThemeProvider } from './contexts/theme.context';
import './stylesheet/style.css'

ReactDOM.render(
  <ThemeProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
