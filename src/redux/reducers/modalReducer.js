import { createSelector } from 'reselect';

import MODAL from '../types/modalTypes';

const INITIAL_STATE = {
  showModal: false,
  modalData: {
    modalType: '',
    modalProps: {},
  },
};

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODAL.OPEN_MODAL:
      return {
        ...state,
        showModal: true,
        modalData: action.payload,
      };
    case MODAL.CLOSE_MODAL:
      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};

export default modalReducer;

const selectModal = state => state.modal;

export const selectShowModal = createSelector([selectModal], modal => modal.showModal);

export const selectModalData = createSelector([selectModal], modal => modal.modalData);

export const selectModalType = createSelector([selectModalData], modalData => modalData.modalType);

export const selectModalProps = createSelector(
  [selectModalData],
  modalData => modalData.modalProps
);
