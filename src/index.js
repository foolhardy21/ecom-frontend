import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './contexts/theme.context';
import { WishListProvider } from './contexts/wishlist.context';
import './stylesheet/style.css'

ReactDOM.render(
  <ThemeProvider>
    <WishListProvider>
      <App />
    </WishListProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
