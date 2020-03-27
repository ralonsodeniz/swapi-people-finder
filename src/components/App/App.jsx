import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchApiStart } from '../../redux/actions/dataActions';

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import SavedPeople from '../SavedPeople/SavedPeople';
import Information from '../Information/Information';
import SearchPeople from '../SearchPeople/SearchPeople';

import GlobalStyle from '../../style/global.styles';
import AppContainer from './App.styles';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApiStart('https://swapi.co/api/people/?search='));
  }, [dispatch, fetchApiStart]);

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <ErrorBoundary>
        <AppContainer>
          <SearchPeople />
          <SavedPeople />
          <Information />
        </AppContainer>
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default App;
