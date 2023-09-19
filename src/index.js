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
import { ThemeProvider } from '@mui/material/styles';
import theme from './Styles/customTheme';
import './index.css';
import ReposNamePage from './Pages/ReposNamePage';
import { CacheProvider } from '@emotion/react';
import cache from './Styles/emotionCache';
import AuthenticationGuard from './Components/Auth/AuthenticationGuard.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Auth0ProviderWithNavigate>
      <ThemeProvider theme={theme}>
        <CacheProvider value={cache}>
          <Provider store={store}>
            <Header />
            <Routes>
              <Route path="/" element={<App />} />
              <Route
                path="/repos"
                element={<AuthenticationGuard component={MainPage} />}
              />
              <Route
                path="/repos/:id"
                element={<AuthenticationGuard component={ReposNamePage} />}
              />
              <Route
                path="/settings"
                element={
                  <>
                    <AuthenticationGuard component={MainPage && Settings} />
                  </>
                }
              />
            </Routes>
          </Provider>
        </CacheProvider>
      </ThemeProvider>
    </Auth0ProviderWithNavigate>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
