import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { ThemeProvider, NotificationProvider, ProductsProvider } from './contexts'
import './stylesheet/style.css'

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <NotificationProvider>
        <ProductsProvider>

          <App />

        </ProductsProvider>
      </NotificationProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
