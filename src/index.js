import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './Redux/store';
import App from './App';
import Header from './Components/Header/Header';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import { Auth0ProviderWithNavigate } from './Components/Auth/auth0ProviderWithNavigate';
import Settings from './Components/Settings/Settings';
import ModalWindow from './Components/ModalWindow/ModalWindow';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Auth0ProviderWithNavigate>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/repos" element={<MainPage />} />
          <Route
            path="/repos/:id"
            element={
              <>
                <MainPage /> <ModalWindow />
              </>
            }
          />
          <Route
            path="/settings"
            element={
              <>
                <MainPage /> <Settings />{' '}
              </>
            }
          />
        </Routes>
      </Provider>
    </Auth0ProviderWithNavigate>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
