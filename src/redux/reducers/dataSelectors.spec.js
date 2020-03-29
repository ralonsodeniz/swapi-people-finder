import { dataStore } from '../../../__mocks__/dataStateMock';
import {
  selectCharacterCount,
  selectCharacterSelected,
  selectLoadingData,
  selectNextEndpoint,
  selectPreviousEndpoint,
  selectSavedArray,
  selectSavedFilter,
  selectSearchArray,
  selectSearchText,
} from './dataReducer';

describe('Data selectors tests', () => {
  const state = { data: dataStore };

  it('selects loadingData', () => {
    expect(selectLoadingData(state)).toEqual(dataStore.loadingData);
  });

  it('selects characterCount', () => {
    expect(selectCharacterCount(state)).toEqual(dataStore.characterCount);
  });

  it('selects nextEndpoint', () => {
    expect(selectNextEndpoint(state)).toEqual(dataStore.nextEndpoint);
  });

  it('selects previousEndpoint', () => {
    expect(selectPreviousEndpoint(state)).toEqual(dataStore.previousEndpoint);
  });

  it('selects searchArray', () => {
    expect(selectSearchArray(state)).toEqual(dataStore.searchArray);
  });

  it('selects savedFilter', () => {
    expect(selectSavedFilter(state)).toEqual(dataStore.savedFilter);
  });

  it('selects savedArray', () => {
    expect(selectSavedArray(state)).toEqual(dataStore.savedArray);
  });

  it('selects characterSelected', () => {
    expect(selectCharacterSelected(state)).toEqual(dataStore.characterSelected);
  });

  it('selects searchText', () => {
    expect(selectSearchText(state)).toEqual(dataStore.searchText);
  });
});
