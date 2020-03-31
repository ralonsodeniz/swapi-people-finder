import { createSelector } from 'reselect';

import DATA from '../types/dataTypes';

export const INITIAL_STATE = {
  loadingData: false,
  characterCount: 0,
  nextEndpoint: '',
  previousEndpoint: '',
  searchArray: [],
  savedFilter: 'All',
  savedArray: [],
  characterSelected: null,
  searchText: '',
  error: '',
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DATA.TOGGLE_DATA_LOADING:
      return {
        ...state,
        loadingData: true,
      };
    case DATA.FETCH_API_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loadingData: false,
        error: '',
      };
    case DATA.FETCH_API_FAILURE:
      return {
        ...state,
        loadingData: false,
        characterCount: 0,
        nextEndpoint: '',
        previousEndpoint: '',
        searchArray: [],
        searchText: '',
        error: action.payload,
      };
    case DATA.SAVE_CHARACTER:
      return {
        ...state,
        savedArray: [...state.savedArray, action.payload],
      };
    case DATA.REMOVE_CHARACTER:
      return {
        ...state,
        savedArray: state.savedArray.filter(character => character.name !== action.payload),
      };
    case DATA.SELECT_CHARACTER:
      return {
        ...state,
        characterSelected: action.payload,
      };
    case DATA.SET_FILTER:
      return {
        ...state,
        savedFilter: action.payload,
      };
    case DATA.SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;

const selectData = state => state.data;

export const selectLoadingData = createSelector([selectData], data => data.loadingData);

export const selectCharacterCount = createSelector([selectData], data => data.characterCount);

export const selectNextEndpoint = createSelector([selectData], data => data.nextEndpoint);

export const selectPreviousEndpoint = createSelector([selectData], data => data.previousEndpoint);

export const selectSearchArray = createSelector([selectData], data => data.searchArray);

export const selectSavedFilter = createSelector([selectData], data => data.savedFilter);

export const selectSavedArray = createSelector([selectData], data => data.savedArray);

export const selectCharacterSelected = createSelector([selectData], data => data.characterSelected);

export const selectSearchText = createSelector([selectData], data => data.searchText);
