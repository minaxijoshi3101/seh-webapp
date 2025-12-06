import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Buffer } from 'buffer';
import process from 'process';
//import { Auth0Provider } from '@auth0/auth0-react';

// Make Buffer and process available globally
window.Buffer = Buffer;
window.process = process;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  /* <Auth0Provider
    domain="dev-u43dlgxf4ze3e412.us.auth0.com"
    clientId="w56g0lW0iRkzC1mm6SEsIZ2ibISEBPLt"
    authorizationParams={{
    redirect_uri: window.location.origin
    }}
  >
    
  </Auth0Provider>, */
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
