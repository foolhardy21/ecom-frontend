import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './stylesheet/style.css'
import './stylesheet/products-pg.css'
import { ProductsProvider } from './contexts/products.context';

ReactDOM.render(
  <ProductsProvider>
    <App />
  </ProductsProvider>,
  document.getElementById('root')
);
