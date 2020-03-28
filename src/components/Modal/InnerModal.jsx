import React, { lazy, Suspense, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { closeModal } from '../../redux/actions/modalActions';
import { selectModalType, selectModalProps } from '../../redux/reducers/modalReducer';

import OnClickOutSide from '../OnClickOutside/OnClickOutside';
import Spinner from '../Spinner/Spinner';

import InnerModalContainer from './InnerModal.styles';

const lazyMobileFullScreenAndLock = lazy(() =>
  import('../MobileFullScreenAndLock/MobileFullScreenAndLock')
);

const MODAL_OPTIONS = {
  MOBILE_FULLSCREEN_LOCK: lazyMobileFullScreenAndLock,
};

const getModalData = createStructuredSelector({
  modalType: selectModalType,
  modalProps: selectModalProps,
});

const InnerModal = () => {
  const dispatch = useDispatch();
  const { modalType, modalProps } = useSelector(getModalData);
  const closeModalOnClickOutside = useCallback(() => dispatch(closeModal()), [dispatch]);
  const SpecificModal = MODAL_OPTIONS[modalType];

  return (
    <InnerModalContainer>
      <OnClickOutSide
        enabled={modalType !== 'MOBILE_FULLSCREEN_LOCK'}
        action={closeModalOnClickOutside}
      >
        <Suspense fallback={<Spinner />}>
          <SpecificModal {...modalProps} />
        </Suspense>
      </OnClickOutSide>
    </InnerModalContainer>
  );
};

export default InnerModal;
