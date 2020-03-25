import { createSelector } from 'reselect';

const selectData = state => state.data;

export const selectLoadingData = createSelector([selectData], data => data.loadingData);

export const selectGnomeNameSearchField = createSelector(
  [selectData],
  data => data.gnomeNameSearchField
);

export const selectProfessionSearchField = createSelector(
  [selectData],
  data => data.professionSearchField
);

export const selectGnomesData = createSelector([selectData], data => data.gnomesData);

export const selectDataError = createSelector([selectData], data => data.error);
