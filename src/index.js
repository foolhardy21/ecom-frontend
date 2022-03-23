import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { FilterProvider, ThemeProvider, AlertProvider, ProductsProvider, CartProvider, WishlistProvider } from './contexts'
import './stylesheet/style.css'

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <AlertProvider>
        <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              <WishlistProvider>

                <App />

              </WishlistProvider>
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
      </AlertProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
