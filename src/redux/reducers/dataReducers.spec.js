import dataReducer, { INITIAL_STATE } from './dataReducer';
import * as dataActions from '../actions/dataActions';
import { dataProcessedMock } from '../../../__mocks__/getDataMock';
import { c3p0 } from '../../../__mocks__/charInfoMock';
import { dataStore } from '../../../__mocks__/dataStateMock';

describe('Data reducer tests', () => {
  it('initilizes to initial state', () => {
    expect(dataReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('toggles loading data to true', () => {
    expect(dataReducer(INITIAL_STATE, dataActions.toggleDataLoading(true))).toEqual({
      ...INITIAL_STATE,
      loadingData: true,
    });
  });

  it('updates data from the api when the fetch has succeeded', () => {
    expect(dataReducer(INITIAL_STATE, dataActions.fetchApiSuccess(dataProcessedMock))).toEqual({
      ...INITIAL_STATE,
      loadingData: false,
      error: '',
      ...dataProcessedMock,
    });
  });

  it('updates error when the fetch has failed', () => {
    expect(
      dataReducer(INITIAL_STATE, dataActions.fetchApiFailure('Request failed with status code 404'))
    ).toEqual({
      ...INITIAL_STATE,
      error: 'Request failed with status code 404',
    });
  });

  it('saves selected character to savedArray', () => {
    expect(dataReducer(dataStore, dataActions.saveCharacter(c3p0))).toEqual({
      ...dataStore,
      savedArray: [...dataStore.savedArray, c3p0],
    });
  });

  it('removes selected character from savedArray', () => {
    expect(dataReducer(dataStore, dataActions.removeCharacter('R2-D2'))).toEqual({
      ...dataStore,
      savedArray: dataStore.savedArray.filter(character => character.name !== 'R2-D2'),
    });
  });

  it('stores character to show in information component', () => {
    expect(dataReducer(dataStore, dataActions.selectCharacter(c3p0))).toEqual({
      ...dataStore,
      characterSelected: c3p0,
    });
  });
  it('stores gender filter for savedArray', () => {
    expect(dataReducer(dataStore, dataActions.setFilter('All'))).toEqual({
      ...dataStore,
      savedFilter: 'All',
    });
  });
  it('stores search text from current search', () => {
    expect(dataReducer(dataStore, dataActions.setSeachText('skywalker'))).toEqual({
      ...dataStore,
      searchText: 'skywalker',
    });
  });

  it('returns state as default option', () => {
    expect(dataReducer(dataStore, {})).toEqual({
      ...dataStore,
    });
  });
});
