import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import * as serviceWorker from "./serviceWorker";
import { getConfig } from "./config";
import history from "./history";

import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const config = getConfig();
const onRedirectCallback = (appState) => {
    history.push(
      appState && appState.returnTo ? appState.returnTo : window.location.pathname
    );
  };

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  onRedirectCallback,
  authorizationParams: {
    redirect_uri: window.location.origin,
    ...(config.audience ? { audience: config.audience } : null),
  },
};
root.render(
    <React.StrictMode>
        <Auth0Provider 
    {...providerConfig}>
        <BrowserRouter history={history}>
        <App />
        </BrowserRouter>
        </Auth0Provider>
    </React.StrictMode>
  );
  
  serviceWorker.unregister();