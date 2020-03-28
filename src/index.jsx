import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';
import theme from './style/theme';

import serviceWorker from './serviceWorker';

import App from './components/App/App';
import AppHelmet from './Helmet';

ReactDom.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ThemeProvider theme={theme}>
        <AppHelmet />
        <App />
      </ThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

serviceWorker();
