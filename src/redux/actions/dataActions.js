import DATA from '../types/dataTypes';

export const toogleDataLoading = loadingState => ({
  type: DATA.TOGGLE_DATA_LOADING,
  payload: loadingState,
});

export const fetchApiStart = url => ({
  type: DATA.FETCH_API_START,
  payload: url,
});

export const fetchApiSuccess = gnomesData => ({
  type: DATA.FETCH_API_SUCCESS,
  payload: gnomesData,
});

export const fetchApiFailure = error => ({
  type: DATA.FETCH_API_FAILURE,
  payload: error,
});

export const setGnomeNameSearchField = gnomeName => ({
  type: DATA.SET_GNOME_NAME_SEARCHFIELD,
  payload: gnomeName,
});

export const setProfessionSearchField = profession => ({
  type: DATA.SET_PROFESSION_SEARCHFIELD,
  payload: profession,
});
