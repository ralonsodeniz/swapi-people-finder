import React from 'react';

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

import GlobalStyle from '../../style/global.styles';
import {
  AppContainer,
  InformationContainer,
  SavedPeopleContainer,
  SearchPeopleContainer,
} from './App.styles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <AppContainer>
        <ErrorBoundary>
          <SearchPeopleContainer />
          <SavedPeopleContainer />
          <InformationContainer />
        </ErrorBoundary>
      </AppContainer>
      <Footer />
    </>
  );
};

export default App;
