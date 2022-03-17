import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { FilterProvider, ThemeProvider, NotificationProvider, ProductsProvider, CartProvider, WishlistProvider } from './contexts'
import './stylesheet/style.css'

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <NotificationProvider>
        <ProductsProvider>
          <CartProvider>
            <WishlistProvider>
              <FilterProvider>

                <App />

              </FilterProvider>
            </WishlistProvider>
          </CartProvider>
        </ProductsProvider>
      </NotificationProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
