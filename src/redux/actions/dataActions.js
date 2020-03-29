/* eslint-disable no-console */
import DATA from '../types/dataTypes';
import { getPageDataFromAPI } from '../helpers/dataHelpers';

export const toggleDataLoading = loadingState => ({
  type: DATA.TOGGLE_DATA_LOADING,
  payload: loadingState,
});

export const fetchApiSuccess = searchData => ({
  type: DATA.FETCH_API_SUCCESS,
  payload: searchData,
});

export const fetchApiFailure = error => ({
  type: DATA.FETCH_API_FAILURE,
  payload: error,
});

export const saveCharacter = character => ({
  type: DATA.SAVE_CHARACTER,
  payload: character,
});

export const removeCharacter = characterName => ({
  type: DATA.REMOVE_CHARACTER,
  payload: characterName,
});

export const selectCharacter = character => ({
  type: DATA.SELECT_CHARACTER,
  payload: character,
});

export const setFilter = filter => ({
  type: DATA.SET_FILTER,
  payload: filter,
});

export const setSeachText = searchText => ({
  type: DATA.SET_SEARCH_TEXT,
  payload: searchText,
});

export const fetchApiStart = url => async dispatch => {
  dispatch(toggleDataLoading(true));
  try {
    const searchData = await getPageDataFromAPI(url);
    dispatch(fetchApiSuccess(searchData));
  } catch (error) {
    dispatch(fetchApiFailure(error.message));
    console.log(error);
  }
};
