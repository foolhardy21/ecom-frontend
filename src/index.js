import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './stylesheet/style.css'
import { ProductsProvider } from './contexts/products.context';
import { ThemeProvider } from './contexts/theme.context';

ReactDOM.render(
  <ThemeProvider>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
