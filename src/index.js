import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheet/style.css'
import App from './App';
import { ThemeProvider } from './context/theme-context'

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
