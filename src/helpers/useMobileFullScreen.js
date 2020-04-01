import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { openModal } from '../redux/actions/modalActions';
import isMobile from './isMobile';

export default () => {
  const dispatch = useDispatch();

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
};
