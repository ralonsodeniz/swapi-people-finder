import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchApiStart } from '../../redux/actions/dataActions';
import { selectShowModal } from '../../redux/reducers/modalReducer';
import useMobileFullScreen from '../../helpers/useMobileFullScreen';

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import SavedPeople from '../SavedPeople/SavedPeople';
import Information from '../Information/Information';
import SearchPeople from '../SearchPeople/SearchPeople';
import InnerModal from '../Modal/InnerModal';
import Modal from '../Modal/Modal';

import GlobalStyle from '../../style/global.styles';
import AppContainer from './App.styles';

const App = () => {
  const dispatch = useDispatch();
  const showModal = useSelector(selectShowModal);

  useMobileFullScreen();

  useEffect(() => {
    dispatch(fetchApiStart(process.env.API_URL));
  }, [dispatch, fetchApiStart, process.env.API_URL]);

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <ErrorBoundary>
        <AppContainer>
          <SearchPeople />
          <SavedPeople />
          <Information />
          {showModal && (
            <Modal>
              <InnerModal />
            </Modal>
          )}
        </AppContainer>
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default App;
