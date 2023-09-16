import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import AuthRequire from './Components/Auth/AuthRequire';
import store from './Redux/store';
import App from './App';
import Header from './Components/Header/Header';

import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-nrt5uyz77ft2z0s4.us.auth0.com"
      clientId="a9ue3EpwO1s3pNZ4pfjJIAKBxdhs1gyS"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/repos" element={<MainPage />} />
        </Routes>
      </Provider>
    </Auth0Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
