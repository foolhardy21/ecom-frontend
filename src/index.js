import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ThemeProvider, NotificationProvider } from './contexts'

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <NotificationProvider>
        <App />
      </NotificationProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
