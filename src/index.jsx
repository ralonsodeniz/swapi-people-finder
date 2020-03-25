import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from './redux/store';
import theme from './style/theme';

// import serviceWorker from './serviceWorker';

import App from './components/App/App';
import AppHelmet from './Helmet';

ReactDom.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <AppHelmet />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// serviceWorker();
