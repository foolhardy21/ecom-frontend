import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheet/style.css'
import App from './App';
import { ThemeProvider } from './contexts/theme.context'
import { ProductsProvider } from './contexts/products.context';
import './stylesheet/style.css'

ReactDOM.render(
  <ThemeProvider>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
