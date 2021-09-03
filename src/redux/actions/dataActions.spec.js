import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

import * as dataActions from './dataActions';
import DATA from '../types/dataTypes';
import { dataFromApiMock, dataProcessedMock } from '../../../__mocks__/getDataMock';
import { c3p0 } from '../../../__mocks__/charInfoMock';

describe('Data actions tests', () => {
  const store = configureStore([thunkMiddleware])();

  beforeEach(() => {
    store.clearActions();
  });

  describe('Sync data actions tests', () => {
    it('toggles to true loadingData', () => {
      const expectedToggleDataLoading = {
        type: DATA.TOGGLE_DATA_LOADING,
        payload: true,
      };
      expect(dataActions.toggleDataLoading(true)).toEqual(expectedToggleDataLoading);
    });

    it('updates data received from the api', () => {
      const expectedFetchApiSuccess = { type: DATA.FETCH_API_SUCCESS, payload: dataProcessedMock };
      expect(dataActions.fetchApiSuccess(dataProcessedMock)).toEqual(expectedFetchApiSuccess);
    });

    it('updates error received from the api', () => {
      const expectedFetchApiFailure = {
        type: DATA.FETCH_API_FAILURE,
        payload: 'Request failed with status code 404',
      };
      expect(dataActions.fetchApiFailure('Request failed with status code 404')).toEqual(
        expectedFetchApiFailure
      );
    });

    it('saves selected character to saveArray', () => {
      const expectedSaveCharacter = {
        type: DATA.SAVE_CHARACTER,
        payload: c3p0,
      };
      expect(dataActions.saveCharacter(c3p0)).toEqual(expectedSaveCharacter);
    });

    it('removes selected character from saveArray', () => {
      const expectedRemoveCharacter = {
        type: DATA.REMOVE_CHARACTER,
        payload: 'c3p0',
      };
      expect(dataActions.removeCharacter('c3p0')).toEqual(expectedRemoveCharacter);
    });

    it('sets the selected filter for saveArray', () => {
      const expectedSetFilter = {
        type: DATA.SET_FILTER,
        payload: 'All',
      };
      expect(dataActions.setFilter('All')).toEqual(expectedSetFilter);
    });

    it('sets the text filter for api search', () => {
      const expectedSetSeachText = {
        type: DATA.SET_SEARCH_TEXT,
        payload: 'skywalker',
      };
      expect(dataActions.setSeachText('skywalker')).toEqual(expectedSetSeachText);
    });
  });

  describe('Async data action tests', () => {
    const mock = new MockAdapter(axios);

    beforeEach(() => {
      mock.reset();
    });

    it('dispatches fetchApiStart, triggers toogleDataLoading, gets data from the api and dispatches fetchApiSuccess with the response', async () => {
      mock.onGet('https://swapi.dev/api/people/?search=').reply(200, dataFromApiMock);
      await store.dispatch(dataActions.fetchApiStart('https://swapi.dev/api/people/?search='));
      const expectedToggleDataLoading = dataActions.toggleDataLoading(true);
      const expectedFetchApiSuccess = dataActions.fetchApiSuccess(dataProcessedMock);
      const actions = store.getActions();
      expect(actions[0]).toEqual(expectedToggleDataLoading);
      expect(actions[1]).toEqual(expectedFetchApiSuccess);
    });

    it('dispatches fetchApiStart, triggers toogleDataLoading, fails to get data from the api and dispatches fetchApiFailure with the error', async () => {
      mock.onGet('https://swapi.dev/api/people/?search=').reply(200, dataFromApiMock);
      await store.dispatch(dataActions.fetchApiStart('https://swap.co/ap/peopl/?search='));
      const expectedToggleDataLoading = dataActions.toggleDataLoading(true);
      const expectedFetchApiFailure = dataActions.fetchApiFailure(
        'Request failed with status code 404'
      );
      const actions = store.getActions();
      expect(actions[0]).toEqual(expectedToggleDataLoading);
      expect(actions[1]).toEqual(expectedFetchApiFailure);
    });
  });
});
