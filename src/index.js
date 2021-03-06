import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { FilterProvider, ThemeProvider, ProductsProvider, CartProvider, WishlistProvider, AuthProvider, AddressProvider, CheckoutProvider } from './contexts'
import './stylesheet/style.css'

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              <WishlistProvider>
                <AddressProvider>
                  <CheckoutProvider>
                    <App />
                  </CheckoutProvider>
                </AddressProvider>
              </WishlistProvider>
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
