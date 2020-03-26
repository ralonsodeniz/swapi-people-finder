import React from 'react';

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import SavedPeople from '../SavedPeople/SavedPeople';
import Information from '../Information/Information';
import SearchPeople from '../SearchPeople/SearchPeople';

import GlobalStyle from '../../style/global.styles';
import {
  AppContainer,
  InformationContainer,
  SavedPeopleContainer,
  SearchPeopleContainer,
} from './App.styles';

import cardListMock from '../../../__mocks__/cardListMock';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <ErrorBoundary>
        <AppContainer>
          <SearchPeopleContainer>
            <SearchPeople loading={false} />
          </SearchPeopleContainer>
          <SavedPeopleContainer>
            <SavedPeople items={cardListMock} />
          </SavedPeopleContainer>
          <InformationContainer>
            <Information />
          </InformationContainer>
        </AppContainer>
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default App;
