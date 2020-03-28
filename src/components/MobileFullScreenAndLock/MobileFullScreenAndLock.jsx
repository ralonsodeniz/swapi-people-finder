import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { closeModal } from '../../redux/actions/modalActions';
import setFullScreenAndLock from '../../helpers/setFullScreenAndLock';

import CustomButton from '../CustomButton/CustomButton';

import MobileFullScreenAndLockContainer from './MobileFullScreenAndLock.styles';

const MobileFullScreenAndLock = () => {
  const dispatch = useDispatch();

  const handleAcceptFullScreen = useCallback(async () => {
    await setFullScreenAndLock();
    dispatch(closeModal());
  }, [setFullScreenAndLock, dispatch, closeModal]);

  return (
    <MobileFullScreenAndLockContainer>
      <p>This app is optimized to be used in fullscreen portrait</p>
      <CustomButton type="button" size="medium" onClick={handleAcceptFullScreen}>
        Lets go!
      </CustomButton>
    </MobileFullScreenAndLockContainer>
  );
};

export default MobileFullScreenAndLock;
