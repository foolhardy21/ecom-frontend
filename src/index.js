import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheet/style.css'
import App from './App';
import { ThemeProvider } from './contexts/theme.context'
import './stylesheet/style.css'

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
