// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './ThemeContext';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


// ReactDOM.render(
//   <ThemeProvider theme={theme}>
//     <CssBaseline />
//     <App />
//   </ThemeProvider>,
//   document.getElementById('root')
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
