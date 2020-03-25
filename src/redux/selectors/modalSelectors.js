import { createSelector } from 'reselect';

const selectModal = state => state.modal;

export const selectShowModal = createSelector([selectModal], modal => modal.showModal);

export const selectModalData = createSelector([selectModal], modal => modal.modalData);

export const selectModalType = createSelector([selectModalData], modalData => modalData.modalType);

export const selectModalProps = createSelector(
  [selectModalData],
  modalData => modalData.modalProps
);
