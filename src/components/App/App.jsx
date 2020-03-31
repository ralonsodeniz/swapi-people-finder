import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchApiStart } from '../../redux/actions/dataActions';
import { openModal } from '../../redux/actions/modalActions';
import isMobile from '../../helpers/isMobile';
import { selectShowModal } from '../../redux/reducers/modalReducer';

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

  useEffect(() => {
    dispatch(fetchApiStart(process.env.API_URL));
  }, [dispatch, fetchApiStart, process.env.API_URL]);

  const checkIfFullScreen = () => {
    isMobile() &&
      !document.fullscreenElement &&
      dispatch(
        openModal({
          modalType: 'MOBILE_FULLSCREEN_LOCK',
        })
      );
  };

  useEffect(() => {
    checkIfFullScreen();
    document.addEventListener('fullscreenchange', checkIfFullScreen);
    return () => {
      document.removeEventListener('fullscreenchange', checkIfFullScreen);
    };
  }, []);

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
